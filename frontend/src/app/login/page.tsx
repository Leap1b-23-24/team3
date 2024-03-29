"use client";
import { Footer } from "@/components";
import { Header } from "@/components/ClientTools/HeaderOfUser";
import { CustomInput } from "@/components/CustomInput";
import { Auth } from "@/components/providers/AuthProvider";
import { Button, Card, Stack, Typography } from "@mui/material";
import { useFormik } from "formik";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import * as yup from "yup";
const validateYupSchema = yup.object({
  email: yup
    .string()
    .email("И-мэйл буруу байна")
    .required("И-мэйлээ оруулна уу"),
  password: yup.string().required("Нууц үгээ оруулна уу"),
});
export default function Login() {
  const router = useRouter();
  const { login } = Auth();
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: validateYupSchema,
    onSubmit: async (values) => {
      await login({
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
    <>
      <Header />
      <Stack className="items-center gap-[16px] text-center">
        <Card className="flex flex-col w-[496px] px-8 py-6 text-center mt-32 text-[#9096B2] gap-[21px]">
          <Typography fontSize="32px" fontWeight="800" color="black">
            Нэвтрэх
          </Typography>
          <Typography fontSize="17px" fontWeight="400">
            Доорх мэдээллийн оруулж нэвтэрнэ үү
          </Typography>
          <CustomInput
            placeholder="Имэйл хаяг"
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
          <Typography fontSize="17px" fontWeight="400">
            Нууц үгээ мартсан
          </Typography>
          <Button
            variant="contained"
            onClick={() => {
              formik.handleSubmit();
            }}
            sx={{ bgcolor: "#FB2E86 !important" }}
          >
            Нэвтрэх
          </Button>
          <Typography
            className="text-[17px] font-normal cursor-pointer"
            onClick={() => {
              router.push("/signupshop");
            }}
          >
            Шинээр бүртгүүлэх
          </Typography>
        </Card>
        <Typography
          className="mb-32 text-[#9096B2] border-b-2 cursor-pointer"
          onClick={() => {
            router.push("/merchantSignUp");
          }}
        >
          мерчант нэвтрэх
        </Typography>
      </Stack>
      <Footer />
    </>
  );
}
