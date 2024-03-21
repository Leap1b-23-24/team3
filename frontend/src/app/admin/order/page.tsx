"use client";
import OrderTable from "@/components/AdminTools/order/OrderTable";
import { Stack } from "@mui/material";

export default function Order() {
  return (
    <Stack className="bg-[#F7F7F8] h-screen w-[1215px] py-8 px-6">
      <OrderTable />
    </Stack>
  );
}
