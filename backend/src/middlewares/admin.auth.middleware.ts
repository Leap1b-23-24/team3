import { RequestHandler } from "express";
import jwt, { JwtPayload } from "jsonwebtoken";

export const adminAuthMiddleware: RequestHandler = (req, res, next) => {
  const { authorization } = req.headers;
  if (!authorization) {
    return res.status(401).json({
      message: "invalid credentials",
    });
  }
  try {
    const payload = jwt.verify(authorization, "secret-key") as JwtPayload;
    const { roles } = payload;

    if (roles === "admin") {
      next();
    }
  } catch (error) {
    return res.status(401).json({
      message: "Invalid credentials",
    });
  }
};
