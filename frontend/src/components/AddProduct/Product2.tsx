"use client";
import { Button, Stack, TextField, Typography } from "@mui/material";
import { CustomInput } from "../CustomInput";
import AddIcon from "@mui/icons-material/Add";
import { ChangeEventHandler } from "react";
type Product2Props = {
  category: string;
  subCategory: string;
  color: {
    colorName: string;
    colorCode: string;
  }[];
  size: {
    sizeType: string;
  }[];
  tags: {
    tagsName: string;
  }[];
  handleChange: ChangeEventHandler<HTMLInputElement | HTMLTextAreaElement>;
};
export default function Product2(props: Product2Props) {
  const { category, subCategory, color, size, tags, handleChange } = props;
  return (
    <Stack className="w-[563px] gap-6">
      <Stack className="bg-white rounded-[13px] p-[24px] gap-[16px] ">
        <Stack>
          <Typography>Ерөнхий ангилал</Typography>
          <CustomInput
            name="category"
            placeholder="Сонгох"
            defaultValue={category}
            onChange={(event) => {
              handleChange(event);
            }}
            className="bg-[#F7F7F8] text-lg"
          />
        </Stack>
        <Stack>
          <Typography>Дэд ангилал</Typography>
          <CustomInput
            name="subCategory"
            placeholder="Сонгох"
            defaultValue={subCategory}
            onChange={(event) => {
              handleChange(event);
            }}
            className="bg-[#F7F7F8] text-lg"
          />
        </Stack>
      </Stack>
      <Stack className="bg-white p-[24px] gap-6 rounded-[13px]">
        <Typography>Төрөл</Typography>
        <Stack direction="row" gap="16px">
          <Typography>Өнгө</Typography>
          {}
          <AddIcon className="bg-[#ECEDF0] rounded-[100%] w-[32px] h-[32px] " />
        </Stack>
        <Stack direction="row" gap="16px">
          <Typography>Хэмжээ</Typography>
          <Typography></Typography>
          <AddIcon
            className="bg-[#ECEDF0] rounded-[100%] w-[32px] h-[32px] "
            onClick={() => {}}
          />
        </Stack>
        <Button
          variant="outlined"
          className="text-[14px] h-[53px] w-[160px] font-semibold"
        >
          Төрөл нэмэх
        </Button>
      </Stack>
      <Stack className="bg-white p-[24px] gap-4 rounded-[13px]">
        <Typography>Таг</Typography>
        <CustomInput
          name="tags"
          defaultValue={tags}
          onChange={(event) => {
            handleChange(event);
          }}
          className="text-lg"
        />
        <Typography>Санал болгох: Гутал , Цүнх , Эмэгтэй </Typography>
      </Stack>
    </Stack>
  );
}
