import React from "react";
import Footer from "../pages/Footer";

export default function Testimonials() {
  const reviews = [
    {
      name: "Aditi Verma",
      review:
        "Amazing quality and super fast delivery! Trendspire never disappoints. Will definitely shop again!",
      rating: 5,
      img: "https://randomuser.me/api/portraits/women/44.jpg",
    },
    {
      name: "Rahul Mehta",
      review:
        "The fabric is incredibly comfortable and the fitting is perfect. One of the best online stores!",
      rating: 4,
      img: "https://randomuser.me/api/portraits/men/32.jpg",
    },
    {
      name: "Simran Kaur",
      review:
        "Affordable, stylish, and premium quality! Loved the packaging and customer support.",
      rating: 5,
      img: "https://randomuser.me/api/portraits/women/68.jpg",
    },
    {
      name: "Karan Gupta",
      review:
        "Trendy products at great prices. Delivery was on time and the quality exceeded expectations.",
      rating: 5,
      img: "https://randomuser.me/api/portraits/men/50.jpg",
    },
    {
      name: "Riya Sharma",
      review:
        "Perfect fit and awesome material. Trendspire has become my go-to for online shopping!",
      rating: 5,
      img: "https://randomuser.me/api/portraits/women/12.jpg",
    },
    {
      name: "Arnav Singh",
      review:
        "Highly impressed with the quality. Great customer support and fast delivery too!",
      rating: 4,
      img: "https://randomuser.me/api/portraits/men/75.jpg",
    },
  ];

  return (
    <>
    <div className="min-h-screen bg-[#eaf7f0] py-16 px-6">
      <div className="max-w-6xl mx-auto">

        {/* Page Title */}
        <h1 className="text-4xl sm:text-5xl font-extrabold text-center text-[#073b33] mb-12">
          This Is What Our Customers Say!
        </h1>

        {/* Testimonials Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {reviews.map((t, i) => (
            <div
              key={i}
              className="bg-white p-8 rounded-3xl shadow-md hover:shadow-xl 
              transition border border-green-100"
            >
              {/* User Image */}
              <div className="flex justify-center mb-5">
                <img
                  src={t.img}
                  alt={t.name}
                  className="w-20 h-20 rounded-full object-cover border-4 border-green-200 shadow"
                />
              </div>

              {/* Rating */}
              <div className="flex justify-center mb-3 text-yellow-500 text-xl">
                {"⭐".repeat(t.rating)}
              </div>

              {/* Review */}
              <p className="text-gray-700 text-lg leading-relaxed italic text-center">
                "{t.review}"
              </p>

              {/* Name */}
              <p className="mt-5 font-bold text-[#0f5132] text-xl text-center">
                {t.name}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
    <Footer/>
    </>
  );
}
