import React from "react";
import Footer from "../pages/Footer";

export default function About() {
  return (
    <>
    <div className="min-h-screen bg-[#eaf7f0] py-16 px-6">
      <div className="max-w-6xl mx-auto">

        {/* Heading */}
        <h1 className="text-4xl sm:text-5xl font-extrabold text-center text-[#073b33] mb-10">
          About Us
        </h1>

        {/* Intro Section */}
        <div className="bg-white p-8 sm:p-12 rounded-3xl shadow-lg">
          <h2 className="text-3xl font-bold text-[#0f5132] mb-4">
            Who We Are
          </h2>

          <p className="text-gray-700 leading-relaxed text-lg">
            At <span className="font-semibold">Trendspire</span>, we believe fashion is more 
            than clothing — it’s identity, expression, and confidence. We provide premium-quality 
            products at unbeatable prices, ensuring our customers feel stylish and comfortable 
            every day.
          </p>

          <p className="text-gray-700 mt-4 leading-relaxed text-lg">
            Founded by passionate creators, Trendspire has grown into a trusted brand with 
            thousands of happy customers. Our mission is simple:  
            <span className="font-medium italic">“Bring trendy fashion closer to everyone.”</span>
          </p>
        </div>

        {/* Values Section */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
          {[
            {
              title: "Quality First",
              desc: "We use high-grade materials to ensure perfect comfort and durability.",
            },
            {
              title: "Affordable Fashion",
              desc: "Trendy, premium, and still easy on your wallet. Fashion for everyone.",
            },
            {
              title: "Customer Centric",
              desc: "Your trust drives us. We ensure smooth delivery, easy returns, and top support.",
            },
          ].map((item, i) => (
            <div key={i} className="bg-white p-8 rounded-2xl shadow-md hover:shadow-lg transition">
              <h3 className="text-2xl font-bold text-[#0f5132] mb-3">{item.title}</h3>
              <p className="text-gray-600 leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
    <Footer/>
    </>
  );
}
