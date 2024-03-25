"use client";

import {
  Dispatch,
  PropsWithChildren,
  SetStateAction,
  createContext,
  useContext,
  useState,
} from "react";
import { toastError, toastSuccess } from "../toastClient";
import { useRouter } from "next/navigation";

import { api } from "@/common";
type AuthContextType = {
  index: string;
  checkUser: (params: CheckUserParams) => Promise<void>;
  setIndex: Dispatch<SetStateAction<string>>;
  checkShopName: (shopName: any) => Promise<void>;
  setEmail: Dispatch<SetStateAction<string>>;
  setName: Dispatch<SetStateAction<string>>;
  setPassword: Dispatch<SetStateAction<string>>;
  setShopName: Dispatch<SetStateAction<string>>;
  setCity: Dispatch<SetStateAction<string>>;
  setDistrict: Dispatch<SetStateAction<string>>;
  setKhoroo: Dispatch<SetStateAction<string>>;
  setQuestion1: Dispatch<SetStateAction<string>>;
  setQuestion2: Dispatch<SetStateAction<string>>;
  signUp: () => Promise<void>;
  productModal: boolean;
  setProductModal: Dispatch<SetStateAction<boolean>>;
};
type CheckUserParams = {
  email: string;
};

export const AuthContext = createContext<AuthContextType>(
  {} as AuthContextType
);
export const AuthProvider = ({ children }: PropsWithChildren) => {
  const router = useRouter();
  const [index, setIndex] = useState("signup");
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [shopName, setShopName] = useState("");
  const [city, setCity] = useState("");
  const [district, setDistrict] = useState("");
  const [sect, setKhoroo] = useState("");
  const [experience, setQuestion1] = useState("");
  const [productType, setQuestion2] = useState("");
  const [productModal, setProductModal] = useState(false);

  const checkUser = async (params: CheckUserParams) => {
    try {
      const { data } = await api.post("/account/email", params);
      toastSuccess(data);
      setIndex("step1");
    } catch (error) {
      toastError(error);
    }
  };

  const checkShopName = async (shopName: any) => {
    try {
      const { data } = await api.post("/account/shop", shopName);
      toastSuccess(data);
      setIndex("step2");
    } catch (error) {
      toastError(error);
    }
  };

  const signUp = async () => {
    try {
      const { data } = await api.post("/signup", {
        email,
        name,
        password,
        shopName,
        city,
        district,
        sect,
        experience,
        productType,
      });
      toastSuccess(data);
      router.push("/admin");
    } catch (error) {
      toastError(error);
    }
  };
  return (
    <AuthContext.Provider
      value={{
        checkUser,
        index,
        setIndex,
        setEmail,
        setName,
        setPassword,
        checkShopName,
        setShopName,
        setCity,
        setDistrict,
        setKhoroo,
        setQuestion1,
        setQuestion2,
        signUp,
        productModal,
        setProductModal,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const Auth = () => {
  return useContext(AuthContext);
};
