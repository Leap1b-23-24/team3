"use client";
import { Stack } from "@mui/material";
import DashboardTable from "./DashBoardTable";

export default function Dashboard() {
  return (
    <Stack className="max-w-[1220px]">
      <DashboardTable />
    </Stack>
  );
}
