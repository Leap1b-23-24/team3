import { Router } from "express";
import { createCategorySub } from "../controllers";

const categorySubCreateRouter = Router();
categorySubCreateRouter.post("/create", createCategorySub);
export default categorySubCreateRouter;
