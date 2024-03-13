import { RequestHandler } from "express";
import { UserModel } from "../models";

export const isEmailUnique: RequestHandler = async (req, res) => {
  const { email } = req.body;
  const user = await UserModel.findOne({ email });
  if (user) {
    return res.status(401).json({
      message: "Email already in use",
    });
  }
  return res.json({ message: "Email is unique" });
};
export const isShopUnique: RequestHandler = async (req, res) => {
  const { shopName } = req.body;
  const user = await UserModel.findOne({ shopName });
  if (user) {
    return res.status(401).json({
      message: "Shop name is already in use",
    });
  }
  return res.json({ message: "Shop name is unique" });
};
