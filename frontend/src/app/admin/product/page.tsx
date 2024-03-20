"use client";
import AddProduct from "@/components/AdminTools/product/AddProduct";
import ProductHead from "@/components/AdminTools/product/ProductHead";
import ProductTable from "@/components/AdminTools/product/ProductTable";
import { AdminContext } from "@/components/providers/AdminProvider";
import { Stack } from "@mui/material";
import { useContext } from "react";

export default function Product() {
  const { isAddProduct } = useContext(AdminContext);
  return (
    <Stack className="max-w-[1220px]">
      {!isAddProduct && <ProductHead />}
      {isAddProduct && <AddProduct />}
      <ProductTable />
    </Stack>
  );
}
