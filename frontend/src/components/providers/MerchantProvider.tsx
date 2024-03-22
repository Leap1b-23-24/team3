"use client";
import {
  Dispatch,
  PropsWithChildren,
  SetStateAction,
  createContext,
  useEffect,
  useState,
} from "react";
import DashboardNavbar from "../MerchantTools/MerchantNavbar";
import { api } from "@/common";
import { toastError, toastSuccess } from "../toastClient";

type AdminContextType = {
  isAddProduct: boolean;
  setIsAddProduct: Dispatch<SetStateAction<boolean>>;
  AllProduct: any;
};
export const AdminContext = createContext<AdminContextType>(
  {} as AdminContextType
);

export default function MerchantProvider({ children }: PropsWithChildren) {
  const [isAddProduct, setIsAddProduct] = useState(false);
  const [AllProduct, setAllProduct] = useState([]);
  useEffect(() => {
    getAllProduct();
  }, []);
  const getAllProduct = async () => {
    try {
      const { data } = await api.get("/product/");
      setAllProduct(data);
      setIsAddProduct(false);
      toastSuccess(data);
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
