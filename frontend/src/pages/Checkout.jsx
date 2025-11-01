import React, { useState } from "react";
import API from "../api";
import { useNavigate } from "react-router-dom";
import Footer from "./Footer";

export default function Checkout() {
  const [address, setAddress] = useState("");
  const [loading, setLoading] = useState(false);
  const nav = useNavigate();

  const submit = async () => {
    if (!address.trim()) return alert("Address is required");

    try {
      setLoading(true);
      await API.post("/orders", { address });

      nav("/order-success");
    } catch (err) {
      console.error(err);
      alert(err?.response?.data?.error || "Failed to place order");
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
    <div className="max-w-xl mx-auto p-6">
      <h2 className="text-4xl font-bold mb-6 text-gray-900">Checkout</h2>

      <div className="bg-white shadow-xl rounded-2xl p-6 space-y-6">
        {/* Address label */}
        <div>
          <label className="block text-lg font-semibold mb-2 text-gray-700">
            Delivery Address
          </label>

          <textarea
            value={address}
            onChange={(e) => setAddress(e.target.value)}
            rows={5}
            className="w-full p-4 border rounded-xl shadow-sm text-gray-800 focus:ring-2 focus:ring-blue-500 focus:outline-none"
            placeholder="Enter your complete address with street, city, state, and pincode..."
          />
        </div>

        {/* Place Order button */}
        <button
          onClick={submit}
          disabled={loading}
          className={`w-full py-4 rounded-xl text-white text-lg font-semibold transition shadow
            ${
              loading
                ? "bg-blue-400 cursor-not-allowed"
                : "bg-blue-600 hover:bg-blue-700"
            }
          `}
        >
          {loading ? (
            <span className="flex items-center justify-center gap-2">
              <svg
                className="w-5 h-5 animate-spin"
                fill="none"
                stroke="white"
                viewBox="0 0 24 24"
              >
                <circle
                  className="opacity-25"
                  cx="12"
                  cy="12"
                  r="10"
                  strokeWidth="4"
                />
                <path
                  className="opacity-75"
                  fill="white"
                  d="M4 12a8 8 0 018-8v4l3-3-3-3v4a8 8 0 00-8 8h4z"
                />
              </svg>
              Placing Order...
            </span>
          ) : (
            "Place Order"
          )}
        </button>
      </div>
      
    </div>
    <Footer/>
    </>
  );
}
