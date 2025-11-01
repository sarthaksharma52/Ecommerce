import React, { useState, useContext } from "react";
import API from "../api";
import { AuthContext } from "../auth/AuthContext";
import { useNavigate } from "react-router-dom";

export default function LoginRegister() {
  const [isLogin, setIsLogin] = useState(true);
  const [form, setForm] = useState({});
  const [msg, setMsg] = useState(null);
  const [type, setType] = useState("error");
  const { login } = useContext(AuthContext);
  const navigate = useNavigate();

  const showAlert = (type, text) => {
    setType(type);
    setMsg(text);
    setTimeout(() => setMsg(null), 3500);
  };

  const validate = () => {
    if (!isLogin) {
      if (!form.name || form.name.trim().length < 3) {
        return "Name must be at least 3 characters.";
      }
    }

    if (!form.email || !/\S+@\S+\.\S+/.test(form.email)) {
      return "Enter a valid email address.";
    }

    if (!form.password || form.password.length < 6) {
      return "Password must be at least 6 characters long.";
    }

    return null;
  };

  const submit = async (e) => {
    e.preventDefault();

    const validationError = validate();
    if (validationError) {
      return showAlert("error", validationError);
    }

    try {
      const endpoint = isLogin ? "/auth/login" : "/auth/register";
      const res = await API.post(endpoint, form);

      login(res.data.token, res.data.user);

      showAlert("success", isLogin ? "Login Successful!" : "Account Created Successfully!");

      setTimeout(() => navigate("/"), 1000);
    } catch (err) {
      const message = err.response?.data?.error || "Server error. Try again.";
      showAlert("error", message);
    }
  };

  return (
    <div className="max-w-md mx-auto mt-10 bg-white p-8 shadow-lg rounded-xl">

      {msg && (
        <div
          className={`mb-4 p-3 rounded text-white font-semibold shadow 
          ${type === "error" ? "bg-red-500" : "bg-green-600"}`}
        >
          {msg}
        </div>
      )}

      <h2 className="text-3xl font-bold mb-6 text-center text-[#265c4b]">
        {isLogin ? "Login" : "Create Account"}
      </h2>

      <form onSubmit={submit} className="space-y-4">

        {!isLogin && (
          <input
            placeholder="Full Name"
            value={form.name || ""}
            onChange={(e) => setForm({ ...form, name: e.target.value })}
            className="border p-3 rounded w-full focus:ring-2 focus:ring-green-400"
          />
        )}

        <input
          placeholder="Email Address"
          value={form.email || ""}
          onChange={(e) => setForm({ ...form, email: e.target.value })}
          className="border p-3 rounded w-full focus:ring-2 focus:ring-green-400"
        />

        <input
          placeholder="Password"
          type="password"
          value={form.password || ""}
          onChange={(e) => setForm({ ...form, password: e.target.value })}
          className="border p-3 rounded w-full focus:ring-2 focus:ring-green-400"
        />

        <button
          className="w-full bg-[#265c4b] text-white py-3 rounded-lg font-semibold hover:bg-[#1f4d3e] transition shadow-md"
        >
          {isLogin ? "Login" : "Create Account"}
        </button>

        <button
          type="button"
          onClick={() => setIsLogin(!isLogin)}
          className="w-full border py-3 rounded mt-2 font-semibold"
        >
          {isLogin ? "Create an Account" : "Already have an account?"}
        </button>
      </form>
    </div>
  );
}
