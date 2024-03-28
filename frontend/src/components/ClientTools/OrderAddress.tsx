"use client";
import {
  CheckCircleOutlined,
  ExclamationCircleOutlined,
} from "@ant-design/icons";
import { Button, Checkbox, Stack, TextField, Typography } from "@mui/material";
import { useFormik } from "formik";
import { useEffect, useState } from "react";
import * as yup from "yup";
const validationSchema = yup.object({
  firstName: yup.string().required("Нэрээ оруулна уу."),
  phone: yup
    .string()
    .required("Утасны дугаараа оруулна уу.")
    .length(8, "Утасны дугаараа оруулна уу."),
  address: yup.string().required("Хаягаа оруулна уу."),
});
export const OrderAddress = () => {
  const [isContinue, setIsContinue] = useState(false);
  const formik = useFormik({
    initialValues: {
      phone: "",
      firstName: "",
      address: "",
      additional: "",
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      console.log(
        values.phone,
        values.firstName,
        values.address,
        values.additional
      );
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
    <Stack className="bg-[#F8F8FD] rounded-sm pt-[69px] pr-10 pb-16 pl-11">
      <Typography color="#1D3178" fontSize={18} fontWeight={800}>
        Холбоо барих мэдээлэл
      </Typography>
      <Stack>
        <TextField
          type="text"
          name="phone"
          value={formik.values.phone}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          error={formik.touched.phone && Boolean(formik.errors.phone)}
          helperText={formik.touched.phone && formik.errors.phone}
          placeholder="И-мэйл эсвэл утасны дугаар"
          sx={{
            "& fieldset": { border: "none" },
          }}
          inputProps={{
            style: {
              borderBottom: "2px solid #BFC6E0",
            },
          }}
        />
      </Stack>
      <Stack mt={4} flexDirection="row" alignItems="center">
        <Checkbox defaultChecked color="success" size="small" />
        <Typography color="#8A91AB" fontSize={12} fontWeight={500}>
          Мэдээ, онцгой саналуудын талаар надад байнга мэдээлж байгаарай
        </Typography>
      </Stack>
      <Stack mt="109px">
        <Typography color="#1D3178" fontSize={18} fontWeight={800}>
          Хүргэлтийн хаяг
        </Typography>
        <Stack flexDirection="row" gap="30px" mt={3}>
          <TextField
            fullWidth
            type="text"
            name="firstName"
            value={formik.values.firstName}
            onChange={formik.handleChange}
            placeholder="Нэр"
            sx={{
              "& fieldset": { border: "none" },
              borderBottom: "2px solid #BFC6E0",
            }}
          />
        </Stack>
        <TextField
          fullWidth
          type="text"
          name="address"
          value={formik.values.address}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          error={formik.touched.address && Boolean(formik.errors.address)}
          helperText={formik.touched.address && formik.errors.address}
          placeholder="Хаяг"
          sx={{
            "& fieldset": { border: "none" },
            marginTop: "24px",
          }}
          inputProps={{
            style: {
              borderBottom: "2px solid #BFC6E0",
            },
          }}
        />
        <TextField
          fullWidth
          type="text"
          name="additional"
          value={formik.values.additional}
          onChange={formik.handleChange}
          placeholder="Орц код, нэмэлт мэдээлэл"
          sx={{
            "& fieldset": { border: "none" },
            marginTop: "24px",
            borderBottom: "2px solid #BFC6E0",
          }}
        />
        <Stack
          width={1}
          direction="row"
          alignItems="center"
          mt={3}
          justifyContent="end"
          gap={2}
        >
          {isContinue ? (
            <CheckCircleOutlined
              style={{ fontSize: "40px", color: "#19D16F" }}
            />
          ) : (
            <ExclamationCircleOutlined
              style={{ fontSize: "40px", color: "#FB2E86" }}
            />
          )}
          <Button
            onClick={() => {
              if (
                (formik.values.firstName,
                formik.values.address,
                formik.values.phone,
                formik.values.additional)
              )
                setIsContinue(true);
              formik.submitForm;
            }}
            variant="contained"
            disabled={isContinue}
            sx={{
              width: "fit-content",

              bgcolor: isContinue
                ? "#19D16F !important"
                : ({ palette }) => palette.success.main + "!important",
            }}
          >
            {isContinue ? (
              <Typography>Амжилттай</Typography>
            ) : (
              <Typography>Үргэлжлүүлэх</Typography>
            )}
          </Button>
        </Stack>
      </Stack>
    </Stack>
  );
};
