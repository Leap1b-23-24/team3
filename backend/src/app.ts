import express from "express";
import cors from "cors";
import { json } from "body-parser";
import productRouter from "./routers/product.router";
import authRouter from "./routers/auth.router";
import orderRouter from "./routers/order.router";
import { adminAuthMiddleware } from "./middlewares";
import merchantRouter from "./routers/merchant.router";
import { createNewSubscriber, subscriber } from "./routers/subscriber.router";
import {
  categoryCreateRouter,
  categoryGetRouter,
  categorySubCreateRouter,
  categorySubGetRouter,
} from "./routers/category.router";

const app = express();

app.use(cors());
app.use(json());

app.use("/", authRouter);

app.use("/product", productRouter);
app.use("/category", categoryGetRouter);
app.use("/categorySub", categorySubGetRouter);
app.use("/merchant", merchantRouter);
app.use("/order", orderRouter);
app.use("/subscriber", createNewSubscriber);

//Web Admin Only
// app.use(adminAuthMiddleware);
app.use("/category", categoryCreateRouter);
app.use("/categorySub", categorySubCreateRouter);
app.use("/subscriber", subscriber);

export default app;
