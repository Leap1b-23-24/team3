import { Router } from "express";
import { createCategory } from "../controllers";

const categoryCreateRouter = Router();
categoryCreateRouter.get("/create", createCategory);
export default categoryCreateRouter;
