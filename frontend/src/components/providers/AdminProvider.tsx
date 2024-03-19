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
  setSelectNavbar: Dispatch<SetStateAction<string>>;
  isAddProduct: boolean;
  setIsAddProduct: Dispatch<SetStateAction<boolean>>;
};
export const AdminContext = createContext<AdminContextType>(
  {} as AdminContextType
);

export default function AdminProvider({ children }: PropsWithChildren) {
  const savedIndex = localStorage.getItem("NavbarIndex");
  const [selectNavbar, setSelectNavbar] = useState(
    savedIndex === null ? "Хяналтын самбар" : savedIndex
  );
  const [isAddProduct, setIsAddProduct] = useState(false);
  return (
    <AdminContext.Provider
      value={{ selectNavbar, setSelectNavbar, isAddProduct, setIsAddProduct }}
    >
      <DashboardNavbar />
      {children}
    </AdminContext.Provider>
  );
}
