import { RequestHandler } from "express";
import { UserModel } from "../models";
import jwt from "jsonwebtoken";

export const login: RequestHandler = async (req, res) => {
  const { email, password } = req.body;
  const user = await UserModel.findOne({
    email,
    password,
  });
  if (!user) {
    return res.status(401).json({
      message: "Wrong email or password",
    });
  }

  const id = user._id;
  const roles = user.roles;

  const token = jwt.sign({ id, roles }, "secret-key");

  return res.json({ token });
};

export const signUp: RequestHandler = async (req, res) => {
  const {
    name,
    email,
    password,
    shopName,
    city,
    district,
    sect,
    experience,
    productType,
  } = req.body;
  try {
    const user = await UserModel.findOne({ email: email });

    const shop = await UserModel.findOne({ shopName: shopName });

    if (user || shop) {
      return res.status(401).json({
        message: "И-мэйл эсвэл Дэлгүүрийн нэр давхцаж байна",
      });
    }

    UserModel.create({
      name,
      email,
      password,
      shopName,
      city,
      district,
      sect,
      experience,
      productType,
    });
    return res.json({ message: "Хэрэглэгч амжилттай бүртгэгдлээ" });
  } catch (error) {
    res.json(error);
  }
};
