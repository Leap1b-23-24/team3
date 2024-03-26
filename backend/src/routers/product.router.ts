import { Router } from "express";
import {
  createProduct,
  deleteProduct,
  editProduct,
  getAllProduct,
} from "../controllers";

const productRouter = Router();

productRouter
  .get("/", getAllProduct)
  .post("/create", createProduct)
  .post("/delete", deleteProduct)
  .post("/edit", editProduct);
export default productRouter;
