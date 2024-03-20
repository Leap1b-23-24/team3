"use client";
import {
  Dispatch,
  PropsWithChildren,
  SetStateAction,
  createContext,
  useEffect,
  useState,
} from "react";
import DashboardNavbar from "../AdminTools/AdminNavbar";
import { api } from "@/common";
import { toastError, toastSuccess } from "../toastClient";

type AdminContextType = {
  selectNavbar: string | null;
  setSelectNavbar: Dispatch<SetStateAction<string>>;
  isAddProduct: boolean;
  setIsAddProduct: Dispatch<SetStateAction<boolean>>;
  AllProduct: any;
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
  const [AllProduct, setAllProduct] = useState([]);
  useEffect(() => {
    getAllProduct();
  }, []);
  const getAllProduct = async () => {
    try {
      const { data } = await api.get("/product");
      setAllProduct(data);
    } catch (error) {
      toastError(error);
    }
  };

  console.log("gg", AllProduct);

  return (
    <AdminContext.Provider
      value={{
        selectNavbar,
        setSelectNavbar,
        isAddProduct,
        setIsAddProduct,
        AllProduct,
      }}
    >
      <DashboardNavbar />
      {children}
    </AdminContext.Provider>
  );
}
