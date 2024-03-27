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
    qty,
    images,
    category,
    subCategory,
    // color,
    // size,
    // tags,
  } = req.body;

  const product = await ProductModel.create({
    productName,
    description,
    price,
    qty,
    images,
    category,
    subCategory,
    // color,
    // size,
    // tags,
  });

  res.json({ product, message: "Бүтээгдэхүүн амжилттай нэмэгдлээ" });
};

export const deleteProduct: RequestHandler = async (req, res) => {
  const { id } = req.body;
  const isProductExist = await ProductModel.findOne({ _id: id });
  if (!isProductExist) {
    return res.status(400).json("Wrong product ID");
  }
  await ProductModel.findOneAndDelete({ _id: id });
  res.json({ message: "Бүтээгдэхүүн устлаа" });
};

export const editProduct: RequestHandler = async (req, res) => {
  const {
    id,
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

  const isProductExist = await ProductModel.findOne({ id });
  if (!isProductExist) {
    return res.json("Wrong product ID");
  }

  const editProduct = await ProductModel.findOneAndUpdate(
    { id: id },
    {
      $set: {
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
      },
    }
  );
  res.json("Product edited");
};
