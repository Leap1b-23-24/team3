import { Router } from "express";
import {
  createOrder,
  getAllOrder,
  orderStatusCanceled,
  orderStatusDelivered,
  orderStatusOnDelivery,
  orderStatusPreparing,
} from "../controllers/order.controllers";

const orderRouter = Router();

orderRouter
  .get("/", getAllOrder)
  .post("/create", createOrder)
  .post("/prepare", orderStatusPreparing)
  .post("/ondelivery", orderStatusOnDelivery)
  .post("/delivered", orderStatusDelivered)
  .post("/canceled", orderStatusCanceled);

export default orderRouter;
