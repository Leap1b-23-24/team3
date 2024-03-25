import { Schema, model } from "mongoose";

const productSchema = new Schema({
  productName: {
    type: String,
    required: false,
  },
  description: {
    type: String,
    required: false,
  },
  price: {
    type: Number,
    required: false,
  },
  thumbnail: {
    type: String,
    required: false,
  },
  qty: {
    type: Number,
    required: false,
  },
  // images: [
  //   {
  //     imageLink: {
  //       type: String,
  //       require: false,
  //     },
  //   },
  // ],
  category: {
    type: String,
    required: false,
  },
  subCategory: {
    type: String,
    required: false,
  },
  // color: [
  //   {
  //     colorName: {
  //       type: String,
  //       required: false,
  //     },
  //     colorCode: {
  //       type: String,
  //       required: false,
  //     },
  //   },
  // ],
  // size: [
  //   {
  //     sizeType: {
  //       type: String,
  //       require: false,
  //     },
  //   },
  // ],
  // tags: [
  //   {
  //     tagsName: {
  //       type: String,
  //       required: false,
  //     },
  //   },
  // ],
  createdAt: {
    type: Date,
    default: Date.now(),
  },
  sales: {
    type: Number,
    require: false,
    default: 0,
  },
});

export const ProductModel = model("product", productSchema);
