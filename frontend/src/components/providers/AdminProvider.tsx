"use client";
import {
  Dispatch,
  PropsWithChildren,
  SetStateAction,
  createContext,
  useState,
} from "react";
import DashboardNavbar from "../AdminDashboardTools/DashboardNavbar";

type AdminContextType = {
  selectNavbar: string;
  setSelectNavbar: Dispatch<SetStateAction<string>>;
};
export const AdminContext = createContext<AdminContextType>(
  {} as AdminContextType
);

export default function AdminProvider({ children }: PropsWithChildren) {
  const [selectNavbar, setSelectNavbar] = useState("Хяналтын самбар");

  return (
    <AdminContext.Provider value={{ selectNavbar, setSelectNavbar }}>
      <DashboardNavbar />
      {children}
    </AdminContext.Provider>
  );
}
