import { RequestHandler } from "express";
import { ProductModel } from "../models";

export const getAllProduct: RequestHandler = async (req, res) => {
  const product = await ProductModel.find({});

  if (!product) {
    return res.status(400).json({ message: "Not found" });
  }

  res.json(product);
};

export const createProduct: RequestHandler = async (req, res) => {
  const {
    productName,
    description,
    price,
    thumbnail,
    discount,
    qty,
    images,
    category,
    subCategory,
    color,
    size,
    tags,
  } = req.body;

  const product = await ProductModel.create({
    productName,
    description,
    price,
    thumbnail,
    discount,
    qty,
    images,
    category,
    subCategory,
    color,
    size,
    tags,
  });

  res.json(product);
};
