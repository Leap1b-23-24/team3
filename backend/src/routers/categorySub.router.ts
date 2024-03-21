import { Router } from "express";
import { getAllCategorySub } from "../controllers";

const categorySubGetRouter = Router();
categorySubGetRouter.get("/", getAllCategorySub);
export default categorySubGetRouter;
