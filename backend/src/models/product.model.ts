import { Schema, model } from "mongoose";

const productSchema = new Schema({
  productName: {
    type: String,
    require: true,
  },
  discription:{
    type: String,
    require: true
  },
  price: {
    type: Number,
    require: true,
  },
  thumbnails:{
    type: String,
    require: true
  },
  discount: {
    type: Number,
    default: 0,
    require: false,
  },
  qty:{
    type: Number,
    require: true
  },
  image: [{
    type: String,
    require: true,
  }],
  category:{
    type: String,
    require: true,
  },
  subCategory:{
    type: String,
    require: true
  },
  color:[{
    colorName:{
      type: String,
      require: true
    },
    colorCode:{
      type: String,
      require: false
    }
  }],
  size:[{
    size: String,
    required: true
  }],
  tag:[{
    type: String,
    required: true
  }],
  createdAt:{
    type: Date,
    default: Date.now()
  }
});

export const ProductModel = model("product", productSchema);
