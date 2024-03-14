import { RequestHandler } from "express";
import jwt, { JwtPayload } from "jsonwebtoken";
import { SalesSchema } from "../models/sales.model";
import { ProductModel } from "../models";

export const getAllSales: RequestHandler = async (req, res) => {
  const { authorization } = req.headers;
  if (!authorization) {
    return res.json({ message: "not authorized" });
  }
  const payload = jwt.verify(authorization, "secretkey") as JwtPayload;
  const { id } = payload;
  const sales = await SalesSchema.find({ userId: id });

  if (!sales) {
    return res.status(401).json({
      message: "Invalid user id",
    });
  }
  res.json(sales);
};

export const createSales: RequestHandler = async (req, res) => {
  const { orderDetails } = req.body;
  const { authorization } = req.headers;
  if (!authorization) {
    return res.json({ message: "not authorized" });
  }
  const payload = jwt.verify(authorization, "secretkey") as JwtPayload;
  const { id } = payload;

  const { productId, productName, productPrice, productQty, productThumbnail } =
    orderDetails;
  const productNumber = await ProductModel.findOne({ _id: productId });
  const num = productNumber?.qty;
  const leftProductQty = num - productQty;
  const updateLeftProductQty = await ProductModel.findOneAndUpdate(
    { _id: productId },
    { $set: {} }
  );

  const sales = await SalesSchema.create({
    userId: id,
    productId,
    productName,
    productPrice,
    productQtySold: productQty,
    productThumbnail,
  });
};
