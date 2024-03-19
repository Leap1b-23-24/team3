"use client";
import AdminHeader from "@/components/AdminTools/AdminHeader";
import AdminProvider from "@/components/providers/AdminProvider";
import { Stack } from "@mui/material";
import { PropsWithChildren } from "react";

export default function DashboardRootLayout({ children }: PropsWithChildren) {
  return (
    <>
      <Stack height="100vh">
        <AdminHeader />
        <Stack direction="row" className="m-auto max-w-[1440px] w-full">
          <AdminProvider>{children}</AdminProvider>
        </Stack>
      </Stack>
    </>
  );
}
