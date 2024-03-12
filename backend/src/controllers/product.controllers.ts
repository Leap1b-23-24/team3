import { RequestHandler } from "express";
import { ProductModel } from "../models";

export const getAllProduct: RequestHandler = async (req, res) => {
  const product = await ProductModel.find({});
  if(!product)
  res.json(product);
};

export const createProduct: RequestHandler = async (req, res) => {
  const { productName, discription, thumbnails, discount, qty, image, category, subCategory, color, size, tag} = req.body;
  
  const product = await ProductModel.create({ productName, discription, thumbnails, discount, qty, image, category, subCategory, color, size, tag });

  res.json(product);
};
