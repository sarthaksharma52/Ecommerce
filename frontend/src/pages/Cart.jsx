import React, { useEffect, useState, useContext } from "react";
import API from "../api";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../auth/AuthContext";
import Footer from "./Footer";

export default function Cart() {
  const [cart, setCart] = useState(null);
  const navigate = useNavigate();
  const { token } = useContext(AuthContext);

  if (!token) {
    return (
      <>
        <div className="bg-[#eaf7f0] min-h-screen w-full p-6 flex flex-col items-center text-center">
          <h1 className="text-5xl font-extrabold mb-10">CART</h1>

          <div className="bg-[#dcfce7] w-full max-w-5xl p-10 rounded-3xl shadow-lg">
            <h2 className="text-4xl font-extrabold text-[#0f5132]">
              Cart? What Cart?
            </h2>

            <p className="mt-6 text-lg sm:text-xl text-gray-700 leading-relaxed">
              Looks like you’re trying to sneak into your cart without logging
              in! Log in to make sure your favorite items don’t disappear into
              thin air!
            </p>

            <p className="mt-4 text-green-700 font-semibold text-lg italic">
              "Don't worry, your cart is safe... once you're logged in!"
            </p>

            <button
              onClick={() => navigate("/login")}
              className="mt-8 bg-green-600 text-white px-10 py-3 rounded-xl text-lg font-semibold hover:bg-green-700 shadow transition"
            >
              Log In
            </button>

            <p className="mt-6 text-gray-700 text-lg">
              Don’t have an account? No worries!{" "}
              <Link
                to="/login"
                className="text-green-700 underline font-semibold"
              >
                Sign up here!
              </Link>{" "}
              We promise it’s quick and won’t cost you a penny!
            </p>
          </div>
        </div>
        <Footer />
      </>
    );
  }

  const load = () => {
    API.get("/cart").then((r) => setCart(r.data));
  };

  useEffect(() => load(), []);

  if (!cart) return <div className="p-6">Loading...</div>;

  const total = cart.items.reduce((sum, i) => sum + i.product.price * i.qty, 0);

  return (
    <>
      <div className="bg-[#eaf7f0] min-h-screen w-full">
        {/* Responsive Grid */}
        <div className="w-full grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* LEFT SECTION */}
          <div className="lg:col-span-2 p-4 sm:p-6">
            <h2 className="text-4xl font-bold">
              Shopping Cart{" "}
              <span className="font-extrabold italic underline"></span>
            </h2>

            <p className="mt-2 text-gray-700 text-lg">
              Here you go! Happy shopping 🎉
            </p>

            {/* EMPTY CART */}
            {cart.items.length === 0 && (
              <div className="bg-white mt-6 sm:mt-8 p-6 sm:p-10 rounded-2xl shadow-md w-full">
                <h3 className="text-3xl font-bold text-gray-800">
                  Oops! Your Cart is Empty
                </h3>

                <p className="mt-3 text-gray-600 text-lg">
                  Seems like your fashion cravings haven’t hit the cart yet! 😎
                </p>

                <div className="mt-6 bg-[#f2faf5] p-6 rounded-xl text-center text-gray-700">
                  <p className="font-medium italic">
                    “Shopping is cheaper than therapy... but empty carts are
                    just sad!”
                  </p>
                  <p className="mt-2">
                    Time to fill this cart with some trendy vibes! ✨
                  </p>
                </div>

                <Link
                  to="/"
                  className="block mt-6 bg-green-600 hover:bg-green-700 text-white w-full py-3 
             rounded-xl text-lg font-semibold shadow-md 
             flex justify-center items-center text-center"
                >
                  Start Shopping
                </Link>
              </div>
            )}

            {/* CART ITEMS */}
            {cart.items.length > 0 && (
              <div className="mt-8 space-y-6">
                {cart.items.map((i) => (
                  <div
                    key={i.product._id}
                    className="bg-white p-5 rounded-xl shadow flex flex-col sm:flex-row 
                  sm:items-center justify-between gap-4"
                  >
                    <div className="flex items-center gap-5">
                      <img
                        src={
                          i.product.images?.[0] ||
                          "https://via.placeholder.com/80"
                        }
                        className="w-24 h-24 object-cover rounded-lg border"
                      />
                      <div>
                        <p className="text-xl font-semibold">
                          {i.product.title}
                        </p>
                        <p className="text-green-600 text-lg font-bold">
                          ₹{i.product.price}
                        </p>
                      </div>
                    </div>

                    <div className="text-right">
                      <input
                        type="number"
                        min="1"
                        value={i.qty}
                        onChange={(e) =>
                          API.post("/cart/update", {
                            productId: i.product._id,
                            qty: Number(e.target.value),
                          }).then(() => load())
                        }
                        className="border p-2 rounded-lg w-20 text-center shadow-sm"
                      />

                      <button
                        onClick={() =>
                          API.post("/cart/remove", {
                            productId: i.product._id,
                          }).then(() => load())
                        }
                        className="block text-red-500 mt-2 hover:underline text-sm"
                      >
                        Remove
                      </button>
                    </div>
                  </div>
                ))}

                <button
                  onClick={() => navigate("/")}
                  className="w-full bg-green-600 text-white py-4 rounded-xl text-lg font-semibold shadow hover:bg-green-700"
                >
                  ← Continue Shopping
                </button>
              </div>
            )}
          </div>

          {/* RIGHT SECTION */}
          <div className="p-4 sm:p-6 space-y-6">
            <div className="bg-white p-6 rounded-xl shadow-md">
              <h3 className="text-xl font-semibold">Price Details</h3>
              <div className="mt-4 flex justify-between text-lg">
                <span>Total</span>
                <span className="font-bold">₹{total}</span>
              </div>
            </div>

            <div className="bg-green-50 p-6 rounded-xl shadow-md">
              <h3 className="text-xl font-semibold">Cart Total</h3>
              <p className="text-3xl text-green-700 font-bold mt-2">₹{total}</p>

              <button
                onClick={() => navigate("/checkout")}
                className="mt-6 w-full bg-green-600 text-white py-3 rounded-lg 
              text-lg font-semibold hover:bg-green-700 shadow"
              >
                Place Order →
              </button>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
