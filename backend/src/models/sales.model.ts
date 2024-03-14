import { Schema, model } from "mongoose";

const salesSchema = new Schema({
  userId: {
    type: String,
    require: true,
  },
  productId: {
    type: String,
    require: true,
  },
  productName: {
    type: String,
    require: true,
  },
  productPrice: {
    type: Number,
    require: true,
  },
  productQtySold: {
    type: Number,
    require: true,
  },
  productThumbnail: {
    type: String,
    require: true,
  },
});
export const SalesSchema = model("sales", salesSchema);
