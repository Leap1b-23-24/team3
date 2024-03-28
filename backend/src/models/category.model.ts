import { Schema, model } from "mongoose";

const productCategory = new Schema({
  categoryName: {
    type: String,
    require: true,
  },
});
export const CategoryModel = model("category", productCategory);
