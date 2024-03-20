"use client";
import { Button, Stack, Typography } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import { CustomInput } from "../../CustomInput";
import AttachMoneyIcon from "@mui/icons-material/AttachMoney";
import EventOutlinedIcon from "@mui/icons-material/EventOutlined";

import { useContext, useState } from "react";
import { AdminContext } from "@/components/providers/AdminProvider";

export default function ProductHead() {
  const [isBorder, setIsBorder] = useState(true);
  const { setIsAddProduct } = useContext(AdminContext);
  return (
    <Stack className="bg-[#F7F7F8] ">
      <Stack direction="row" className="h-[56px] ">
        <Typography
          style={{
            fontWeight: isBorder ? "600" : "400",
            borderBottom: isBorder ? "2px solid black" : "",
          }}
          className="w-[124px] flex justify-center items-center"
          onClick={() => {
            setIsBorder(true);
          }}
        >
          Бүтээгдэхүүн
        </Typography>
        <Typography
          style={{
            fontWeight: isBorder ? "400" : "600",
            borderBottom: isBorder ? "" : "2px solid black",
          }}
          className="w-[88px] flex justify-center items-center"
          onClick={() => {
            setIsBorder(false);
          }}
        >
          Ангилал
        </Typography>
      </Stack>
      <Stack gap="40px" className="p-8">
        <Button
          variant="contained"
          className="flex w-[280px] h-[48px] bg-black"
          onClick={() => {
            setIsAddProduct(true);
          }}
        >
          <AddIcon />
          <Typography>Бүтээгдэхүүн нэмэх</Typography>
        </Button>

        <Stack direction="row" className="justify-between items-center ">
          <Stack direction="row" className="gap-[13px]">
            <Button variant="outlined" className="w-[145px] h-10 bg-white">
              <EventOutlinedIcon />
              <Typography>Ангилал</Typography>
            </Button>
            <Button variant="outlined" className="w-[145px] h-10 bg-white">
              <AttachMoneyIcon />
              <Typography>Үнэ</Typography>
            </Button>
            <Button variant="outlined" className="w-[145px] h-10 bg-white">
              <EventOutlinedIcon />
              <Typography>Сараар</Typography>
            </Button>
          </Stack>

          <Stack className="-mt-2">
            <CustomInput
              placeholder="Бүтээгдэхүүний нэр, SKU, UPC"
              type="search"
            />
          </Stack>
        </Stack>
      </Stack>
    </Stack>
  );
}
