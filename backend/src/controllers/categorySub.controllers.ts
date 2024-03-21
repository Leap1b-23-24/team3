import { RequestHandler } from "express";
import { CategorySubModel } from "../models/categorySub.model";

export const getAllCategorySub: RequestHandler = async (req, res) => {
  const { categoryName } = req.body;
  const categorySub = await CategorySubModel.find({ categoryName });
  res.json(categorySub);
};

export const createCategorySub: RequestHandler = async (req, res) => {
  const { categoryName, categorySubName } = req.body;

  const newCategorySub = await CategorySubModel.create({
    categoryName,
  });
  res.json(newCategorySub);
};
