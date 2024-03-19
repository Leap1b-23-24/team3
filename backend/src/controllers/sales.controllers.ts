import { RequestHandler } from "express";
import jwt, { JwtPayload } from "jsonwebtoken";
import { SalesSchema } from "../models/sales.model";
import { ProductModel } from "../models";

export const getAllSales: RequestHandler = async (req, res) => {
  const { authorization } = req.headers;
  if (!authorization) {
    return res.json({ message: "not authorized" });
  }
  const payload = jwt.verify(authorization, "secret-key") as JwtPayload;
  const { id } = payload;
  const sales = await SalesSchema.find({ userId: id });

  if (!sales) {
    return res.status(401).json({
      message: "Invalid user id",
    });
  }
  res.json(sales);
};

// export const createSales: RequestHandler = async (req, res) => {
//   const { orderDetails } = req.body;
//   const { authorization } = req.headers;
//   if (!authorization) {
//     return res.json({ message: "not authorized" });
//   }
//   const payload = jwt.verify(authorization, "secret-key") as JwtPayload;
//   const { id } = payload;

//   const { productId, productName, productPrice, productQty, productThumbnail } =
//     orderDetails;

//   //productStock-oor haihad tuuntei taarah id baihgui baij boloh uchir zaaval if condition bichne
//   const productStock = await ProductModel.findOne({ _id: productId });
//   if (!productStock) {
//     return res.status(400).json({ message: "product id not found" });
//   }

//   //If condition shalgasanii daraa l productStockiin qty-g avj bolno
//   const productStockQty = productStock.qty;

//   if (productStockQty < productQty && productQty < 0) {
//     return res.json({ message: "order exceeded stock" });
//   }

//   const updateLeftProductQty = await ProductModel.findOneAndUpdate(
//     { _id: productId },
//     { $dec: { qty: productQty } }
//   );

//   const updateSalesProductQty = await ProductModel.findOneAndUpdate(
//     { _id: productId },
//     { $inc: { sales: productQty } }
//   );

//   const sales = await SalesSchema.create({
//     userId: id,
//     productId,
//     productName,
//     productPrice,
//     productQtySold: productQty,
//     productThumbnail,
//   });
// };
