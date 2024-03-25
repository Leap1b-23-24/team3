"use client";
import {
  Button,
  IconButton,
  MenuItem,
  Select,
  Stack,
  Typography,
} from "@mui/material";
import { MuiColorInput } from "mui-color-input";
import AddIcon from "@mui/icons-material/Add";
import { ChangeEventHandler, Dispatch, useState } from "react";
import categoryArr from "./categories.json";
import subcateArr from "./subcategories.json";
type Product2Props = {
  setMainCate: Dispatch<any>;
  setSubCate: Dispatch<any>;
  mainCate: any;
  subCate: any;
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
  const { setSubCate, setMainCate, mainCate, subCate } = props;

  // const [colorValue, setColorValue] = useState("");
  // const [isPicker, setIsPicker] = useState([]);
  return (
    <Stack className="w-[563px] gap-6">
      <Stack className="bg-white rounded-[13px] p-[24px] gap-[16px] ">
        <Stack mb="10px">
          <Typography>Ерөнхий ангилал</Typography>
          <Select
            name="category"
            value={mainCate}
            onChange={(event: any) => {
              setMainCate(event.target.value);
            }}
            className="bg-[#F7F7F8] text-lg"
          >
            {categoryArr.map((item, index) => (
              <MenuItem key={index} value={item}>
                {item}
              </MenuItem>
            ))}
          </Select>
        </Stack>
        <Stack mb="10px">
          <Typography>Дэд ангилал</Typography>
          <Select
            name="subCategory"
            value={subCate}
            onChange={(event: any) => {
              setSubCate(event.target.value);
            }}
            className="bg-[#F7F7F8] text-lg"
          >
            {subcateArr.map((item, index) => (
              <MenuItem key={index} value={item}>
                {item}
              </MenuItem>
            ))}
          </Select>
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
