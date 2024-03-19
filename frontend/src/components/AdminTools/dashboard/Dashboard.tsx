"use client";
import { Stack } from "@mui/material";
import DashboardTable from "./DashBoardTable";
import { DashboardHead } from "@/components/DashboardHead";

export default function Dashboard() {
  return (
    <Stack>
      <DashboardHead />
      <DashboardTable />
    </Stack>
  );
}
