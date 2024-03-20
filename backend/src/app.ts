import express from "express";
import cors from "cors";
import { json } from "body-parser";
import productRouter from "./routers/product.router";
import signupRouter from "./routers/signup.router";
import authRouter from "./routers/auth.router";
import orderRouter from "./routers/order.router";
import { adminAuthMiddleware } from "./middlewares";

const app = express();

app.use(cors());
app.use(json());

app.use("/", authRouter);

app.use("/product", productRouter);
app.use("/account", signupRouter);
app.use("/order", orderRouter);

//Web Admin Only
app.use(adminAuthMiddleware);

export default app;
