"use client";
import { Button, Stack, Typography } from "@mui/material";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import { useFormik, validateYupSchema } from "formik";
import { Auth } from "../providers/AuthProvider";
import Product1 from "./Product1";
import Product2 from "./Product2";
export default function AddProduct() {
  const { creatProduct } = Auth();

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
    validationSchema: validateYupSchema,
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
  const a = formik.handleChange;
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
          />
          <Product2 />
        </Stack>
        <Stack direction="row" className="justify-end gap-8 mr-[560px]">
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
              // alert(formik.values.productName);
            }}
          >
            Нийтлэх
          </Button>
        </Stack>
      </Stack>
    </Stack>
  );
}
