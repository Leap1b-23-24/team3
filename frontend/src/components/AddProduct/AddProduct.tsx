"use client";
import { Button, Stack, Typography } from "@mui/material";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import { useFormik } from "formik";
import * as yup from "yup";
import { Auth } from "../providers/AuthProvider";
import Product1 from "./Product1";
import Product2 from "./Product2";
const validationSchema = yup.object({
  productName: yup.string(),
});
export default function AddProduct() {
  const { creatProduct, imageUrl } = Auth();
  const formik = useFormik({
    initialValues: {
      productName: "",
      description: "",
      price: 0,
      thumbnail: "",
      discount: 0,
      qty: 0,
      images: [],
      category: "",
      subCategory: "",
      color: [],
      size: [],
      tags: [],
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      creatProduct({
        productName: values.productName,
        description: values.description,
        price: values.price,
        thumbnail: values.thumbnail,
        discount: values.discount,
        qty: values.qty,

        images: values.images,
        category: values.category,
        subCategory: values.subCategory,
        color: values.color,
        size: values.size,
        tags: values.tags,
      });
    },
  });
  return (
    <Stack className="bg-[#F7F7F8] h-screen gap-10">
      <Stack direction="row" className="h-[56px] items-center gap-5 bg-white">
        <ArrowBackIosNewIcon />
        <Typography>Бүтээгдэхүүн нэмэх</Typography>
      </Stack>
      <Stack>
        <Stack
          className="bg-[#F7F7F8] justify-center mr-8"
          direction="row"
          gap="30px"
          fontSize="14px"
        >
          <Product1
            productName={formik.values.productName}
            description={formik.values.description}
            price={formik.values.price}
            thumbnail={formik.values.thumbnail}
            discount={formik.values.discount}
            qty={formik.values.qty}
            handleChange={formik.handleChange}
            images={formik.values.images}
          />
          <Product2
            category={formik.values.category}
            subCategory={formik.values.subCategory}
            color={formik.values.color}
            size={formik.values.size}
            tags={formik.values.tags}
            handleChange={formik.handleChange}
          />
        </Stack>
        <Stack direction="row" className="justify-end gap-8 mr-[560px] mt-6">
          <Button
            className="w-[116px] h-[56px] text-[18px] font-semibold"
            variant="outlined"
          >
            Ноорог
          </Button>
          <Button
            variant="contained"
            className="w-[116px] h-[56px] text-[18px] font-semibold bg-black"
            onClick={() => {
              formik.handleChange;
            }}
          >
            Нийтлэх
          </Button>
        </Stack>
      </Stack>
    </Stack>
  );
}