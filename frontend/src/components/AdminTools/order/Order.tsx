"use client";
import { Stack } from "@mui/material";
import OrderTable from "./OrderTable";

export default function Order() {
  return (
    <Stack className="max-w-[1220px]">
      <OrderTable />
    </Stack>
  );
}
