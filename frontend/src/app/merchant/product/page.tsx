"use client";
import AddProduct from "@/components/MerchantTools/product/AddProduct";
import ProductHead from "@/components/MerchantTools/product/ProductHead";
import ProductTable from "@/components/MerchantTools/product/ProductTable";
import { MerchantContext } from "@/components/providers/MerchantProvider";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";

import { Stack, Typography } from "@mui/material";
import { useContext } from "react";

export default function Product() {
  const { isAddProduct, setIsAddProduct } = useContext(MerchantContext);
  return (
    <Stack className="bg-[#F7F7F8] h-screen w-[1215px]">
      {isAddProduct && (
        <Stack direction="row" className="h-[56px] gap-5 items-center">
          <Stack
            onClick={() => {
              setIsAddProduct(false);
            }}
            sx={{ cursor: "pointer" }}
          >
            <ArrowBackIosNewIcon />
          </Stack>
          <Typography>Бүтээгдэхүүн нэмэх</Typography>
        </Stack>
      )}
      <Stack className="bg-[#F7F7F8] h-screen w-[1215px] pt-2 px-6">
        {!isAddProduct && <ProductHead />}
        {isAddProduct && <AddProduct />}
        {!isAddProduct && <ProductTable />}
      </Stack>
    </Stack>
  );
}
