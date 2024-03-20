"use client";

import { AdminContext } from "@/components/providers/AdminProvider";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import { Stack, Typography } from "@mui/material";
import { useContext } from "react";
import Dashboard from "./dashboard/page";

export default function DashboardHomePage() {
  const { setIsAddProduct, isAddProduct } = useContext(AdminContext);

  return (
    <Stack>
      {isAddProduct && (
        <Stack direction="row" className="h-[56px] gap-5 bg-white items-center">
          <Stack
            onClick={() => {
              setIsAddProduct(false);
            }}
            sx={{ cursor: "pointer" }}
          >
            <ArrowBackIosNewIcon />
          </Stack>
          <Typography>Бүтээгдэхүүн нэмэх</Typography>
        </Stack>
      )}

      <Stack className="bg-[#F7F7F8] h-screen w-[1240px]  py-8 px-6">
        <Dashboard />
      </Stack>
    </Stack>
  );
}
