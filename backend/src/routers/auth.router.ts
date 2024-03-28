import { Router } from "express";
import { getUser, login, signUp } from "../controllers";

const authRouter = Router();

authRouter
  .post("/signup", signUp)
  .post("/login", login)
  .get("/getUser", getUser);

export default authRouter;
