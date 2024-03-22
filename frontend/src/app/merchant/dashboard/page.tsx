"use client";

import { Stack } from "@mui/material";
import DashboardTable from "@/components/MerchantTools/dashboard/DashBoardTable";

export default function Dashboard() {
  return (
    <Stack className="bg-[#F7F7F8] h-screen w-[1215px] py-8 px-6">
      <DashboardTable />
    </Stack>
  );
}
