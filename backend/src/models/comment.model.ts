import { Schema, model } from "mongoose";

const comment = new Schema({
  productId: {
    type: String,
    require: true,
  },
  comments: [
    {
      UserId: {
        type: String,
        require: true,
      },
      UserName: {
        type: String,
        require: true,
      },
      comment: {
        type: String,
        require: true,
      },
      userRating: {
        type: Number,
        require: true,
      },
    },
  ],
});

export const CommentModel = model("comment", comment);
