import { Schema, model } from "mongoose";

const productSchema = new Schema({
  productName: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  thumbnail: {
    type: String,
    required: true,
  },
  discount: {
    type: Number,
    default: 0,
    required: true,
  },
  qty: {
    type: Number,
    required: true,
  },
  // images: [
  //   {
  //     imageLink: {
  //       type: String,
  //       require: true,
  //     },
  //   },
  // ],
  category: {
    type: String,
    required: true,
  },
  subCategory: {
    type: String,
    required: true,
  },
  // color: [
  //   {
  //     colorName: {
  //       type: String,
  //       required: true,
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
  //       required: true,
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
