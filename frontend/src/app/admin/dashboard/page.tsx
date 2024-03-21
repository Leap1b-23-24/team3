"use client";
import DashboardTable from "@/components/AdminTools/dashboard/DashBoardTable";
import { Stack } from "@mui/material";

export default function Dashboard() {
  return (
    <Stack className="bg-[#F7F7F8] h-screen w-[1215px] py-8 px-6">
      <DashboardTable />
    </Stack>
  );
}
