import express from "express";
import cors from "cors";
import { json } from "body-parser";
import productRouter from "./routers/product.router";
import signupRouter from "./routers/signup.router";
import authRouter from "./routers/auth.router";
import orderRouter from "./routers/order.router";
import { adminAuthMiddleware } from "./middlewares";
import categoryGetRouter from "./routers/category.router";
import categoryCreateRouter from "./routers/categoryCreate.router";
import categorySubCreateRouter from "./routers/categorySubCreate.router";
import categorySubGetRouter from "./routers/categorySub.router";

const app = express();

app.use(cors());
app.use(json());

app.use("/", authRouter);

app.use("/product", productRouter);
app.use("/category", categoryGetRouter);
app.use("/categorySub", categorySubGetRouter);
app.use("/account", signupRouter);
app.use("/order", orderRouter);

//Web Admin Only
// app.use(adminAuthMiddleware);
app.use("/category", categoryCreateRouter);
app.use("/categorySub", categorySubCreateRouter);

export default app;
