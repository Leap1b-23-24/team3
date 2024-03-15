"use client";
import { api } from "@/common";
import {
  Dispatch,
  PropsWithChildren,
  SetStateAction,
  createContext,
  useContext,
  useState,
} from "react";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { toastError, toastSuccess } from "../toastClient";

type checkUserParams = {
  email: string;
};
type AuthContextType = {
  checkUser: (params: checkUserParams) => Promise<void>;
  checkShopName: (shopName: any) => Promise<void>;
  index: number;
  setIndex: Dispatch<SetStateAction<number>>;
  nextBtn: () => void;
};
export const AuthContext = createContext<AuthContextType>(
  {} as AuthContextType
);

export const AuthProvider = ({ children }: PropsWithChildren) => {
  const [index, setIndex] = useState(0);

  function nextBtn() {
    if (index === 3) {
      setIndex(3);
    } else {
      setIndex((prev) => prev + 1);
    }
  }

  const checkUser = async (params: checkUserParams) => {
    try {
      const { data } = await api.post("/account/email", params);
      toastSuccess(data);
      nextBtn();
    } catch (error: any) {
      toastError(error);
    }
  };

  const checkShopName = async (shopName: any) => {
    try {
      const { data } = await api.post("/account/email", shopName);
      toast.success(data.message, {
        position: "top-center",
        autoClose: 3000,
        hideProgressBar: true,
      });
      nextBtn();
      setIndex((prev) => prev + 1);
    } catch (error: any) {
      toast.error(error.response.data.message, {
        position: "top-center",
        autoClose: 3000,
        hideProgressBar: true,
      });
    }
  };

  return (
    <AuthContext.Provider
      value={{ checkUser, index, setIndex, checkShopName, nextBtn }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const Auth = () => {
  return useContext(AuthContext);
};
