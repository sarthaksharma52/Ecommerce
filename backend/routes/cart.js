import express from 'express';
import Cart from '../models/Cart.js';
import Product from '../models/Product.js';
import { auth } from '../middleware/auth.js';
const router = express.Router();

router.get('/', auth, async (req, res) => {
  let cart = await Cart.findOne({ user: req.user.id }).populate('items.product');
  if (!cart) cart = await Cart.create({ user: req.user.id, items: [] });
  res.json(cart);
});

router.post('/add', auth, async (req, res) => {
  const { productId, qty = 1 } = req.body;
  const prod = await Product.findById(productId);
  if (!prod) return res.status(404).json({ error: 'product not found' });
  let cart = await Cart.findOne({ user: req.user.id });
  if (!cart) cart = await Cart.create({ user: req.user.id, items: [] });
  const idx = cart.items.findIndex(i => i.product.toString() === productId);
  if (idx >= 0) cart.items[idx].qty += qty;
  else cart.items.push({ product: productId, qty });
  await cart.save();
  const populated = await cart.populate('items.product');
  res.json(populated);
});

router.post('/update', auth, async (req, res) => {
  const { productId, qty } = req.body;
  const cart = await Cart.findOne({ user: req.user.id });
  if (!cart) return res.status(404).json({ error: 'cart not found' });
  cart.items = cart.items.map(i => i.product.toString() === productId ? { ...i._doc, qty } : i);
  await cart.save();
  res.json(await cart.populate('items.product'));
});

router.post('/remove', auth, async (req, res) => {
  const { productId } = req.body;
  const cart = await Cart.findOne({ user: req.user.id });
  if (!cart) return res.status(404).json({ error: 'cart not found' });
  cart.items = cart.items.filter(i => i.product.toString() !== productId);
  await cart.save();
  res.json(await cart.populate('items.product'));
});

export default router;
