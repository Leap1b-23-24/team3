'use client'
import Dashboard from "@/components/AdminDashboardTools/Dashboard";
import Income from "@/components/AdminDashboardTools/Income";
import Order from "@/components/AdminDashboardTools/Order";
import { AdminContext } from "@/components/providers/AdminProvider";
import { Stack } from "@mui/material";
import { useContext } from "react";

export default function DashboardHomePage() {
  const {selectNavbar}=useContext(AdminContext)

  return <Stack className="bg-[#F7F7F8] h-screen w-full py-8 px-6">
    {selectNavbar==="Хяналтын самбар" &&  <Dashboard/> }
    {selectNavbar==="Захиалга" && <Order/>}
    {selectNavbar==="Орлого" && <Income/>}
  </Stack>;
}
