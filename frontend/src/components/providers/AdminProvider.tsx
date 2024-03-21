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
import { toastError } from "../toastClient";

type AdminContextType = {
  isAddProduct: boolean;
  setIsAddProduct: Dispatch<SetStateAction<boolean>>;
  AllProduct: any;
};
export const AdminContext = createContext<AdminContextType>(
  {} as AdminContextType
);

export default function AdminProvider({ children }: PropsWithChildren) {
  const [isAddProduct, setIsAddProduct] = useState(false);
  const [AllProduct, setAllProduct] = useState([]);
  useEffect(() => {
    getAllProduct();
  }, []);
  const getAllProduct = async () => {
    try {
      const { data } = await api.get("/order/");
      console.log(data);
      // setAllProduct(data);
    } catch (error) {
      toastError(error);
    }
  };

  return (
    <AdminContext.Provider
      value={{
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
