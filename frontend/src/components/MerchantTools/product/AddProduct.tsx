"use client";
import { Button, Stack } from "@mui/material";
import { useFormik } from "formik";
import * as yup from "yup";
import ProductFields1 from "@/components/MerchantTools/product/ProductFields1";
import ProductFields2 from "@/components/MerchantTools/product/ProductFields2";
import { useContext, useState } from "react";
import { MerchantContext } from "@/components/providers/MerchantProvider";
import { useRouter } from "next/navigation";

const validationSchema = yup.object({
  productName: yup.string().required("Бүтээгдэхүүний нэр оруулна уу"),
  description: yup.string().required("Бүтээгдэхүүний тайлбар оруулна уу"),
  price: yup.string().required("Бүтээгдэхүүний үнэ оруулна уу"),
  discount: yup.string().required("Бүтээгдэхүүний хөнгөлөлт оруулна уу"),
  qty: yup.string().required("Бүтээгдэхүүний үлдэгдэл оруулна уу"),
});
export default function AddProduct() {
  const [isModal, setIsModal] = useState(false);
  const router = useRouter();
  const { creatProduct, imageUrl, refreshProducts } =
    useContext(MerchantContext);

  const formik = useFormik({
    initialValues: {
      productName: "",
      description: "",
      discount: "",
      price: 0,
      images: [""],
      qty: 0,
      category: "",
      subCategory: "",
    },
    validationSchema: validationSchema,
    onSubmit: async (values) => {
      console.log("GGG", imageUrl);
      await creatProduct({
        productName: values.productName,
        description: values.description,
        discount: values.discount,
        price: values.price,
        images: imageUrl,
        qty: values.qty,
        category: values.category,
        subCategory: values.subCategory,
      });
      window.location.reload();
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
          qty={formik.values.qty}
          handleChange={formik.handleChange}
          error={formik.touched && Boolean(formik.errors)}
          helperText={formik.touched && formik.errors}
          onBlur={formik.handleBlur}
        />
        <ProductFields2
          discount={formik.values.discount}
          category={formik.values.category}
          subCategory={formik.values.subCategory}
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
          disabled={
            !formik.values.price ||
            !formik.values.productName ||
            !formik.values.description ||
            !formik.values.discount ||
            !formik.values.qty ||
            !formik.values.subCategory ||
            !imageUrl.length
          }
          onClick={() => {
            formik.handleSubmit();
          }}
        >
          Нийтлэх
        </Button>
      </Stack>
    </Stack>
  );
}
