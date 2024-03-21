import { Router } from "express";
import { getAllCategory } from "../controllers";

const categoryGetRouter = Router();
categoryGetRouter.get("/", getAllCategory);
export default categoryGetRouter;
