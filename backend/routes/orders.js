import express from 'express';
import { auth } from '../middleware/auth.js';
import Cart from '../models/Cart.js';
import Order from '../models/Orders.js';
import Product from '../models/Product.js';
const router = express.Router();

router.post('/', auth, async (req,res)=>{
  const { address } = req.body;
  const cart = await Cart.findOne({ user: req.user.id }).populate('items.product');
  if(!cart || cart.items.length===0) return res.status(400).json({ error: 'Cart empty' });

  const items = cart.items.map(i => ({
    product: i.product._id,
    qty: i.qty,
    priceAtPurchase: i.product.price
  }));
  const total = items.reduce((s,i) => s + i.priceAtPurchase * i.qty, 0);

  const order = await Order.create({ user: req.user.id, items, total, address });
  cart.items = [];
  await cart.save();
  res.json(order);
});

router.get('/', auth, async (req,res)=>{
  const orders = await Order.find({ user: req.user.id }).populate('items.product');
  res.json(orders);
});

export default router;
