import mongoose from 'mongoose';
const orderSchema = new mongoose.Schema({
    user: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
    items: [{
        product: { type: mongoose.Schema.Types.ObjectId, ref: 'Product' },
        qty: Number,
        priceAtPurchase: Number
    }],
    total: Number,
    address: String,
    status: { type: String, default: 'pending' }
}, { timestamps: true });
export default mongoose.model('Order', orderSchema);
