import { Router } from "express";
import { createSales, getAllSales } from "../controllers/sales.controllers";

const salesRouter = Router();

salesRouter.get("/", getAllSales).post("/create", createSales);

export default salesRouter;
