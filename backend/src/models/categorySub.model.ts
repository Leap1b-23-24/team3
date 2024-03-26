import { Schema, model } from "mongoose";

const productCategorySub = new Schema({
  categoryName: {
    type: String,
    require: true,
  },
  subCategory: [
    {
      subCategoryName: {
        type: String,
        require: true,
      },
    },
  ],
});
export const CategorySubModel = model("categorySub", productCategorySub);
