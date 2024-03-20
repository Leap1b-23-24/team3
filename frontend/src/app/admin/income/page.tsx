"use client";
import IncomeHeader from "@/components/AdminTools/income/IncomeHead";
import IncomeTable from "@/components/AdminTools/income/IncomeTable";
import { Stack } from "@mui/material";

export default function Income() {
  return (
    <Stack className="max-w-[1220px]">
      <IncomeHeader />
      <IncomeTable />
    </Stack>
  );
}
