"use client";
import { IconButton, Rating, Stack, Typography } from "@mui/material";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import SavedSearchIcon from "@mui/icons-material/SavedSearch";
import { Client } from "@/components/providers/ClientProvider";
import { numberFormatter } from "@/components/numberFormatter";
export default function MainSingleCard() {
  const { allProducts } = Client();
  return (
    <Stack className="gap-[34px] cursor-pointer">
      {allProducts.map((item: any, index: number) => {
        return (
          <Stack
            key={index}
            direction="row"
            className="gap-4 h-[270px] mb-[96px] w-full"
          >
            <Stack className="w-[270px] bg-[#EBF4F3] justify-center items-center ">
              <img
                width="169px"
                height="169px"
                src={item.images[0]}
                style={{ mixBlendMode: "multiply" }}
              />
            </Stack>
            <Stack className="gap-4 text-[#151875] p-[16px] h-[270px] justify-between max-w-[600px] w-full">
              <Stack>
                <Stack direction="row" className="gap-4 items-center ">
                  <Typography fontSize="18px" fontWeight="700">
                    {item.productName}
                  </Typography>
                  <Stack direction="row" className="gap-[8px]">
                    <Stack className="w-3 h-3 bg-[#DE9034] rounded-full"></Stack>
                    <Stack className="w-3 h-3 bg-[#E60584] rounded-full"></Stack>
                    <Stack className="w-3 h-3 bg-[#5E37FF] rounded-full"></Stack>
                  </Stack>
                </Stack>
                <Stack direction="row" className="gap-3 items-center">
                  <Typography fontSize="21px" fontWeight="400">
                    {numberFormatter.format(item.price)}₮
                  </Typography>
                  <Stack direction="row">
                    <Rating
                      name="simple-controlled"
                      sx={{ fontSize: "20px" }}
                    />
                    <Typography fontSize="13px" fontWeight="800">
                      (32)
                    </Typography>
                  </Stack>
                </Stack>
                <Typography>
                  {item.description.length < 150
                    ? item.description
                    : item.description.slice(0, 130)}
                </Typography>
              </Stack>
              <Stack direction="row" className="gap-[20px]">
                <IconButton className="w-[34px] h-[34px]">
                  <ShoppingCartIcon />
                </IconButton>
                <IconButton className="w-[34px] h-[34px] ">
                  <FavoriteBorderIcon />
                </IconButton>
                <IconButton className="w-[34px] h-[34px] ">
                  <SavedSearchIcon />
                </IconButton>
              </Stack>
            </Stack>
          </Stack>
        );
      })}
    </Stack>
  );
}
