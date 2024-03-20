"use client";
import { Stack } from "@mui/material";
import IncomeTable from "./IncomeTable";
import IncomeHeader from "@/components/IncomeHead";

export default function Income() {
  return (
    <Stack>
      <IncomeHeader />
      <IncomeTable />
    </Stack>
  );
}
