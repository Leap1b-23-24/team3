import { Router } from "express";
import { merchantSignUp } from "../controllers";

const merchantRouter = Router();

merchantRouter.post("/", merchantSignUp);

export default merchantRouter;
