import { RequestHandler } from "express";
import { OrderSchema, ProductModel, UserModel } from "../models";
import jwt, { JwtPayload } from "jsonwebtoken";

export const getAllOrder: RequestHandler = async (req, res) => {
  const { authorization } = req.headers;

  // if (!authorization) {
  //   return res.json({ message: "not authorized" });
  // }

  // const payload = jwt.verify(authorization, "secret-key") as JwtPayload;

  // const { id } = payload;
  const order = await OrderSchema.find({});
  if (!order) {
    return res.status(401).json({
      message: "Invalid user id",
    });
  }
  res.json(order);
};

export const createOrder: RequestHandler = async (req, res) => {
  //Req.Body section
  const {
    customerEmail,
    customerPhone,
    deliveryAddress,
    orderDetails,
    deliveryFee,
    orderTotalPrice,
  } = req.body;

  //Authorization section
  const { authorization } = req.headers;
  if (!authorization) {
    return res.json({ message: "not authorized" });
  }
  //Customer id section
  const payload = jwt.verify(authorization, "secret-key") as JwtPayload;
  const { id } = payload;

  //Customer City section will be used for Dashboard
  const customerInfo = await UserModel.findOne({ _id: id });
  if (!customerInfo) {
    return res.status(400).json({ message: "customer info not found" });
  }

  //Map ashiglaaguin order-n ali neg buteegdehuun aguulahad baigaa buteegdehuunii toog davhad return hiih yostoi
  //map-n dotorh return ni map-n-iihaa uildeliig zogsooson CreateOrder functioniihaa uildeliig zogsooj chadahgui bolohoor For ashiglav
  for (let i = 0; i < orderDetails.length; i++) {
    const num = orderDetails[i].productQty;

    const productStock = await ProductModel.findOne({
      _id: orderDetails[i].productId,
    });

    if (!productStock) {
      return res.status(400).json({ message: "product id not found" });
    }

    const productStockQty = productStock.qty;

    // if (productStockQty < num || num < 0) {
    //   return res.json({ message: "order exceeded stock" });
    // }

    const updateLeftProductQty = await ProductModel.findOneAndUpdate(
      { _id: orderDetails[i].productId },
      { $inc: { qty: -num } }
    );

    const updateSalesProductQty = await ProductModel.findOneAndUpdate(
      { _id: orderDetails[i].productId },
      { $inc: { sales: num } }
    );
  }
  // const newOrderArr = orderDetails.map(async (item: any, index: number) => {
  //   const num = item.productQty;

  //   const productStock = await ProductModel.findOne({
  //     _id: orderDetails.productId,
  //   });
  //   if (!productStock) {
  //     return res.status(400).json({ message: "product id not found" });
  //   }
  //   const productStockQty = productStock.qty;

  //   // Orj irsen zahialgiin too 0-s baga utga baij bolohq bas orj irsen zahialga noots butegdehuunii davj bolohgui
  //   if (productStockQty < num && num < 0) {
  //     return res.json({ message: "order exceeded stock" });
  //   }

  //   const updateLeftProductQty = await ProductModel.findOneAndUpdate(
  //     { _id: item.productId },
  //     { $inc: { qty: -num } }
  //   );

  //   const updateSalesProductQty = await ProductModel.findOneAndUpdate(
  //     { _id: item.productId },
  //     { $inc: { sales: num } }
  //   );
  // });

  //Creating order section
  const newOrder = await OrderSchema.create({
    userId: id,
    customerEmail,
    customerPhone,
    deliveryAddress,
    orderDetails,
    deliveryFee,
    orderTotalPrice,
    customerCity: customerInfo.city,
    customerName: customerInfo.name,
  });

  res.json(newOrder);
};

export const orderStatusPreparing: RequestHandler = async (req, res) => {
  const { authorization } = req.headers;
  const { orderId } = req.body;
  if (!authorization) {
    return res.json({ message: "not authorized" });
  }

  const idValid = await OrderSchema.findOne({ _id: orderId });
  if (!idValid) {
    return res.json({ message: " Invalid order ID" });
  }
  const isOrderCanceled = idValid.status;

  if (isOrderCanceled === "Цуцлагдсан") {
    return res.json({ message: "Canceled order can't be updated" });
  }
  const orderStatus = await OrderSchema.findOneAndUpdate(
    { _id: orderId },
    { $set: { status: "Бэлтгэгдэж байгаа" } }
  );
  res.json("Order status updated");
};

export const orderStatusOnDelivery: RequestHandler = async (req, res) => {
  const { authorization } = req.headers;
  const { orderId } = req.body;
  if (!authorization) {
    return res.json({ message: "not authorized" });
  }

  const idValid = await OrderSchema.findOne({ _id: orderId });
  if (!idValid) {
    return res.json({ message: " Invalid order ID" });
  }

  const isOrderCanceled = idValid.status;

  if (isOrderCanceled === "Цуцлагдсан") {
    return res.json({ message: "Canceled order can't be updated" });
  }

  const orderStatus = await OrderSchema.findOneAndUpdate(
    { _id: orderId },
    { $set: { status: "Хүргэлтэнд гарсан" } }
  );
  res.json("Order status updated");
};

export const orderStatusDelivered: RequestHandler = async (req, res) => {
  const { authorization } = req.headers;
  const { orderId } = req.body;
  if (!authorization) {
    return res.json({ message: "not authorized" });
  }

  const idValid = await OrderSchema.findOne({ _id: orderId });
  if (!idValid) {
    return res.json({ message: " Invalid order ID" });
  }

  const isOrderCanceled = idValid.status;

  if (isOrderCanceled === "Цуцлагдсан") {
    return res.json({ message: "Canceled order can't be updated" });
  }

  const orderStatus = await OrderSchema.findOneAndUpdate(
    { _id: orderId },
    { $set: { status: "Хүргэгдсэн" } }
  );
  res.json("Order status updated");
};
export const orderStatusCanceled: RequestHandler = async (req, res) => {
  const { authorization } = req.headers;
  const { orderId, orderDetails } = req.body;
  if (!authorization) {
    return res.json({ message: "not authorized" });
  }

  const idValid = await OrderSchema.findOne({ _id: orderId });
  if (!idValid) {
    return res.json({ message: " Invalid order ID" });
  }

  for (let i = 0; i < orderDetails.length; i++) {
    const num = orderDetails[i].productQty;

    const productStock = await ProductModel.findOne({
      _id: orderDetails[i].productId,
    });

    if (!productStock) {
      return res.status(400).json({ message: "product id not found" });
    }

    const updateLeftProductQty = await ProductModel.findOneAndUpdate(
      { _id: orderDetails[i].productId },
      { $inc: { qty: num } }
    );

    const updateSalesProductQty = await ProductModel.findOneAndUpdate(
      { _id: orderDetails[i].productId },
      { $inc: { sales: -num } }
    );
  }

  const orderStatus = await OrderSchema.findOneAndUpdate(
    { _id: orderId },
    { $set: { status: "Цуцлагдсан" } }
  );
  res.json("Order status updated");
};
