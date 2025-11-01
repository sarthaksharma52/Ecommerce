import React, { useEffect, useState } from "react";
import API from "../api";
import { Link } from "react-router-dom";
import Footer from "./Footer";

export default function ProductList() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    API.get("/products").then((r) => setProducts(r.data.products));
  }, []);

  return (
    <>
      <div className="bg-[#eaf7f0] min-h-screen w-full pt-10 pb-20">

        <h2 className="text-4xl font-extrabold text-center mb-10 text-[#265c4b]">
          Explore Our Collection
        </h2>

        <div className="max-w-7xl mx-auto grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6 px-4">
          {products.map((p) => (
            <div
              key={p._id}
              className="bg-white rounded-2xl shadow-md hover:shadow-xl transition transform hover:-translate-y-1"
            >
              <img
                src={
                  p.images?.[0] ||
                  "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=600"
                }
                className="w-full h-52 object-cover rounded-t-2xl"
                alt={p.title}
              />

              <div className="p-4">
                <h3 className="font-semibold text-lg line-clamp-1">
                  {p.title}
                </h3>

                <p className="text-[#1e8c6d] font-bold text-xl mt-1">
                  ₹ {p.price}
                </p>

                <Link
                  to={`/product/${p._id}`}
                  className="mt-4 inline-block bg-[#265c4b] text-white px-5 py-2 rounded-lg font-semibold hover:bg-[#1f4d3e] transition shadow"
                >
                  View Product →
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>

      <Footer />
    </>
  );
}
