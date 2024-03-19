"use client";
import Dashboard from "@/components/AdminTools/dashboard/Dashboard";
import Income from "@/components/AdminTools/income/Income";
import Order from "@/components/AdminTools/order/Order";
import Product from "@/components/AdminTools/product/Product";
import { AdminContext } from "@/components/providers/AdminProvider";
import { Stack } from "@mui/material";
import { useContext } from "react";

export default function DashboardHomePage() {
  const { selectNavbar } = useContext(AdminContext);

  return (
    <Stack className="bg-[#F7F7F8] h-screen w-full py-8 px-6">
      {selectNavbar === "Хяналтын самбар" && <Dashboard />}
      {selectNavbar === "Захиалга" && <Order />}
      {selectNavbar === "Орлого" && <Income />}
      {selectNavbar === "Бүтээгдэхүүн" && <Product />}
    </Stack>
  );
}
