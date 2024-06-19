import mongoose, { model, Schema } from "mongoose";

const userSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    des: {
      type: String,
      required: true,
    },
    type: {
        type: Array<String>,
        required: true,
      },
    oriPrice: {
        type: Number,
        required: true,
    },
    disPrice: {
        type: Number,
        required: true,
    },
    size: {
        type: Array<String>,
        required: true,
    },
    images: {
      type: String,
      required: true,
    },
    // images : [{
    //     type: String,
    //     required: true
    // }],
  },
  { timestamps: true }
);

const Product = mongoose.models.Product || mongoose.model("Product", userSchema);

export default Product;
