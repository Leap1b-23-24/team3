"use client";
import { Button, MenuItem, Stack, Typography } from "@mui/material";
import ArrowBackTwoToneIcon from "@mui/icons-material/ArrowBackTwoTone";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import { CustomInput } from "../../CustomInput";
import * as yup from "yup";
import { useFormik } from "formik";
import { Auth } from "../../providers/AuthProvider";
import { useEffect } from "react";

const question1 = ["Тийм", "Үгүй", "Бусад"];
const question2 = ["Тийм", "Үгүй", "Бусад"];

const validationSchema = yup.object({
  question1: yup.string().required("Сонгоно уу"),
  question2: yup.string().required("Сонгоно уу"),
});

export default function Step3() {
  const { setIndex, setQuestion1, setQuestion2, signUp } = Auth();
  const formik = useFormik({
    initialValues: {
      question1: "",
      question2: "",
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      setQuestion1(values.question1);
      setQuestion2(values.question2);
      signUp();
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
          Жоохон танилцья
        </Typography>

        <Typography sx={{ mb: "32px" }}>
          Энэ мэдээллийг дэлгүүрийн тохиргоонд туслах зорилгоор ашиглана.
        </Typography>
        <Stack height="110px">
          <Typography className="font-semibold ">
            Та борлуулалт хийж байсан туршлагатай юу?
          </Typography>
          <CustomInput
            id="question1"
            name="question1"
            value={formik.values.question1}
            onChange={formik.handleChange}
            error={formik.touched.question1 && Boolean(formik.errors.question1)}
            helperText={formik.touched.question1 && formik.errors.question1}
            onBlur={formik.handleBlur}
            select
          >
            <MenuItem
              className="cursor-pointer hover:bg-gray-100"
              value="def"
              disabled
            >
              Сонгох
            </MenuItem>
            {question2.map((item, index) => {
              return (
                <MenuItem
                  key={index}
                  value={item}
                  className="cursor-pointer hover:bg-gray-100"
                >
                  {item}
                </MenuItem>
              );
            })}
          </CustomInput>
        </Stack>
        <Stack height="110px">
          <Typography className="font-semibold ">
            Та ямар төрлийн бүтээгдэхүүн борлуулах вэ?
          </Typography>
          <CustomInput
            id="question2"
            name="question2"
            value={formik.values.question2}
            onChange={formik.handleChange}
            error={formik.touched.question2 && Boolean(formik.errors.question2)}
            helperText={formik.touched.question2 && formik.errors.question2}
            onBlur={formik.handleBlur}
            select
          >
            <MenuItem
              className="cursor-pointer hover:bg-gray-100"
              value="def"
              disabled
            >
              Сонгох
            </MenuItem>
            {question1.map((item, index) => {
              return (
                <MenuItem
                  key={index}
                  value={item}
                  className="cursor-pointer hover:bg-gray-100"
                >
                  {item}
                </MenuItem>
              );
            })}
          </CustomInput>
        </Stack>
      </Stack>
      <Stack
        direction="row"
        className="max-w-[404px] w-full mt-14 items-center justify-between m-auto"
      >
        <Stack
          onClick={() => {
            setIndex("step2");
          }}
          className="w-12 h-12 bg-[#ECEDF0] rounded-full cursor-pointer items-center justify-center"
        >
          <ArrowBackTwoToneIcon />
        </Stack>

        <Button
          onClick={() => {
            formik.handleSubmit();
          }}
          disabled={!formik.values.question1 || !formik.values.question2}
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
