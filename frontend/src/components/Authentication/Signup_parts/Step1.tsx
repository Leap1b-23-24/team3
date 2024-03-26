"use client";
import { Button, Stack, Typography } from "@mui/material";
import ArrowBackTwoToneIcon from "@mui/icons-material/ArrowBackTwoTone";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import { CustomInput } from "../../CustomInput";
import * as yup from "yup";
import { useFormik } from "formik";
import { Auth } from "../../providers/AuthProvider";
import { useEffect } from "react";

const validationSchema = yup.object({
  shopName: yup.string().required("Дэлгүүрийн нэрээ оруулна уу"),
});

export default function Step1() {
  const { checkShopName, setIndex, setShopName } = Auth();
  const formik = useFormik({
    initialValues: {
      shopName: "",
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      checkShopName({ shopName: values.shopName });
      setShopName(values.shopName);
    },
  });
  useEffect(() => {
    document.addEventListener("keydown", detectKeyDown);

    return () => {
      document.removeEventListener("keydown", detectKeyDown);
    };
  }, []);

  const detectKeyDown = (e: any) => {
    if (e.key === "Enter") {
      formik.handleSubmit();
    }
  };
  return (
    <>
      <Stack className="max-w-[452px] w-full p-6 m-auto">
        <Typography className="text-[32px] font-bold  mb-5">
          Дэлгүүрийн мэдээлэл
        </Typography>
        <Typography className="font-semibold">
          Танай дэлгүүрийн нэр юу вэ?
        </Typography>
        <CustomInput
          id="shopName"
          name="shopName"
          placeholder="Дэлгүүрийн нэр"
          value={formik.values.shopName}
          onChange={formik.handleChange}
          error={formik.touched.shopName && Boolean(formik.errors.shopName)}
          helperText={formik.touched.shopName && formik.errors.shopName}
          onBlur={formik.handleBlur}
          type="text"
        />
      </Stack>
      <Stack
        direction="row"
        className="max-w-[404px] w-full mt-14 items-center justify-between m-auto"
      >
        <Stack
          onClick={() => {
            setIndex("signup");
          }}
          className="w-12 h-12 bg-[#ECEDF0] rounded-full cursor-pointer items-center justify-center"
        >
          <ArrowBackTwoToneIcon />
        </Stack>

        <Button
          onClick={() => {
            formik.handleSubmit();
          }}
          disabled={!formik.values.shopName}
          variant="contained"
          className="h-12 max-w-[127px] rounded-lg bg-black normal-case"
        >
          Дараах
          <span className="text-right">
            <ArrowForwardIcon sx={{ fontSize: "20px" }} />
          </span>
        </Button>
      </Stack>
    </>
  );
}
