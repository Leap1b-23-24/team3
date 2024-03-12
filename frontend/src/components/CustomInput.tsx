"use client";
import { Stack, TextField, TextFieldProps, Typography } from "@mui/material";
export const CustomInput = (props: TextFieldProps) => {
  const { label, type = "text", ...rest } = props;
  return (
    <Stack gap={1}>
      <Typography fontSize={14}>{label}</Typography> <TextField {...rest} />{" "}
    </Stack>
  );
};
