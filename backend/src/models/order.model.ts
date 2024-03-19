import { Schema, model } from "mongoose";

const orderSchema = new Schema({
  userId: {
    type: String,
    require: true,
  },
  status: {
    type: String,
    default: "Шинэ захиалга",
  },
  customerEmail: {
    type: String,
    require: true,
  },
  customerPhone: {
    type: String,
    require: true,
  },
  orderDate: {
    type: Date,
    default: Date.now(),
  },
  deliveryAddress: {
    type: String,
    require: true,
  },
  customerCity: {
    type: String,
    require: false,
  },
  orderDetails: [
    {
      productId: {
        type: String,
        require: true,
      },
      productName: {
        type: String,
        require: true,
      },
      productThumbnail: {
        type: String,
        require: true,
      },
      productPrice: {
        type: Number,
        require: true,
      },
      productQty: {
        type: Number,
        require: true,
      },
      productDiscount: {
        type: Number,
        require: false,
        default: 0,
      },
      productTotalPrice: {
        type: Number,
        require: true,
      },
    },
  ],
  deliveryFee: {
    type: Number,
    require: true,
  },
  orderTotalPrice: {
    type: Number,
    require: true,
  },
});

export const OrderSchema = model("orderSchema", orderSchema);
