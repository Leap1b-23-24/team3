"use client";
import { Button, Card, Stack, Typography } from "@mui/material";
import { CustomInput } from "../../components/CustomInput";
import { useFormik } from "formik";
import * as yup from "yup";
import { Auth } from "@/components/providers/AuthProvider";
import { useEffect } from "react";
const validationSchema = yup.object({
  email: yup
    .string()
    .email("И-мэйл буруу байна")
    .required("И-мэйлээ оруулна уу"),
  password: yup.string().required("Нууц үгээ оруулна уу"),
  repassword: yup
    .string()
    .required("Нууц үгээ давтан оруулна уу")
    .oneOf([yup.ref("password")], "Нууц үгтэй таарахгүй байна"),
});
export default function SignUp() {
  const { signUpShop } = Auth();
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
      repassword: "",
    },
    validationSchema: validationSchema,
    onSubmit: async (values) => {
      await signUpShop({
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
    <Stack className="items-center gap-[16px] text-center">
      <Card className="flex flex-col w-[496px] px-8 py-6 text-center m-32 text-[#9096B2] gap-[21px]">
        <Typography fontSize="32px" fontWeight="800" color="black">
          Бүртгүүлэх
        </Typography>
        <Typography fontSize="17px" fontWeight="400">
          Доорх мэдээллийг бөглөнө үү
        </Typography>
        <CustomInput
          placeholder="Имэйл хаяг"
          id="email"
          name="email"
          value={formik.values.email}
          onChange={formik.handleChange}
          error={formik.touched.email && Boolean(formik.errors.email)}
          helperText={formik.touched.email && formik.errors.email}
          onBlur={formik.handleBlur}
          type="text"
        />
        <CustomInput
          placeholder="Нууц үг"
          id="password"
          name="password"
          value={formik.values.password}
          onChange={formik.handleChange}
          error={formik.touched.password && Boolean(formik.errors.password)}
          helperText={formik.touched.password && formik.errors.password}
          onBlur={formik.handleBlur}
          type="password"
        />
        <CustomInput
          type="repassword"
          placeholder="Нууц үг давтах"
          name="repassword"
          value={formik.values.repassword}
          onChange={formik.handleChange}
          error={formik.touched.repassword && Boolean(formik.errors.repassword)}
          helperText={formik.touched.repassword && formik.errors.repassword}
          onBlur={formik.handleBlur}
        />
        <Typography fontSize="17px" fontWeight="400">
          Нууц үгээ мартсан
        </Typography>
        <Button
          variant="contained"
          sx={{ bgcolor: "#FB2E86 !important" }}
          onClick={() => {
            formik.handleSubmit();
          }}
        >
          Бүртгүүлэх
        </Button>
        <Typography fontSize="17px" fontWeight="400">
          Нэвтрэх хэсэг
        </Typography>
      </Card>
    </Stack>
  );
}
