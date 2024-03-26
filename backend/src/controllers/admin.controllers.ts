import { RequestHandler } from "express";
import { CategoryModel } from "../models/category.model";
import { CategorySubModel } from "../models/categorySub.model";
import { UserModel } from "../models";

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
export const getAllCategorySub: RequestHandler = async (req, res) => {
  const { categoryName } = req.body;
  const categorySub = await CategorySubModel.find({ categoryName });
  res.json(categorySub);
};

export const createCategorySub: RequestHandler = async (req, res) => {
  const { categoryName, subCategory } = req.body;

  const newCategorySub = await CategorySubModel.create({
    categoryName,
    subCategory,
  });
  res.json(newCategorySub);
};

export const getAllUser: RequestHandler = async (req, res) => {
  const alluser = await UserModel.find({});
  return res.json({ alluser });
};
