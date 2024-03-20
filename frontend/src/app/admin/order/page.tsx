"use client";
import OrderTable from "@/components/AdminTools/order/OrderTable";
import { Stack } from "@mui/material";

export default function Order() {
  return (
    <Stack className="max-w-[1220px]">
      <OrderTable />
    </Stack>
  );
}
