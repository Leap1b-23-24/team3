"use client";

import { api } from "@/common";
import {
  Dispatch,
  PropsWithChildren,
  SetStateAction,
  createContext,
  useContext,
  useEffect,
  useState,
} from "react";
import { toastError, toastSuccess } from "../toastClient";
type ProductType = {
  productName: string;
  description: string;
  discount: string;
  price: any;
  images: string[];
  qty: number;
  category: string;
  subCategory: string;
};

type ClientContextType = {
  getallProducts: () => Promise<void>;
  allProducts: ProductType[];
  details: string;
  setDetails: Dispatch<SetStateAction<string>>;
};

export const ClientContext = createContext<ClientContextType>(
  {} as ClientContextType
);
export const ClientProvider = ({ children }: PropsWithChildren) => {
  const [allProducts, setAllProducts] = useState([]);
  const [refresh, setRefresh] = useState(0);
  const [details, setDetails] = useState("");

  const getallProducts = async () => {
    try {
      const { data } = await api.get("/product/");
      setAllProducts(data.reverse());
      toastSuccess(data);
    } catch (error) {
      toastError(error);
    }
  };
  const refreshProducts = () => {
    setRefresh((prev) => 1 - prev);
  };

  useEffect(() => {
    getallProducts();
  }, [refresh]);

  return (
    <ClientContext.Provider
      value={{ getallProducts, allProducts, details, setDetails }}
    >
      {children}
    </ClientContext.Provider>
  );
};

export const Client = () => {
  return useContext(ClientContext);
};
