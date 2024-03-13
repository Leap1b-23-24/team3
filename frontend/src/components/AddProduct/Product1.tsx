import { Stack, Typography } from "@mui/material";
import { CustomInput } from "../CustomInput";
import { Auth } from "../providers/AuthProvider";
import { useFormik } from "formik";
import { useState } from "react";

export default function Product1(props: any) {
  const { formik } = props;
  return (
    <Stack className="max-w-[563px] gap-6">
      <Stack className="bg-white p-[24px] rounded-[12px] gap-[16px]">
        <Stack>
          <Typography>Бүтээгдэхүүний нэр</Typography>
          <CustomInput placeholder="Нэр" className="bg-[#F7F7F8] text-lg" />
        </Stack>
        <Stack>
          <Typography>Нэмэлт мэдээлэл</Typography>
          <CustomInput
            placeholder="Гол онцлог, давуу тал, техникийн үзүүлэлтүүдийг онцолсон дэлгэрэнгүй, сонирхолтой тайлбар."
            className="bg-[#F7F7F8] text-lg"
          />
        </Stack>
        <Stack>
          <Typography>Барааны код</Typography>
          <CustomInput className="bg-[#F7F7F8] text-lg" />
        </Stack>
      </Stack>
      <Stack className="bg-white p-[24px] rounded-[12px] gap-[16px]">
        <Typography>Бүтээгдэхүүний зураг</Typography>
        <Stack>
          <img src="" className="w-[125px] h-[125px]" />
        </Stack>
      </Stack>
      <Stack
        direction="row"
        gap="16px"
        className="bg-white rounded-[13px] p-[24px] justify-between"
      >
        <Stack>
          <Typography>Үндсэн үнэ</Typography>
          <CustomInput
            placeholder="Үндсэн үнэ"
            className="bg-[#F7F7F8] w-[250px] text-lg"
          />
        </Stack>
        <Stack>
          <Typography>Үлдэгдэл тоо ширхэг</Typography>
          <CustomInput
            placeholder="Үлдэгдэл тоо ширхэг"
            className="bg-[#F7F7F8] w-[250px] text-lg"
          />
        </Stack>
      </Stack>
    </Stack>
  );
}
