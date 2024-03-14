"use client";
import { Button, Stack, Typography } from "@mui/material";
import { CustomInput } from "../CustomInput";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import AppleIcon from "@mui/icons-material/Apple";
import MicrosoftIcon from "@mui/icons-material/Microsoft";
import GoogleIcon from "@mui/icons-material/Google";
import Link from "next/link";
import * as yup from "yup";
import { useFormik } from "formik";
import { useEffect } from "react";
import { Auth } from "../providers/AuthProvider";

const data = [
  { name: "Google-ээр нэвтрэх", icon: <GoogleIcon /> },
  { name: "Microsoft-оор нэвтрэх", icon: <MicrosoftIcon /> },
  { name: "Apple-аар нэвтрэх", icon: <AppleIcon /> },
];

const validationSchema = yup.object({
  name: yup.string().required("Нэрээ оруулна уу"),
  email: yup
    .string()
    .email("И-мэйл буруу байна")
    .required("И-мэйлээ оруулна уу"),
  password: yup.string().required("Нууц үгээ оруулна уу"),
});

export default function SignUp(props: any) {
  const { Signup, index, setIndex } = Auth();
  const { Next } = props;

  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      password: "",
    },
    validationSchema: validationSchema,
    onSubmit: async (values) => {
      await Signup({
        name: values.name,
        email: values.email,
        password: values.password,
      });
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
    <Stack
      className="max-w-[440px] w-full  p-10 rounded-2xl m-auto"
      sx={{ border: "solid 1px #ECEDF0" }}
    >
      <Typography className="text-[32px] font-bold text-center mb-10">
        Бүртгүүлэх
      </Typography>
      <Stack sx={{ height: "110px" }}>
        <CustomInput
          id="email"
          name="email"
          label="Таны имэйл"
          placeholder="И-мэйл"
          value={formik.values.email}
          onChange={formik.handleChange}
          error={formik.touched.email && Boolean(formik.errors.email)}
          helperText={formik.touched.email && formik.errors.email}
          onBlur={formik.handleBlur}
          type="text"
        />
      </Stack>
      <Stack sx={{ height: "110px" }}>
        <CustomInput
          id="name"
          name="name"
          label="Таны нэр"
          placeholder="Нэр"
          value={formik.values.name}
          onChange={formik.handleChange}
          error={formik.touched.name && Boolean(formik.errors.name)}
          helperText={formik.touched.name && formik.errors.name}
          onBlur={formik.handleBlur}
          type="text"
        />
      </Stack>
      <Stack sx={{ height: "110px" }}>
        <CustomInput
          id="password"
          name="password"
          label="Таны нууц үг "
          placeholder="Нууц үг"
          value={formik.values.password}
          onChange={formik.handleChange}
          error={formik.touched.password && Boolean(formik.errors.password)}
          helperText={formik.touched.password && formik.errors.password}
          onBlur={formik.handleBlur}
          type="password"
        />
      </Stack>
      <Button
        onClick={() => {
          formik.handleSubmit();
        }}
        variant="contained"
        className="h-[60px] mt-4 flex justify-between rounded-lg bg-black normal-case"
      >
        <span></span>
        Дараах
        <span className="text-right">
          <ArrowForwardIcon />
        </span>
      </Button>
      <Stack
        sx={{
          mt: "28px",
          py: "28px",
          borderBottom: "1px solid #ECEDF0",
          borderTop: "1px solid #ECEDF0",
        }}
      >
        {data.map((item, index) => {
          return (
            <Stack
              key={index}
              direction="row"
              justifyContent="center"
              alignItems="center"
              className="bg-[#ECEDF0] h-[52px] mb-3 cursor-pointer"
            >
              <Link href="#">
                <Stack direction="row" gap={1} className="w-52">
                  {item.icon}
                  {item.name}
                </Stack>
              </Link>
            </Stack>
          );
        })}
      </Stack>
      <Stack direction="row" className="text-sm m-auto mt-6">
        Бүртгэлтэй юу?
        <Link href="#" className="underline cursor-pointer ml-1">
          Нэвтрэх
        </Link>
      </Stack>
    </Stack>
  );
}
