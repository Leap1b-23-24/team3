"use client";
import DashboardTable from "@/components/AdminTools/dashboard/DashBoardTable";
import { Stack } from "@mui/material";

export default function Dashboard() {
  return (
    <Stack className="max-w-[1220px]">
      <DashboardTable />
    </Stack>
  );
}
