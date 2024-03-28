import mongoose, { Schema, model } from "mongoose";

const productSchema = new Schema({
  merchId: mongoose.Schema.Types.ObjectId,
  productName: String,
  description: String,
  productCode: String,
  images: Object,
  price: Number,
  category: String,
  subCategory: String,
  color: Object,
  size: Object,
  tags: Object,
  productReactionCount: { type: Number, required: false },
  qty: { type: Number, required: false },
  salePercent: { type: Number, required: false },
  stars: {
    1: { type: Number, required: false },
    2: { type: Number, required: false },
    3: { type: Number, required: false },
    4: { type: Number, required: false },
    5: { type: Number, required: false },
  },
  avgStars: { type: Number, required: false },
  reviewCount: { type: Number, required: false },
  updatedAt: Date,
  createdAt: Date,
});

export const ProductModel = model("product", productSchema);
