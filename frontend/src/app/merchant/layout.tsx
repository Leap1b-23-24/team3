"use client";
import AdminHeader from "@/components/MerchantTools/MerchantHeader";
import MerchantProvider from "@/components/providers/MerchantProvider";
import { Stack } from "@mui/material";
import { PropsWithChildren } from "react";

export default function DashboardRootLayout({ children }: PropsWithChildren) {
  return (
    <>
      <Stack height="100vh">
        <AdminHeader />
        <Stack direction="row" className="m-auto max-w-[1440px] w-full">
          <MerchantProvider>{children}</MerchantProvider>
        </Stack>
      </Stack>
    </>
  );
}
