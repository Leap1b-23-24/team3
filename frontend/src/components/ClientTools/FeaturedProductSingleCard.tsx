"use client";
import Shopping from "@mui/icons-material/ShoppingCartOutlined";
import Favorite from "@mui/icons-material/FavoriteBorder";
import ZoomIn from "@mui/icons-material/ZoomIn";
import { IconButton, Stack, Typography } from "@mui/material";
import { Dispatch, SetStateAction, useState } from "react";
import { numberFormatter } from "../numberFormatter";
import { Client } from "../providers/ClientProvider";
type cardTypes = {
  setPause: Dispatch<SetStateAction<boolean>>;
  name: string;
  price: number;
  image: string;
};
export default function FeaturedProductSingleCard(props: cardTypes) {
  const { allProducts, setDetails } = Client();
  const { setPause, name, price, image } = props;
  function handleDetail() {
    return allProducts;
  }

  return (
    <Stack
      className="w-[270px] h-[360px] shadow-slate-200 mb-10 shadow-lg"
      onMouseEnter={() => {
        setPause(true);
      }}
      onMouseLeave={() => {
        setPause(false);
      }}
      overflow="hidden"
      sx={{
        aspectRatio: 270 / 361,
        transition: "0.2 linear",
        "&:hover .info": {
          backgroundColor: "#2F1AC4",
        },
        "&:hover .details": {
          opacity: "1",
        },
        "&:hover .name": {
          color: "white",
        },
        "&:hover .price": {
          color: "white",
        },
        "&:hover .image": {
          transform: "scale(1.05)",
          transition: "0.2s ease",
        },
        ".image": {
          transition: "0.5s ease",
        },
        ".info": {
          transition: "0.5s ease",
        },
      }}
    >
      <Stack className="w-[225px] h-[225px] bg-white mx-auto relative">
        <img
          alt="No Image"
          src={image}
          width={175}
          height={190}
          className="image"
          style={{ margin: "auto" }}
        />
        <Stack
          onClick={() => {
            handleDetail();
          }}
          className="details w-[94px] h-8 rounded-sm mb-2 absolute bottom-0 left-[65px] cursor-pointer"
          sx={{
            bgcolor: "#08D15F",
            opacity: 0,
            color: "white",
            m: "auto",
            zIndex: 10,
          }}
        >
          <Typography m="auto" sx={{ fontSize: "12px" }}>
            Дэлгэрэнгүй
          </Typography>
        </Stack>
      </Stack>

      <Stack
        position="absolute"
        sx={{ opacity: 0, transition: "0.3s ease" }}
        className="details"
        width={1}
        height={1}
        bgcolor="#00000000"
        justifyContent="space-between"
        zIndex={1}
      >
        <Stack direction="row" gap={2} p="11px">
          <IconButton
            sx={{ color: "#1DB4E7", "&:hover": { color: "#2F1AC4" } }}
          >
            <Shopping />
          </IconButton>
          <IconButton
            sx={{ color: "#1DB4E7", "&:hover": { color: "#2F1AC4" } }}
          >
            <Favorite />
          </IconButton>
          <IconButton
            sx={{ color: "#1DB4E7", "&:hover": { color: "#2F1AC4" } }}
          >
            <ZoomIn />
          </IconButton>
        </Stack>
      </Stack>

      <Stack className="info">
        <Stack className="mt-5 mb-9 text-center text-lg font-bold text-[#FB2E86] name">
          {name}
        </Stack>
        <Stack className=" mb-7 text-center text-lg font-bold text-[#151875] price">
          {numberFormatter.format(price)}₮
        </Stack>
      </Stack>
    </Stack>
  );
}
