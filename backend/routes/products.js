// routes/products.js
import express from "express";
import Product from "../models/Product.js";
import { auth } from "../middleware/auth.js";

const router = express.Router();

router.get("/", async (req, res) => {
  try {
    const products = await Product.find();
    return res.json({ products, total: products.length });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Failed to list products" });
  }
});


router.get("/:id", async (req, res) => {
  try {
    const p = await Product.findById(req.params.id);
    if (!p) return res.status(404).json({ error: "Not found" });

    return res.json(p);
  } catch (err) {
    console.error("Product get error:", err);
    return res.status(500).json({ error: "Failed to fetch product" });
  }
});

router.post("/", auth, async (req, res) => {
  try {
    if (!req.user?.isAdmin)
      return res.status(403).json({ error: "forbidden: admin only" });

    const { title, description, price, images = [], stock = 0, category } =
      req.body;

    if (!title || !price)
      return res.status(400).json({ error: "title and price required" });

    const product = await Product.create({
      title,
      description,
      price: Number(price),
      images,
      stock: Number(stock),
      category,
    });

    return res.json(product);
  } catch (err) {
    console.error("Product create error:", err);
    return res.status(500).json({ error: "Failed to create product" });
  }
});

export default router;