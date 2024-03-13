import { Button, Stack, Typography } from "@mui/material";
import { CustomInput } from "../CustomInput";
import AddIcon from "@mui/icons-material/Add";
import { Auth } from "../providers/AuthProvider";
import { useState } from "react";
import { useFormik, validateYupSchema } from "formik";

export default function Product2() {
  return (
    <Stack className="w-[563px] gap-6">
      <Stack className="bg-white rounded-[13px] p-[24px] gap-[16px] ">
        <Stack>
          <Typography>Ерөнхий ангилал</Typography>
          <CustomInput placeholder="Сонгох" className="bg-[#F7F7F8] text-lg" />
        </Stack>
        <Stack>
          <Typography>Дэд ангилал</Typography>
          <CustomInput placeholder="Сонгох" className="bg-[#F7F7F8] text-lg" />
        </Stack>
      </Stack>
      <Stack className="bg-white p-[24px] gap-6 rounded-[13px]">
        <Typography>Төрөл</Typography>
        <Stack direction="row" gap="16px">
          <Typography>Өнгө</Typography>
          <AddIcon className="bg-[#ECEDF0] rounded-[100%] w-[24px] h-[24px]" />
        </Stack>
        <Stack direction="row" gap="16px">
          <Typography>Хэмжээ</Typography>
          <AddIcon className="bg-[#ECEDF0] rounded-[100%] w-[24px] h-[24px] s" />
        </Stack>
        <Button
          variant="outlined"
          className="text-[14px] h-[53px] w-[160px] font-semibold "
        >
          Төрөл нэмэх
        </Button>
      </Stack>
      <Stack className="bg-white p-[24px] gap-6 rounded-[13px]">
        <Typography>Таг</Typography>
        <CustomInput className="text-lg" />
        <Typography>Санал болгох: Гутал , Цүнх , Эмэгтэй </Typography>
      </Stack>
    </Stack>
  );
}
