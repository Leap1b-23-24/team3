"use client";
import { Button, Modal, Stack, Typography } from "@mui/material";
import { useFormik } from "formik";
import * as yup from "yup";
import ProductFields1 from "@/components/MerchantTools/product/ProductFields1";
import ProductFields2 from "@/components/MerchantTools/product/ProductFields2";
import { useContext, useState } from "react";
import { Box } from "@mui/system";
import { MerchantContext } from "@/components/providers/MerchantProvider";
import AddModal from "./AddProductModal";

const validationSchema = yup.object({
  productName: yup.string().required("Бүтээгдэхүүний нэр оруулна уу"),
  description: yup.string().required("Бүтээгдэхүүний тайлбар оруулна уу"),
  price: yup.string().required("Бүтээгдэхүүний үнэ оруулна уу"),
  thumbnail: yup.string().required("Бүтээгдэхүүний зураг оруулна уу"),
  discount: yup.string().required("Бүтээгдэхүүний хөнгөлөлт оруулна уу"),
  qty: yup.string().required("Бүтээгдэхүүний үлдэгдэл оруулна уу"),
});
export default function AddProduct() {
  const [isModal, setIsModal] = useState(false);
  const [mainCate, setMainCate] = useState<any>("");
  const { creatProduct, imageUrl, refreshProducts } =
    useContext(MerchantContext);

  const formik = useFormik({
    initialValues: {
      productName: "",
      description: "",
      price: 0,
      thumbnail: "",
      qty: 0,
      category: `${mainCate}`,
      subCategory: "",
    },
    validationSchema: validationSchema,
    onSubmit: async (values) => {
      console.log(formik.errors);
      await creatProduct({
        productName: values.productName,
        description: values.description,
        price: values.price,
        thumbnail: imageUrl,
        qty: values.qty,
        category: mainCate,
        subCategory: values.subCategory,
      });

      setTimeout(() => {
        setIsModal(true);
      }, 4000);
      refreshProducts();
    },
  });
  console.log(formik.values);
  return (
    <Stack>
      <Stack direction="row" gap="30px" fontSize="14px">
        <ProductFields1
          productName={formik.values.productName}
          description={formik.values.description}
          price={formik.values.price}
          thumbnail={formik.values.thumbnail}
          qty={formik.values.qty}
          handleChange={formik.handleChange}
          error={formik.touched && Boolean(formik.errors)}
          helperText={formik.touched && formik.errors}
          onBlur={formik.handleBlur}
        />
        <ProductFields2
          setMainCate={setMainCate}
          mainCate={mainCate}
          handleChange={formik.handleChange}
          error={formik.touched && Boolean(formik.errors)}
          helperText={formik.touched && formik.errors}
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
          onClick={() => {
            formik.handleSubmit();
          }}
        >
          Нийтлэх
        </Button>
      </Stack>
      <Modal open={isModal}>
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
              setIsModal(true);
            }}
          >
            X
          </Typography>
          {isModal && <AddModal />}
        </Box>
      </Modal>
    </Stack>
  );
}
