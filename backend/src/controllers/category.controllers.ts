import { RequestHandler } from "express";
import { CategoryModel } from "../models/category.model";

export const getAllCategory: RequestHandler = async (req, res) => {
  const category = await CategoryModel.find({});
  res.json(category);
};

export const createCategory: RequestHandler = async (req, res) => {
  const { categoryName } = req.body;

  const newCategory = await CategoryModel.create({
    categoryName,
  });
  res.json(newCategory);
};
