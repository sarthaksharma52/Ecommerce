import React, { useState, useEffect, useContext } from "react";
import { useParams, useNavigate } from "react-router-dom";
import API from "../api";
import { AuthContext } from "../auth/AuthContext";
import Footer from "./Footer";

export default function ProductDetails() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [qty, setQty] = useState(1);
  const { token } = useContext(AuthContext);
  const navigate = useNavigate();

  useEffect(() => {
    API.get(`/products/${id}`).then((r) => setProduct(r.data));
  }, [id]);

  const addToCart = async () => {
    if (!token) return navigate("/login");

    await API.post("/cart/add", { productId: id, qty });
    navigate("/cart");
  };

  if (!product) return <div className="p-6 text-center text-lg">Loading...</div>;

  return (
    <>
    <div className="max-w-6xl mx-auto p-6 grid md:grid-cols-2 gap-12">

      <div>
        <div className="bg-white shadow rounded-xl p-4">
          <img
            src={product.images?.[0] || "https://via.placeholder.com/500"}
            className="w-full h-96 object-cover rounded-xl"
            alt="product"
          />
        </div>

        <div className="flex gap-4 mt-4">
          {(product.images || []).map((img, idx) => (
            <img
              key={idx}
              src={img}
              className="w-20 h-20 object-cover rounded-md cursor-pointer border hover:scale-105 transition"
              onClick={() => {
                setProduct({ ...product, images: [img, ...product.images.filter(i => i !== img)] });
              }}
            />
          ))}
        </div>
      </div>

      <div className="bg-white p-6 rounded-xl shadow-lg">
        <h2 className="text-4xl font-bold">{product.title}</h2>

        <p className="text-green-600 font-bold text-3xl mt-3">
          ₹ {product.price}
        </p>

        <p className="mt-5 text-gray-700 leading-relaxed text-lg">
          {product.description}
        </p>

        <div className="mt-6">
          <label className="block font-semibold mb-1">Quantity</label>
          <div className="flex items-center gap-4">
            <button
              onClick={() => setQty((q) => Math.max(1, q - 1))}
              className="w-10 h-10 flex items-center justify-center bg-gray-200 text-xl rounded-full hover:bg-gray-300"
            >
              -
            </button>

            <input
              type="number"
              min="1"
              value={qty}
              onChange={(e) =>
                setQty(Math.max(1, Number(e.target.value)))
              }
              className="border px-3 py-2 rounded w-20 text-center text-lg"
            />

            <button
              onClick={() => setQty((q) => q + 1)}
              className="w-10 h-10 flex items-center justify-center bg-gray-200 text-xl rounded-full hover:bg-gray-300"
            >
              +
            </button>
          </div>
        </div>

        <div className="mt-8 flex flex-col gap-4">
          <button
            onClick={addToCart}
            className="bg-blue-600 text-white py-3 rounded-xl text-lg font-semibold hover:bg-blue-700 transition shadow"
          >
            Add to Cart
          </button>

          <button
            className="border border-blue-600 text-blue-600 py-3 rounded-xl text-lg font-semibold hover:bg-blue-50 transition"
            onClick={() => navigate("/")}
          >
            Continue Shopping
          </button>
        </div>
      </div>
      
    </div>
    <Footer/>
    </>
  );
}
