"use client";
import { AdminContext } from "@/components/providers/AdminProvider";
import { Stack } from "@mui/material";
import { useContext } from "react";
import ProductHead from "./ProductHead";
import AddProduct from "./AddProduct";

export default function Product() {
  const { isAddProduct } = useContext(AdminContext);
  return (
    <Stack className="max-w-[1220px]">
      {!isAddProduct && <ProductHead />}
      {isAddProduct && <AddProduct />}
    </Stack>
  );
}
