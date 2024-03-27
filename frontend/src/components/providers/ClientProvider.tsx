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
  productName?: string;
  description?: string;
  discount?: string;
  price?: any;
  images?: string[];
  qty?: number;
  category?: string;
  subCategory?: string;
};
type ratingAndCommentsType = {
  productId: string;
  star: number;
  comment: string;
};
type ClientContextType = {
  getallProducts: () => Promise<void>;
  allProducts: ProductType[];
  id: string;
  setId: Dispatch<SetStateAction<string>>;
  ratingAndComments: (params: ratingAndCommentsType) => Promise<void>;
  addToBasket: never[];
  setAddToBasket: Dispatch<SetStateAction<never[]>>;
};

export const ClientContext = createContext<ClientContextType>(
  {} as ClientContextType
);
export const ClientProvider = ({ children }: PropsWithChildren) => {
  const [allProducts, setAllProducts] = useState([]);
  const [refresh, setRefresh] = useState(0);
  const [id, setId] = useState("");
  const [addToBasket, setAddToBasket] = useState([]);

  const getallProducts = async () => {
    try {
      const { data } = await api.get("/product/");
      setAllProducts(data.reverse());
      toastSuccess(data);
    } catch (error) {
      toastError(error);
    }
  };

  const ratingAndComments = async (params: ratingAndCommentsType) => {
    try {
      const { data } = await api.post("/#", params);
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
      value={{
        getallProducts,
        allProducts,
        id,
        setId,
        ratingAndComments,
        addToBasket,
        setAddToBasket,
      }}
    >
      {children}
    </ClientContext.Provider>
  );
};

export const Client = () => {
  return useContext(ClientContext);
};
