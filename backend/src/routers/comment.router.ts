import { Router } from "express";
import { getAllComment, writeComment } from "../controllers";

const commentRouter = Router();
commentRouter.get("/", getAllComment).post("/write", writeComment);
export default commentRouter;
