import { RequestHandler } from "express";
import { ProductModel } from "../models";
import { JwtPayload } from "jsonwebtoken";
import jwt from "jsonwebtoken";

export const getAllProduct: RequestHandler = async (req, res) => {
  const product = await ProductModel.find({});

  if (!product) {
    return res.status(400).json({ message: "Not found" });
  }

  res.json(product);
};
export const createProduct: RequestHandler = async (req, res) => {
  const {
    productName,
    description,
    price,
    qty,
    images,
    category,
    subCategory,
    // color,
    // size,
    // tags,
  } = req.body;

  const product = await ProductModel.create({
    productName,
    description,
    price,
    qty,
    images,
    category,
    subCategory,
    // color,
    // size,
    // tags,
  });

  res.json({ product, message: "Бүтээгдэхүүн амжилттай нэмэгдлээ" });
};

export const deleteProduct: RequestHandler = async (req, res) => {
  const { id } = req.body;
  const isProductExist = await ProductModel.findOne({ _id: id });
  if (!isProductExist) {
    return res.status(400).json("Wrong product ID");
  }
  await ProductModel.findOneAndDelete({ _id: id });
  res.json({ message: "Бүтээгдэхүүн устлаа" });
};

export const editProduct: RequestHandler = async (req, res) => {
  const {
    id,
    productName,
    description,
    price,
    thumbnail,
    discount,
    qty,
    images,
    category,
    subCategory,
    color,
    size,
    tags,
  } = req.body;

  const isProductExist = await ProductModel.findOne({ id });
  if (!isProductExist) {
    return res.json("Wrong product ID");
  }

  const editProduct = await ProductModel.findOneAndUpdate(
    { id: id },
    {
      $set: {
        productName,
        description,
        price,
        discount,
        qty,
        images,
        category,
        subCategory,
        color,
        size,
        tags,
        productReactionCount: 0,
      },
    }
  );
  res.json("Product edited");
};

// export const updateReaction: RequestHandler = async (req, res) => {
//   try {
//     const { authorization } = req.headers;
//     const { productId } = req.body;

//     if (!authorization) {
//       return res.status(401).json({
//         message: "Бүртгэлгүй хэрэглэгч байна. Та бүртгүүлээд дахин оролдоно уу",
//       });
//     }
//     const { id } = jwt.verify(authorization, "secret-key") as JwtPayload;

//     const editProduct = await ProductModel.findOne({
//       merchId: id,
//       _id: productId,
//     });

//     if (!editProduct) {
//       return res.status(401).json({
//         message: "Шинэчлэх бараа олдсонгүй.",
//       });
//     }
//     const reaction = editProduct.productReactionCount;
//     // return res.json(reaction);
//     if (reaction || reaction == 0) {
//       const editProd = await ProductModel.findOneAndUpdate(
//         { _id: productId },
//         {
//           productReactionCount: reaction + 1,
//           updatedAt: new Date(),
//         }
//       );
//     }
//     return res.json({ message: "Success" });
//   } catch (err) {
//     res.json(err);
//   }
// };

// type AddReviewBody = {
//   productId: string;
//   star: 1 | 2 | 3 | 4 | 5;
// };

// export const addReview: RequestHandler = async (req, res) => {
//   try {
//     const { productId, star } = req.body as AddReviewBody;

//     const editProduct = await ProductModel.findOne({
//       _id: productId,
//     });

//     if (!editProduct) {
//       return res.status(401).json({
//         message: "Шинэчлэх бараа олдсонгүй.",
//       });
//     }

//     const prevStars = editProduct.stars ?? {};

//     const prevStar = prevStars[star] ?? 0;

//     await ProductModel.updateOne(
//       { _id: productId },
//       {
//         stars: {
//           ...prevStars,
//           [star]: prevStar + 1,
//         },
//       }
//     );

//     const product = await ProductModel.findOne({ _id: productId });

//     if (!product) {
//       return res.status(401).json({
//         message: "Шинэчлэх бараа олдсонгүй.",
//       });
//     }
//     const pStars = product.stars ?? {};
//     const pStar1 = pStars[1] ?? 0;
//     const pStar2 = pStars[2] ?? 0;
//     const pStar3 = pStars[3] ?? 0;
//     const pStar4 = pStars[4] ?? 0;
//     const pStar5 = pStars[5] ?? 0;

//     const sumReview = pStar1 + pStar2 + pStar3 + pStar4 + pStar5;
//     const avgReview =
//       (pStar1 + 2 * pStar2 + 3 * pStar3 + 4 * pStar4 + 5 * pStar5) / sumReview;

//     const rCount = product.reviewCount ?? 0;

//     await ProductModel.updateOne(
//       { _id: productId },
//       {
//         avgStars: avgReview,
//         reviewCount: rCount + 1,
//       }
//     );
//     return res.json({ message: "Сэтгэгдэл нэмэгдлээ" });
//   } catch (err) {
//     res.json(err);
//   }
// };
