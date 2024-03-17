import { Router } from "express";
import { isEmailUnique, isShopUnique } from "../controllers";

const signupRouter = Router();

signupRouter.post("/email", isEmailUnique).post("/shop", isShopUnique);
export default signupRouter;
