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

type signupParams = {
  name: string;
  email: string;
  password: string;
};

type AuthContextType = {
  Signup: (params: signupParams) => Promise<void>;
  index: number;
  setIndex: Dispatch<SetStateAction<number>>;
};
export const AuthContext = createContext<AuthContextType>(
  {} as AuthContextType
);

export const AuthProvider = ({ children }: PropsWithChildren) => {
  const [index, setIndex] = useState(0);

  const Signup = async (params: signupParams) => {
    try {
      const { data } = await api.get("/account/email");
      toast.success(data.message, {
        position: "top-center",
        autoClose: 3000,
        hideProgressBar: true,
      });
    } catch (error: any) {
      toast.error(error.response.data.message, {
        position: "top-center",
        autoClose: 3000,
        hideProgressBar: true,
      });
    }
  };

  return (
    <AuthContext.Provider value={{ Signup, index, setIndex }}>
      {children}
    </AuthContext.Provider>
  );
};

export const Auth = () => {
  return useContext(AuthContext);
};
