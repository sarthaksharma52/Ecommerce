import mongoose from "mongoose";
import dotenv from "dotenv";
import Product from "./models/Product.js";

dotenv.config();

const products = [
  {
    title: "Classic White Sneakers",
    description: "Minimal, lightweight and perfect for everyday wear.",
    price: 1999,
    images: ["https://picsum.photos/id/21/600"],
    stock: 25,
    category: "Footwear",
  },
  {
    title: "Wireless Bluetooth Headphones",
    description: "Noise-cancelling over-ear headphones with long battery life.",
    price: 3499,
    images: ["https://picsum.photos/id/180/600"],
    stock: 18,
    category: "Electronics",
  },
  {
    title: "Cotton Oversized T-Shirt",
    description: "Premium 240 GSM heavy cotton tee with relaxed fit.",
    price: 799,
    images: ["https://picsum.photos/id/102/600"],
    stock: 50,
    category: "Clothing",
  },
];

async function seed() {
  if (!process.env.MONGO_URI) {
    console.error("❌ MONGO_URI is missing in .env");
    process.exit(1);
  }

  try {
    console.log("⏳ Connecting to MongoDB...");
    await mongoose.connect(process.env.MONGO_URI);
    console.log("✅ Connected!");

    console.log("🧹 Clearing products...");
    await Product.deleteMany({});

    console.log("🌱 Seeding products...");
    await Product.insertMany(products);

    console.log("✅ Products seeded successfully!");
    process.exit(0);
  } catch (err) {
    console.error("❌ Error while seeding:", err);
    process.exit(1);
  }
}

seed();