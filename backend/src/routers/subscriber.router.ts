import { Router } from "express";
import {
  getAllSubscriber,
  newSubscriber,
} from "../controllers/subscriber.controllers";

export const subscriber = Router();
subscriber.get("/", getAllSubscriber);

export const createNewSubscriber = Router();
createNewSubscriber.post("/create", newSubscriber);
