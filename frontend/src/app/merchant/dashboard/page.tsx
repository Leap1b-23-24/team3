"use client";

import { Stack } from "@mui/material";
import DashboardTable from "@/components/MerchantTools/dashboard/DashBoardTable";
import Chart2 from "@/components/MerchantTools/dashboard/Chart2";

export default function Dashboard() {
  return (
    <Stack
      direction="row"
      className="bg-[#F7F7F8] h-screen w-[1215px] py-8 px-6"
      gap={3}
    >
      <DashboardTable />
      <Chart2 />
    </Stack>
  );
}
