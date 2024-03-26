"use client";
import {
  Button,
  IconButton,
  MenuItem,
  Select,
  Stack,
  Typography,
} from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import { ChangeEventHandler, Dispatch } from "react";
import categoryArr from "./categories.json";
import { CustomInput } from "@/components/CustomInput";
type Product2Props = {
  handleChange: ChangeEventHandler<HTMLTextAreaElement | HTMLInputElement>;
  error: any;
  helperText: any;
  subCategory: string;
  category: string;
  discount: string;
  // color: {
  //   colorName: string;
  //   colorCode: string;
  // }[];
  // size: {
  //   sizeType: string;
  // }[];
  // tags: {
  //   tagsName: string;
  // }[];
};

export default function ProductFields2(props: Product2Props) {
  const { handleChange, error, helperText, subCategory, category, discount } =
    props;

  return (
    <Stack className="w-[563px] gap-6">
      <Stack className="bg-white rounded-[13px] p-[24px] gap-[16px] ">
        <Stack mb="10px">
          <Typography>Ерөнхий ангилал</Typography>
          <CustomInput
            type="select"
            select
            name="category"
            value={category}
            onChange={handleChange}
            className="bg-[#F7F7F8] text-lg"
          >
            {categoryArr.map((item, index) => (
              <MenuItem key={index} value={item}>
                {item}
              </MenuItem>
            ))}
          </CustomInput>
        </Stack>
        <Stack mb="10px">
          <Typography>Дэд ангилал</Typography>
          <CustomInput
            name="subCategory"
            placeholder="Бөглөх"
            defaultValue={subCategory}
            error={error.subCategory}
            helperText={helperText.subCategory}
            onChange={handleChange}
            className="bg-[#F7F7F8] text-lg"
          />
        </Stack>
      </Stack>

      <Stack className="bg-white rounded-[13px] p-[24px] gap-[16px] ">
        <Stack mb="10px">
          <Typography>Хөнгөлөлт</Typography>
          <CustomInput
            name="discount"
            placeholder="Хөнгөлөлт"
            defaultValue={discount}
            error={error.discount}
            helperText={helperText.discount}
            onChange={handleChange}
            className="bg-[#F7F7F8] text-lg"
          />
        </Stack>
      </Stack>
      <Stack className="bg-white p-[24px] gap-6 rounded-[13px]">
        <Typography>Төрөл</Typography>
        <Stack direction="row" gap="16px" alignItems="center">
          <Typography>Өнгө</Typography>
          {/* {Boolean(isPicker) && (
            <Stack>
              <MuiColorInput
                format="hex"
                sx={{
                  width: "52px",
                  "& fieldset": { border: "none" },
                }}
                value={colorValue}
                onChange={(value: any) => {
                  setColorValue(value);
                }}
              />
            </Stack>
          )}
          <IconButton
            onClick={() => {
              setIsPicker((prev) => prev, isPicker);
            }}
          >
            <AddIcon className="bg-[#ECEDF0] rounded-[100%] w-[32px] h-[32px]" />
          </IconButton> */}
        </Stack>
        <Stack direction="row" gap="16px" alignItems="center">
          <Typography>Хэмжээ</Typography>
          <AddIcon
            className="bg-[#ECEDF0] rounded-[100%] w-[32px] h-[32px] "
            onClick={() => {}}
          />
        </Stack>
      </Stack>
    </Stack>
  );
}
