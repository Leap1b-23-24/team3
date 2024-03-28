import { Schema, model } from "mongoose";

const userSchema = new Schema({
  name: {
    type: String,
    require: false,
  },
  email: {
    type: String,
    require: false,
    unique: true,
  },
  password: {
    type: String,
    require: false,
  },
  shopName: {
    type: String,
    require: false,
  },
  city: {
    type: String,
    require: false,
  },
  district: {
    type: String,
    require: false,
  },
  sect: {
    type: String,
    require: false,
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
export const UserModel = model("users", userSchema);
