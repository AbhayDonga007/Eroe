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
    size: {
      type: Array<String>,
      required: true,
    },
    customerPrize: {
      type: Number,
      required: true,
    },
    productPrize: {
      type: Number,
      required: true,
    },
    retailPrize: {
      type: Number,
      required: true,
    },
    artical_no: {
      type: String,
      required: true,
    },
    color: {
      type: Array<String>,
      required: true,
    },
    images: {
      type: Array<String>,
      required: true,
    },

    // images : [{
    //     type: String,
    //     required: true
    // }],
  },
  { timestamps: true }
);

const Product =
  mongoose.models.Product || mongoose.model("Product", userSchema);

export default Product;
