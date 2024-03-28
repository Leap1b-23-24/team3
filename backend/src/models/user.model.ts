import { Schema, model } from "mongoose";

const userSchema = new Schema({
  name: {
    type: String,
    require: true,
  },
  email: {
    type: String,
    require: true,
    unique: true,
  },
  password: {
    type: String,
    require: true,
  },
  shopName: {
    type: String,
    require: false,
    unique: true,
  },
  city: {
    type: String,
    require: true,
  },
  district: {
    type: String,
    require: true,
  },
  sect: {
    type: String,
    require: true,
  },
  experience: {
    type: String,
    require: false,
  },
  productType: {
    type: String,
    require: false,
  },
  roles: {
    type: String,
    default: "customer",
  },
});

export const UserModel = model("user", userSchema);
