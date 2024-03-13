import { Router } from "express";
import { isEmailUnique, isShopUnique } from "../controllers";

const signupRouter = Router();

signupRouter.get("/email", isEmailUnique).get("/shop", isShopUnique);
export default signupRouter;
