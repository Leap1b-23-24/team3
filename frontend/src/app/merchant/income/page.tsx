"use client";
import IncomeHeader from "@/components/MerchantTools/income/IncomeHead";
import IncomeTable from "@/components/MerchantTools/income/IncomeTable";
import { Stack } from "@mui/material";

export default function Income() {
  return (
    <Stack className="bg-[#F7F7F8] h-screen w-[1215px] py-8 px-6">
      <IncomeHeader />
      <IncomeTable />
    </Stack>
  );
}
