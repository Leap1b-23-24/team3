"use client";

import { api } from "@/common";
import {
  PropsWithChildren,
  createContext,
  useContext,
  useEffect,
  useState,
} from "react";
import { toastError, toastSuccess } from "../toastClient";

type ClientContextType = {
  getallProducts: () => Promise<void>;
  allProducts: never[];
};

export const ClientContext = createContext<ClientContextType>(
  {} as ClientContextType
);
export const ClientProvider = ({ children }: PropsWithChildren) => {
  const [allProducts, setAllProducts] = useState([]);
  const [refresh, setRefresh] = useState(0);

  const getallProducts = async () => {
    try {
      const { data } = await api.get("/product/");
      setAllProducts(data);
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
    <ClientContext.Provider value={{ getallProducts, allProducts }}>
      {children}
    </ClientContext.Provider>
  );
};

export const Client = () => {
  return useContext(ClientContext);
};
