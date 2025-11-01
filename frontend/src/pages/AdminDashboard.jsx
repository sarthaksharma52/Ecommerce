import React, { useContext, useState } from "react";
import API from "../api";
import { AuthContext } from "../auth/AuthContext";
import Footer from "./Footer";

export default function AdminDashboard() {
  const { user, token } = useContext(AuthContext);
  const [msg, setMsg] = useState("");
  const [form, setForm] = useState({});

  const submit = async (e) => {
    e.preventDefault();
    setMsg("");

    if (!user?.isAdmin) {
      setMsg("❌ You are not admin");
      return;
    }

    const body = {
      title: form.title,
      description: form.description,
      price: Number(form.price),
      stock: Number(form.stock),
      images: [],
    };

    try {
      const res = await API.post("/products", body, {
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
      });

      setMsg("✅ Product created: " + res.data.title);
    } catch (err) {
      console.error("Create error:", err.response?.data || err.message);
      setMsg("❌ Failed: " + (err.response?.data?.error || "Error"));
    }
  };

  return (
    <>
    <div className="max-w-lg mx-auto mt-10 mb-20 bg-white p-8 shadow rounded">
      <h2 className="text-2xl font-bold mb-6">Admin: Add Product</h2>

      <form onSubmit={submit} className="space-y-4">
        <input
          placeholder="Title"
          className="border p-3 rounded w-full"
          onChange={(e) => setForm({ ...form, title: e.target.value })}
        />

        <textarea
          placeholder="Description"
          className="border p-3 rounded w-full"
          onChange={(e) => setForm({ ...form, description: e.target.value })}
        />

        <input
          placeholder="Price"
          type="number"
          className="border p-3 rounded w-full"
          onChange={(e) => setForm({ ...form, price: e.target.value })}
        />

        <input
          placeholder="Stock"
          type="number"
          className="border p-3 rounded w-full"
          onChange={(e) => setForm({ ...form, stock: e.target.value })}
        />

        <button className="w-full bg-green-600 text-white py-3 rounded hover:bg-green-700">
          Add Product
        </button>
      </form>

      {msg && <p className="mt-4 text-green-700 font-semibold">{msg}</p>}
      
    </div>
    <Footer/>
    </>
  );
}
