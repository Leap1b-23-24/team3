import { Schema, model } from "mongoose";

const rating = new Schema({
  productId: {
    type: String,
    require: true,
  },
  rating: [
    {
      1: [
        {
          type: Number,
          require: false,
        },
      ],
      2: [
        {
          type: Number,
          require: false,
        },
      ],
      3: [
        {
          type: Number,
          require: false,
        },
      ],
      4: [
        {
          type: Number,
          require: false,
        },
      ],
      5: [
        {
          type: Number,
          require: false,
        },
      ],
    },
  ],
});
export const RatingModel = model("rating", rating);
