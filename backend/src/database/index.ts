import mongoose from "mongoose";

export const connect = async () => {
  try {
    await mongoose.connect("mongodb+srv://amoramgl:onlineshop@cluster0.uygpu8h.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0");
    console.log("Database connected");
  } catch (error) {
    console.log(error);
  }
};