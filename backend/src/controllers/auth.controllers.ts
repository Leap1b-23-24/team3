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

  const token = jwt.sign({ id,}, "secret-key");

  return res.json({ token });
};

export const signUp: RequestHandler = async (req, res) => {
  const { name, email, password, shopName, city, district, sect, experience, productType } = req.body;

  const user = await UserModel.findOne({
    email,
  });

  const shop = await UserModel.findOne({
    shopName
  })

  if (user || shop) {
    return res.json({
      message: "email or shop name already in use",
    });
  }

  const newUser = UserModel.create({
    name, email, password, shopName, city, district, sect, experience, productType
  });
  return res.json("Hereglegch amjilttai burtgegdlee");
};
