import { RequestHandler } from "express";
import { UserModel } from "../models";

export const isEmailUnique: RequestHandler = async (req, res) => {
  const { email } = req.body;

  const user = await UserModel.findOne({ email });
  if (user) {
    return res.status(401).json({
      message: "Хэрэглэгч давхцаж байна",
    });
  }
  return res.json({ message: "Амжилттай" });
};
export const isShopUnique: RequestHandler = async (req, res) => {
  const { shopName } = req.body;
  try {
    const user = await UserModel.findOne({ shopName });
    if (user) {
      return res.status(401).json({
        message: "Дэлгүүрийн нэр давхцаж байна",
      });
    }
    return res.json({ message: "Амжилттай" });
  } catch (error) {
    res.json(error);
  }
};
