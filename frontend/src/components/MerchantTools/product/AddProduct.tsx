"use client";
import { Button, Modal, Stack, Typography } from "@mui/material";
import { useFormik } from "formik";
import * as yup from "yup";
import { Auth } from "@/components/providers/AuthProvider";
import ProductFields1 from "@/components/MerchantTools/product/ProductFields1";
import ProductFields2 from "@/components/MerchantTools/product/ProductFields2";
import { useContext } from "react";
import { AdminContext } from "@/components/providers/MerchantProvider";
import { Box } from "@mui/system";
import AddModel from "./AddProductModal";

const validationSchema = yup.object({
  productName: yup.string(),
  description: yup.string(),
  price: yup.string(),
  thumbnail: yup.string(),
  discount: yup.string(),
  qty: yup.string(),
  category: yup.string(),
  subCategory: yup.string(),
});
export default function AddProduct() {
  const { creatProduct, imageUrl, isAddProduct, setIsAddProduct } = Auth();
  const { refreshProducts } = useContext(AdminContext);
  const formik = useFormik({
    initialValues: {
      productName: "",
      description: "",
      price: 0,
      thumbnail: "",
      discount: 0,
      qty: 0,
      category: "",
      subCategory: "",
    },
    validationSchema: validationSchema,
    onSubmit: async (values) => {
      await creatProduct({
        productName: values.productName,
        description: values.description,
        price: values.price,
        thumbnail: imageUrl,
        discount: values.discount,
        qty: values.qty,
        category: values.category,
        subCategory: values.subCategory,
      });
      refreshProducts();
    },
  });
  return (
    <Stack>
      <Stack direction="row" gap="30px" fontSize="14px">
        <ProductFields1
          productName={formik.values.productName}
          description={formik.values.description}
          price={formik.values.price}
          thumbnail={formik.values.thumbnail}
          discount={formik.values.discount}
          qty={formik.values.qty}
          handleChange={formik.handleChange}
        />
        <ProductFields2
          category={formik.values.category}
          subCategory={formik.values.subCategory}
          handleChange={formik.handleChange}
        />
      </Stack>
      <Stack direction="row" className="gap-8 justify-end pt-6 bg-[#F7F7F8]">
        <Button
          className="w-[116px] h-[56px] text-[18px] font-semibold bg-white"
          variant="outlined"
        >
          Ноорог
        </Button>
        <Button
          variant="contained"
          className="w-[116px] h-[56px] text-[18px] mr-8 font-semibold bg-black"
          // disabled={
          //   !formik.values.productName ||
          //   !formik.values.description ||
          //   // !formik.values.price ||
          //   //   !formik.values.thumbnail ||
          //   // !formik.values.discount ||
          //   // !formik.values.qty ||
          //   //   !formik.values.images ||
          //   // !formik.values.category ||
          //   // !formik.values.subCategory ||
          //   //   !formik.values.color ||
          //   // !formik.values.tags
          // }
          onClick={() => {
            formik.handleSubmit();
          }}
        >
          Нийтлэх
        </Button>
      </Stack>
      <Modal open={isAddProduct}>
        <Box
          sx={{
            position: "absolute" as "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            bgcolor: "background.paper",
            boxShadow: 24,
            borderRadius: "20px",
            p: "24px",
          }}
        >
          <Typography
            display="flex"
            justifyContent="end"
            onClick={() => {
              setIsAddProduct(false);
            }}
          >
            X
          </Typography>
          {isAddProduct && <AddModel />}
        </Box>
      </Modal>
    </Stack>
  );
}
