"use client";
import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import SearchIcon from "@mui/icons-material/Search";

import {
  IconButton,
  InputAdornment,
  Stack,
  TextField,
  TextFieldProps,
  Typography,
} from "@mui/material";
import { useState } from "react";
export const CustomInput = (props: TextFieldProps) => {
  const { label, type = "text", ...rest } = props;

  const [showPassword, setShowPassword] = useState(false);
  const handleShowPassword = () => {
    setShowPassword((prev: any) => !prev);
  };
  return (
    <Stack gap={1}>
      <Typography fontSize={14}>{label}</Typography>
      <TextField
        {...rest}
        type={type === "password" && showPassword ? "text" : type}
        sx={{ height: type === "search" ? "40px" : "56px" }}
        InputProps={{
          sx: {
            bgcolor: "#F7F7F8",
            border: "#D6D8DB",
            height: type === "search" ? "40px" : "56px",
          },

          endAdornment: type === "password" && (
            <InputAdornment position="end">
              <IconButton onClick={handleShowPassword}>
                {showPassword ? <VisibilityIcon /> : <VisibilityOffIcon />}
              </IconButton>
            </InputAdornment>
          ),
          startAdornment: type === "search" && (
            <InputAdornment position="start">
              <SearchIcon />
            </InputAdornment>
          ),
        }}
      />
    </Stack>
  );
};
