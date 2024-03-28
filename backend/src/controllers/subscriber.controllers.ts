import { RequestHandler } from "express";
import { SubscriberModel, UserModel } from "../models";

export const newSubscriber: RequestHandler = async (req, res) => {
  const { email } = req.body;
  try {
    const subscriber = await UserModel.findOne({ email });
    if (subscriber) {
      return res.status(401).json({
        message: "И-мэйл бүртгэлтэй байна",
      });
    }
    const newSubscriber = SubscriberModel.create({ email });
    return res.json({ newSubscriber });
  } catch (error) {
    res.json(error);
  }
};
export const getAllSubscriber: RequestHandler = async (req, res) => {
  const allSubscriber = SubscriberModel.find({});
  return res.json({ allSubscriber });
};
