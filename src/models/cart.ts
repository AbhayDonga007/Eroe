import mongoose, { model, Schema } from "mongoose";

const userSchema = new Schema(
  {
    userId: {
      type: String,
      required: true,
    },
    products:[{
      productId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Product',
        required: true,
      },
      productQnt:{
        type: Number,
        required: true,
      }
    }],
  },
  { timestamps: true }
);

const Cart = mongoose.models.Cart || mongoose.model("Cart", userSchema);

export default Cart;
