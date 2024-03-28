"use client";
import { Button, Checkbox, Stack, TextField, Typography } from "@mui/material";
import { useFormik } from "formik";
import * as yup from "yup";
const validationSchema = yup.object({
  firstName: yup.string().required("Нэрээ оруулна уу."),
  phone: yup.string().required("Утасны дугаараа оруулна уу."),
  address: yup.string().required("Хаягаа оруулна уу."),
});
export const OrderAddress = () => {
  const formik = useFormik({
    initialValues: {
      phone: "",
      firstName: "",
      lastName: "",
      address: "",
      additional: "",
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      console.log(
        values.phone,
        values.firstName,
        values.lastName,
        values.address,
        values.additional
      );
    },
  });

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
          <TextField
            fullWidth
            type="text"
            name="lastName"
            value={formik.values.lastName}
            onChange={formik.handleChange}
            placeholder="Овог"
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
        <Button
          onClick={formik.submitForm}
          variant="contained"
          sx={{
            width: "fit-content",
            marginTop: "67px",
            bgcolor: ({ palette }) => palette.success.main + "!important",
          }}
        >
          <Typography>Үргэлжлүүлэх</Typography>
        </Button>
      </Stack>
    </Stack>
  );
};
