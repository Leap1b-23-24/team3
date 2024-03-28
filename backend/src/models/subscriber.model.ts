import { Schema, model } from "mongoose";

const subscriberSchema = new Schema({
  email: {
    type: String,
    require: true,
    unique: true,
  },
  subscriberRoles: {
    type: String,
    require: false,
    default: "subscriber",
  },
});

export const SubscriberModel = model("subscriber", subscriberSchema);
