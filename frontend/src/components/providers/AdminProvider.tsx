"use client";
import {
  Dispatch,
  PropsWithChildren,
  SetStateAction,
  createContext,
  useState,
} from "react";
import DashboardNavbar from "../AdminTools/AdminNavbar";

type AdminContextType = {
  selectNavbar: string | null;
  setSelectNavbar: Dispatch<SetStateAction<string | null>>;
};
export const AdminContext = createContext<AdminContextType>(
  {} as AdminContextType
);

export default function AdminProvider({ children }: PropsWithChildren) {
  const savedValue = localStorage.getItem("NavbarIndex");
  const [selectNavbar, setSelectNavbar] = useState<string | null>(savedValue);

  return (
    <AdminContext.Provider value={{ selectNavbar, setSelectNavbar }}>
      <DashboardNavbar />
      {children}
    </AdminContext.Provider>
  );
}
