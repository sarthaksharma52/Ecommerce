import React from "react";
import { Link } from "react-router-dom";
import Footer from "./Footer";

export default function SuccessOrder() {
  return (
    <>
    <div className="min-h-[70vh] flex items-center justify-center p-6">
      <div className="bg-white shadow-2xl rounded-2xl p-10 text-center max-w-lg w-full">
        
        {/* Success Icon */}
        <div className="flex justify-center">
          <img
            src="https://cdn-icons-png.flaticon.com/512/845/845646.png"
            alt="Success"
            className="w-28 animate-bounce"
          />
        </div>

        <h2 className="text-3xl font-bold text-green-600 mt-6">
          Order Placed Successfully!
        </h2>

        <p className="text-gray-600 mt-3 text-lg">
          Thank you for shopping with us.  
          Your order has been confirmed and is being processed.
        </p>

        <Link
          to="/"
          className="mt-8 inline-block border border-green-600 text-green-600 px-8 py-3 rounded-lg text-lg font-semibold hover:bg-green-50 shadow flex items-center gap-2 justify-center transition"
        >
          <span className="text-xl">←</span> Continue Shopping
        </Link>
      </div>
      
    </div>
    <Footer/>
    </>

  );
}
