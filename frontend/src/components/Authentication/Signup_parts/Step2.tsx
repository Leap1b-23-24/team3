"use client";
import { Button, MenuItem, Stack, Typography } from "@mui/material";
import ArrowBackTwoToneIcon from "@mui/icons-material/ArrowBackTwoTone";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import { CustomInput } from "../../CustomInput";
import * as yup from "yup";
import { useFormik } from "formik";
import { Auth } from "../../providers/AuthProvider";
import { useEffect } from "react";
import cities from "./cities.json";

const validationSchema = yup.object({
  city: yup.string().required("Хот/аймагаа оруулна уу"),
  district: yup.string().required("Сум/дүүрэгээ оруулна уу"),
  khoroo: yup.string().required("Хороогоо оруулна уу"),
});

export default function Step2() {
  const { setIndex, setCity, setDistrict, setKhoroo } = Auth();
  const formik = useFormik({
    initialValues: {
      city: "",
      district: "",
      khoroo: "",
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      setIndex("step3");
      setCity(values.city);
      setDistrict(values.district);
      setKhoroo(values.khoroo);
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
        <Typography className="text-[32px] font-bold mb-5">
          Бүс нутгийн мэдээлэл
        </Typography>

        <Stack height="110px">
          <Typography className="font-semibold ">Хот/аймаг</Typography>
          <CustomInput
            id="city"
            name="city"
            placeholder="Хот/аймаг"
            defaultValue="Сонгох"
            value={formik.values.city}
            onChange={formik.handleChange}
            error={formik.touched.city && Boolean(formik.errors.city)}
            helperText={formik.touched.city && formik.errors.city}
            onBlur={formik.handleBlur}
            select
          >
            <MenuItem value="Сонгох" disabled>
              Сонгох
            </MenuItem>
            {cities.map((city, index) => {
              return (
                <MenuItem
                  key={index}
                  className="cursor-pointer hover:bg-gray-100"
                  value={city.name}
                >
                  {city.name}
                </MenuItem>
              );
            })}
          </CustomInput>
        </Stack>

        <Stack height="110px">
          <Typography className="font-semibold ">Сум/Дүүрэг</Typography>
          <CustomInput
            id="district"
            name="district"
            placeholder="Сум/дүүрэг"
            value={formik.values.district}
            onChange={formik.handleChange}
            error={formik.touched.district && Boolean(formik.errors.district)}
            helperText={formik.touched.district && formik.errors.district}
            onBlur={formik.handleBlur}
            type="text"
          />
        </Stack>

        <Typography className="font-semibold mt-2">Хороо</Typography>
        <CustomInput
          id="khoroo"
          name="khoroo"
          placeholder="Хороо"
          value={formik.values.khoroo}
          onChange={formik.handleChange}
          error={formik.touched.khoroo && Boolean(formik.errors.khoroo)}
          helperText={formik.touched.khoroo && formik.errors.khoroo}
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
            setIndex("step1");
          }}
          className="w-12 h-12 bg-[#ECEDF0] rounded-full cursor-pointer items-center justify-center"
        >
          <ArrowBackTwoToneIcon />
        </Stack>

        <Button
          onClick={() => {
            formik.handleSubmit();
          }}
          disabled={
            !formik.values.khoroo ||
            !formik.values.city ||
            !formik.values.district
          }
          variant="contained"
          className="h-12 max-w-[127px] rounded-lg bg-black normal-case"
        >
          <span></span>
          Дараах
          <span className="text-right">
            <ArrowForwardIcon sx={{ fontSize: "20px" }} />
          </span>
        </Button>
      </Stack>
    </>
  );
}
