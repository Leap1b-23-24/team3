import { Schema, model } from "mongoose";

const productCategorySub = new Schema({
  categoryName: {
    categorySubName: {
      type: String,
      require: true,
    },
  },
});
export const CategorySubModel = model("categorySub", productCategorySub);
