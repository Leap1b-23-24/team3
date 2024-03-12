import { Router } from "express";
import { createProduct, getAllProduct } from "../controllers";

const productRouter = Router();

productRouter.get("/", getAllProduct).post("/create", createProduct);
export default productRouter;
