"use client";
import { Button, Stack, TextField, Typography } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import { CustomInput } from "../../components/CustomInput";
import AttachMoneyIcon from "@mui/icons-material/AttachMoney";
import EventOutlinedIcon from "@mui/icons-material/EventOutlined";
import SearchIcon from "@mui/icons-material/Search";
import Link from "next/link";
import ProductMap from "../../components/AddProduct/ProductMap";
import { useState } from "react";
export default function Product() {
  const [isBorder, setIsBorder] = useState(true);
  return (
    <Stack className="bg-[#F7F7F8] ">
      <Stack direction="row" className="h-[56px] border-[1px]">
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
        <Link href={"/AddProductCard"}>
          <Button
            variant="contained"
            className="flex w-[280px] h-[48px] bg-black"
          >
            <AddIcon />
            <Typography>Бүтээгдэхүүн нэмэх</Typography>
          </Button>
        </Link>
        <Stack direction="row" className="justify-between">
          <Stack direction="row" className="gap-[13px]">
            <Button variant="outlined" className="w-[145px] h-[40px] bg-white">
              <EventOutlinedIcon />
              <Typography>Ангилал</Typography>
            </Button>
            <Button variant="outlined" className="w-[145px] h-[40px] bg-white">
              <AttachMoneyIcon />
              <Typography>Үнэ</Typography>
            </Button>
            <Button variant="outlined" className="w-[145px] h-[40px] bg-white">
              <EventOutlinedIcon />
              <Typography>Сараар</Typography>
            </Button>
          </Stack>
          <Stack className="w-[419px] border-[1px] bg-white" direction="row">
            <SearchIcon />
            <CustomInput
              inputProps={{}}
              type="search"
              placeholder="Бүтээгдэхүүний нэр, SKU, UPC"
            />
          </Stack>
        </Stack>
        <Stack className="rounded-[20px] bg-white">
          <Stack
            direction="row"
            paddingLeft="100px"
            paddingRight="104px"
            className="h-[44px] items-center "
          >
            <Typography className="w-[15%]">Бүтээгдэхүүн</Typography>
            <Typography className="w-[20%]">Ангилал</Typography>
            <Typography className="w-[15%]">Үнэ</Typography>
            <Typography className="w-[15%]">Үлдэгдэл</Typography>
            <Typography className="w-[15%]">Зарагдсан</Typography>
            <Typography className="w-[20%]"> Нэмсэн огноо</Typography>
          </Stack>
          <ProductMap />
        </Stack>
      </Stack>
    </Stack>
  );
}
