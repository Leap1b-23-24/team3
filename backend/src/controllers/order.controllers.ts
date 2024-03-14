import { RequestHandler } from "express";
import { OrderSchema, UserModel } from "../models";
import jwt, { JwtPayload } from "jsonwebtoken";

export const getAllOrder: RequestHandler = async (req, res) => {
  const { authorization } = req.headers;
  if (!authorization) {
    return res.json({ message: "not authorized" });
  }
  const payload = jwt.verify(authorization, "secretkey") as JwtPayload;
  const { id } = payload;
  const order = await OrderSchema.find({ userId: id });

  if (!order) {
    return res.status(401).json({
      message: "Invalid user id",
    });
  }
  res.json(order);
};

export const createOrder: RequestHandler = async (req, res) => {
  const {
    customerEmail,
    customerPhone,
    deliveryAddress,
    orderDetails,
    deliveryFee,
    orderTotalPrice,
  } = req.body;
  const { authorization } = req.headers;
  if (!authorization) {
    return res.json({ message: "not authorized" });
  }
  const payload = jwt.verify(authorization, "secretkey") as JwtPayload;
  const { id } = payload;

  const customerCity = await UserModel.findOne({ _id: id });

  const newOrder = OrderSchema.create({
    userId: id,
    customerEmail,
    customerPhone,
    deliveryAddress,
    orderDetails,
    deliveryFee,
    orderTotalPrice,
    customerCity,
  });

  res.json(newOrder);
};
export const orderStatusPreparing: RequestHandler = async (req, res) => {
  const { authorization } = req.headers;
  if (!authorization) {
    return res.json({ message: "not authorized" });
  }
  const payload = jwt.verify(authorization, "secretkey") as JwtPayload;
  const { id } = payload;
  const idValid = await OrderSchema.findOne({ userId: id });
  if (!idValid) {
    return res.json({ message: " Invalid order ID" });
  }
  const orderStatus = await OrderSchema.findOneAndUpdate(
    { _id: id },
    { $set: { status: "Бэлтгэгдэж байгаа" } }
  );
  res.json("Order status updated");
};
export const orderStatusOnDelivery: RequestHandler = async (req, res) => {
  const { authorization } = req.headers;
  if (!authorization) {
    return res.json({ message: "not authorized" });
  }
  const payload = jwt.verify(authorization, "secretkey") as JwtPayload;
  const { id } = payload;
  const idValid = await OrderSchema.findOne({ userId: id });
  if (!idValid) {
    return res.json({ message: " Invalid order ID" });
  }
  const orderStatus = await OrderSchema.findOneAndUpdate(
    { _id: id },
    { $set: { status: "Хүргэлтэнд гарсан" } }
  );
  res.json("Order status updated");
};
export const orderStatusDelivered: RequestHandler = async (req, res) => {
  const { authorization } = req.headers;
  if (!authorization) {
    return res.json({ message: "not authorized" });
  }
  const payload = jwt.verify(authorization, "secretkey") as JwtPayload;
  const { id } = payload;
  const idValid = await OrderSchema.findOne({ userId: id });
  if (!idValid) {
    return res.json({ message: " Invalid order ID" });
  }
  const orderStatus = await OrderSchema.findOneAndUpdate(
    { _id: id },
    { $set: { status: "Хүргэгдсэн" } }
  );
  res.json("Order status updated");
};
export const orderStatusCanceled: RequestHandler = async (req, res) => {
  const { authorization } = req.headers;
  if (!authorization) {
    return res.json({ message: "not authorized" });
  }
  const payload = jwt.verify(authorization, "secretkey") as JwtPayload;
  const { id } = payload;
  const idValid = await OrderSchema.findOne({ userId: id });
  if (!idValid) {
    return res.json({ message: " Invalid order ID" });
  }
  const orderStatus = await OrderSchema.findOneAndUpdate(
    { _id: id },
    { $set: { status: "Цуцлагдсан" } }
  );
  res.json("Order status updated");
};
