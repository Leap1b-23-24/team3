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
    <Stack className="bg-[#F7F7F8] h-screen w-[1215px] py-8 px-6">
      {!isAddProduct && <ProductHead />}
      {isAddProduct && <AddProduct />}
      <ProductTable />
    </Stack>
  );
}
