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
  refreshProducts: () => void;
};
export const AdminContext = createContext<AdminContextType>(
  {} as AdminContextType
);

export default function MerchantProvider({ children }: PropsWithChildren) {
  const [isAddProduct, setIsAddProduct] = useState(false);
  const [AllProduct, setAllProduct] = useState([]);
  const [refresh, setRefresh] = useState(0);

  const getAllProduct = async () => {
    try {
      const { data } = await api.get("/product/");
      setAllProduct(data);
      toastSuccess(data);
    } catch (error) {
      toastError(error);
    }
  };
  const deleteProduct = async () => {
    try {
      const { data } = await api.get("/product/delete");
      setAllProduct(data);
      toastSuccess(data);
    } catch (error) {
      toastError(error);
    }
  };
  const refreshProducts = () => {
    setRefresh((prev) => 1 - prev);
  };

  useEffect(() => {
    getAllProduct();
  }, [refresh]);

  return (
    <AdminContext.Provider
      value={{
        isAddProduct,
        setIsAddProduct,
        AllProduct,
        refreshProducts,
      }}
    >
      <DashboardNavbar />
      {children}
    </AdminContext.Provider>
  );
}
