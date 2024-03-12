"use client";
import { Button, Stack, Typography } from "@mui/material";
import { CustomInput } from "./CustomInput";
import AddIcon from "@mui/icons-material/Add";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import { useState } from "react";
export default function AddProduct() {
  //   const [isButton, setIsButton] = useState(true);
  return (
    <Stack className="bg-[#F7F7F8] h-screen gap-10">
      <Stack direction="row" className="h-[56px] items-center gap-5 bg-white">
        <ArrowBackIosNewIcon />
        <Typography>Бүтээгдэхүүн нэмэх</Typography>
      </Stack>
      <Stack
        className="bg-[#F7F7F8] justify-center mr-8"
        direction="row"
        gap="30px"
        fontSize="14px"
      >
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
        <Stack className="w-[563px] gap-6">
          <Stack className="bg-white rounded-[13px] p-[24px] gap-[16px] ">
            <Stack>
              <Typography>Ерөнхий ангилал</Typography>
              <CustomInput
                placeholder="Сонгох"
                className="bg-[#F7F7F8] text-lg"
              />
            </Stack>
            <Stack>
              <Typography>Дэд ангилал</Typography>
              <CustomInput
                placeholder="Сонгох"
                className="bg-[#F7F7F8] text-lg"
              />
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
      </Stack>
      <Stack direction="row" className="justify-end gap-8 mr-[560px]">
        <Button
          className="w-[116px] h-[56px] text-[18px] font-semibold"
          variant="outlined"
        >
          Ноорог
        </Button>
        <Button
          variant="contained"
          className="w-[116px] h-[56px] text-[18px] font-semibold bg-black"
        >
          Нийтлэх
        </Button>
      </Stack>
    </Stack>
  );
}
