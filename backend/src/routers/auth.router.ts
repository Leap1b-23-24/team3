import { Router } from "express";
import { login, signUp } from "../controllers";

const authRouter = Router();

authRouter.post("/signup", signUp).post("/login", login);

export default authRouter;
