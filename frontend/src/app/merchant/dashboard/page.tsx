"use client";

import { Stack } from "@mui/material";
import DashboardTable from "@/components/MerchantTools/dashboard/DashBoardTable";
import Chart2 from "@/components/MerchantTools/dashboard/Chart2";
import { Chart1Done } from "@/components/MerchantTools/dashboard/Chart1Done";
import { DashboardCards } from "@/components/MerchantTools/dashboard/DashboardCards";

export default function Dashboard() {
  return (
    <Stack>
      <DashboardCards />
      <Stack
        direction="row"
        className="bg-[#F7F7F8] h-screen w-[1215px] py-8 px-6"
        gap={3}
      >
        <DashboardTable />
        <Stack gap={3} className="h-[100%]">
          <Chart1Done />
          <Chart2 />
        </Stack>
      </Stack>
    </Stack>
  );
}
