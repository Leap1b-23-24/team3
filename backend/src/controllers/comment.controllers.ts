// import { RequestHandler } from "express";
// import jwt, { JwtPayload } from "jsonwebtoken";
// import { CommentModel, ProductModel, UserModel } from "../models";

// export const getAllComment: RequestHandler = async (req, res) => {
//   const { productId } = req.body;
//   const comments = await CommentModel.find({ productId });
//   return res.json({ comments });
// };

// export const writeComment: RequestHandler = async (req, res) => {
//   const { authorization } = req.headers;
//   const { productId, userComment, userRating } = req.body;
//   if (!authorization) {
//     return res.json({ message: "not authorized" });
//   }
//   const payload = jwt.verify(authorization, "secret-key") as JwtPayload;
//   const { id } = payload;
//   const user = await UserModel.findOne({ _id: id });
//   if (!user) {
//     return res.status(401).json({
//       message: "invalid user id",
//     });
//   }
//   const pushComment = await CommentModel.findOneAndUpdate(
//     { productId },
//     {
//       $push: {
//         comments: {
//           UserId: id,
//           Username: user.name,
//           comment: userComment,
//           userRating: userRating,
//         },
//       },
//     }
//   );
//   const product = await ProductModel.findOne({ productId });
//   if (!product) return;

//   const newAvgRating =
//     (product.avgRating * product.reviewNumber + userRating) /
//     (product.reviewNumber + 1);

//   const updateReviewNumber = await ProductModel.findOneAndUpdate(
//     { productId },
//     { $inc: { reviewNumber: 1 } }
//   );

//   const updateRating = await ProductModel.findOneAndUpdate(
//     { productId },
//     {
//       $set: { avgRating: newAvgRating },
//     }
//   );
//   return res.json({ message: "Comment added" });
// };
