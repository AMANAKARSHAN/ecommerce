import mongoose, { Schema } from "mongoose";

const productDetail = new Schema({
  id: { type: Number, require: true },
  name: { type: String, require: true },
  description: { type: String },
  availableCount: { type: String, min: 0 },
  price: { type: Number, min: 0 },
  discount: { type: Number, min: 0, max: 100 },
  rating: { type: Number, min: 0, max: 5 },
});

export const productModel = mongoose.model("product", productDetail);
