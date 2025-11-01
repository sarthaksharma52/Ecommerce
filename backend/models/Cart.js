import mongoose from 'mongoose';
const itemSchema = new mongoose.Schema({
  product: { type: mongoose.Schema.Types.ObjectId, ref: 'Product' },
  qty: { type: Number, default: 1 }
});
const cartSchema = new mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: 'User', unique: true },
  items: [itemSchema]
}, { timestamps: true });
export default mongoose.model('Cart', cartSchema);
