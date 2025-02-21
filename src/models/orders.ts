import mongoose from "mongoose";

const OrderSchema = new mongoose.Schema(
  {
    customerId: { type: String, required: true },
    customerName: { type: String, required: true },
    shippingAddress: { type: String, required: true },
    customerEmail: { type: String, required: true },
    customerPhone: { type: String, required: true },
    orderPrice: { type: Number, required: true },
    items: { type: Number, required: true },
    status: {
      type: String,
      enum: ["Pending", "Processing", "Shipped", "Delivered", "Cancelled"],
      default: "Pending",
    },
    products: [
      { product: { type: mongoose.Schema.Types.ObjectId, ref: "Product" } },
    ],
    paymentId: { type: String, required: true },
    orderId: { type: String, required: true },
  },
  { timestamps: true }
);
const Order = mongoose.models.Order || mongoose.model("Order", OrderSchema);

export default Order;
