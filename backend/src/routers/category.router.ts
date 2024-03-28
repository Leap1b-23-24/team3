import { Router } from "express";
import {
  createCategory,
  createCategorySub,
  getAllCategory,
  getAllCategorySub,
} from "../controllers";

export const categoryGetRouter = Router();
categoryGetRouter.get("/", getAllCategory);

export const categoryCreateRouter = Router();
categoryCreateRouter.post("/create", createCategory);

export const categorySubGetRouter = Router();
categorySubGetRouter.get("/", getAllCategorySub);

export const categorySubCreateRouter = Router();
categorySubCreateRouter.post("/create", createCategorySub);
