"use client";

import { Stack } from "@mui/material";
import Dashboard from "./dashboard/page";

export default function DashboardHomePage() {
  return (
    <Stack>
      <Stack className="bg-[#F7F7F8] h-screen w-[1240px] py-8 px-6">
        <Dashboard />
      </Stack>
    </Stack>
  );
}
