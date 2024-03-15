"use client";
import ArrowBackTwoToneIcon from "@mui/icons-material/ArrowBackTwoTone";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import SignUp from "@/components/Signup_parts/Signup";
import Step1 from "@/components/Signup_parts/Step1";
import Step2 from "@/components/Signup_parts/Step2";
import Step3 from "@/components/Signup_parts/Step3";
import { Button, Stack, Typography } from "@mui/material";
import { Auth } from "@/components/providers/AuthProvider";
import * as yup from "yup";
import { useFormik } from "formik";

const validationSchema = yup.object({
  name: yup.string().required("Нэрээ оруулна уу"),
  email: yup
    .string()
    .email("И-мэйл буруу байна")
    .required("И-мэйлээ оруулна уу"),
  password: yup.string().required("Нууц үгээ оруулна уу"),
  repassword: yup
    .string()
    .oneOf([yup.ref("password"), ""], "Нууц үг таарахгүй байна")
    .required("Нууц үгээ давтаж оруулна уу!"),
  city: yup.string().required("Хаягаа оруулна уу."),
  district: yup.string().required("Аймаг/Дүүрэг оруулна уу."),
  committee: yup.string().required("Хороо оруулна уу."),
});

export default function () {
  const { index, setIndex, checkUser } = Auth();

  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      password: "",
      repassword: "",
      shopName: "",
      cityName: "",
      district: "",
      committee: "",
      question1: "",
      question2: "",
    },
    validationSchema: validationSchema,
    onSubmit: async (values) => {
      await checkUser({ email: values.email });
    },
  });

  return (
    <Stack className="p-11">
      <img
        src="/PineconeLogo.svg"
        alt="pinecone"
        width={193}
        height={32}
        className=" mb-14"
      />
      {index >= 1 && (
        <Stack className="max-w-[792px] w-full m-auto mb-[120px] ">
          <Stack
            direction="row"
            className="max-w-[656px] w-full m-auto relative justify-between"
          >
            <Stack className="z-10 w-9 h-9 bg-black rounded-full items-center justify-center text-white ">
              {index >= 2 ? <span>&#10003;</span> : 1}
            </Stack>
            <Stack
              className="z-10 w-9 h-9 rounded-full items-center justify-center"
              sx={{
                bgcolor: index >= 2 ? "#000" : "#ECEDF0",
                color: index >= 2 ? "white" : "black",
              }}
            >
              {index >= 3 ? <span>&#10003;</span> : 2}
            </Stack>
            <Stack
              className="z-10 w-9 h-9 rounded-full items-center justify-center"
              sx={{
                bgcolor: index >= 3 ? "#000" : "#ECEDF0",
                color: index >= 3 ? "white" : "black",
              }}
            >
              3
            </Stack>
            <Stack className="w-full h-1 bg-[#ECEDF0] absolute top-[50%]"></Stack>
            <Stack
              className="h-1 absolute top-[50%]"
              sx={{
                width:
                  index === 2
                    ? "50%"
                    : "0%"
                    ? index === 3
                      ? "100%"
                      : "0%"
                    : "0%",
                backgroundColor:
                  index === 2
                    ? "black"
                    : "#ECEDF0"
                    ? index === 3
                      ? "black"
                      : "#ECEDF0"
                    : "#ECEDF0",
              }}
            ></Stack>
          </Stack>
          <Stack
            direction="row"
            className="w-full m-auto relative justify-between text-base font-semibold"
          >
            <Typography className="ml-8">Дэлгүүрийн нэр</Typography>
            <Typography>Бүс нутаг</Typography>
            <Typography className="mr-5">Нэмэлт мэдээлэл</Typography>
          </Stack>
        </Stack>
      )}

      {index === 0 && <SignUp />}
      {index === 1 && <Step1 shopName={formik.values.shopName} />}
      {index === 2 && (
        <Step2
          cityName={formik.values.cityName}
          district={formik.values.district}
          committee={formik.values.committee}
        />
      )}
      {index === 3 && <Step3 />}

      {index !== 0 && (
        <Stack
          direction="row"
          className="max-w-[404px] w-full mt-14 items-center justify-between m-auto"
        >
          <Stack
            onClick={() => {
              setIndex((prev) => prev - 1);
            }}
            className="w-12 h-12 bg-[#ECEDF0] rounded-full cursor-pointer items-center justify-center"
          >
            <ArrowBackTwoToneIcon />
          </Stack>

          <Button
            variant="contained"
            className="h-12 max-w-[127px] rounded-lg bg-black normal-case"
          >
            <span></span>
            Дараах
            <span className="text-right">
              <ArrowForwardIcon />
            </span>
          </Button>
        </Stack>
      )}
    </Stack>
  );
}
