import { RequestHandler } from "express";
import { SubscriberModel, UserModel } from "../models";
import jwt, { JwtPayload } from "jsonwebtoken";

export const login: RequestHandler = async (req, res) => {
  const { email, password } = req.body;
  const user = await UserModel.findOne({
    email,
    password,
  });
  if (!user) {
    return res.status(401).json({
      message: "Имэйл эсвэл нууц үг буруу байна",
    });
  }

  const id = user._id;
  const roles = user.roles;

  const token = jwt.sign({ id, roles }, "secret-key");
  const merchant = jwt.sign({ roles }, "secret-key");
  const admin = jwt.sign({ roles }, "secret-key");

  if (roles === "merchant") {
    return res.json({ token, merchant });
  }

  if (roles === "admin") {
    return res.json({ token, admin });
  }

  return res.json({ token, message: "Амжилттай нэвтэрлээ" });
};

export const merchantSignUp: RequestHandler = async (req, res) => {
  const { authorization } = req.headers;
  const { shopName, experience, productType } = req.body;
  if (!authorization) {
    return res.json({ message: "not authorized" });
  }

  const payload = jwt.verify(authorization, "secret-key") as JwtPayload;
  const { id } = payload;

  const isShopUnique = await UserModel.findOne({ shopName });
  if (isShopUnique) {
    return res.status(401).json({
      message: "Дэлгүүрийн нэр давхцаж байна",
    });
  }

  const shopCreated = await UserModel.findOneAndUpdate(
    { _id: id },
    { $set: { shopName, experience, productType, roles: "merchant" } }
  );

  const user = await UserModel.findOne({ _id: id });
  if (!user) {
    return res.status(401).json({
      message: "Something went wrong",
    });
  }
  const userEmail = user.email;
  const updateSubscriberRole = await SubscriberModel.findOneAndUpdate(
    { email: userEmail },
    { $set: { subscriberRoles: "merchant" } }
  );

  const roles = user.roles;
  const merchant = jwt.sign({ roles }, "secret-key");

  return res.json({ merchant });
};

export const signUp: RequestHandler = async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await UserModel.findOne({ email: email });
    if (user) {
      return res.status(401).json({
        message: "И-мэйл нэр давхцаж байна",
      });
    }
    UserModel.create({
      email,
      password,
    });
    const isSubscriber = await SubscriberModel.findOne({ email });
    if (isSubscriber) {
      const updateSubscriberRole = await SubscriberModel.findOneAndUpdate(
        { email },
        { $set: { subscriberRoles: "customer" } }
      );
    } else {
      const newSubscriber = await SubscriberModel.create({
        email,
        subscriberRoles: "customer",
      });
    }

    return res.json({ message: "Хэрэглэгч амжилттай бүртгэгдлээ" });
  } catch (error) {
    res.json(error);
  }
};

export const getAllUsers: RequestHandler = async (req, res) => {
  const user = await UserModel.find({});
  return res.json(user);
};

export const getUser: RequestHandler = async (req, res) => {
  try {
    const { authorization } = req.headers;
    if (!authorization) {
      return res.status(401).json({ message: "Unauthorized1" });
    }
    const { id: userId } = jwt.verify(
      authorization,
      "secret-key"
    ) as JwtPayload;

    const user = await UserModel.findOne({ _id: userId });

    if (!user) {
      return res.status(401).json({ message: "Хэрэглэгч олдсонгүй" });
    }

    return res.json(user);
  } catch (err) {
    res.json(err);
  }
};
