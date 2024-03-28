"use client";

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
import { useRouter } from "next/navigation";
import { api } from "@/common";
import { AppRouterInstance } from "next/dist/shared/lib/app-router-context.shared-runtime";
import { useFormik } from "formik";
import { Client } from "./ClientProvider";
import OrderDetial from "../MerchantTools/order/OrderDetial";
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
  signUpShop: (params: SignupParams) => Promise<void>;
  router: AppRouterInstance;
  login: (type: loginType) => Promise<void>;
  isLoggedIn: boolean;
  userInfo: any;
  createOrder: (
    customerEmail: string | any,
    customerName: string | any,
    customerPhone: string | any,
    deliveryAddress: string | any,
    customerCity: string | any,
    orderTotalPrice: number | any
  ) => Promise<void>;
};
type CheckUserParams = {
  email: string;
};
type SignupParams = {
  email: string;
  password: string;
};
type loginType = {
  email: string;
  password: string;
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
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userInfo, setIsUserInfo] = useState([]);
  const { addToBasket } = Client();

  const signUpShop = async (params: SignupParams) => {
    try {
      const { data } = await api.post("/signup", params);
      toastSuccess(data);
      router.push("/login");
    } catch (error) {
      toastError(error);
    }
  };

  const login = async (params: loginType) => {
    try {
      const { data } = await api.post("/login", params);
      const { token } = data;
      localStorage.setItem("token", token);
      toastSuccess(data);
      setIsLoggedIn(true);
      router.push("/");
    } catch (error) {
      if (error) {
        toastError(error);
      }
    }
  };
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

  const getUserInfo = async () => {
    try {
      const { data } = await api.get("/getUser", {
        headers: { Authorization: localStorage.getItem("token") },
      });
      setIsUserInfo(data);
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
      router.push("/merchant");
    } catch (error) {
      toastError(error);
    }
  };

  const createOrder = async (
    customerEmail: string,
    customerName: string,
    customerPhone: string,
    deliveryAddress: string,
    customerCity: string,
    orderTotalPrice: number
  ) => {
    try {
      const { data } = await api.post(
        "/order/create",
        {
          customerEmail,
          customerName,
          customerPhone,
          deliveryAddress,
          customerCity,
          orderDetails: addToBasket,
          orderTotalPrice,
        },
        { headers: { Authorization: localStorage.getItem("token") } }
      );
      toastSuccess(data);
    } catch (error) {
      toastError(error);
    }
  };

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) {
      setIsLoggedIn(false);
    } else {
      setIsLoggedIn(true);
      getUserInfo();
    }
  }, []);
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
        signUpShop,
        login,
        router,
        isLoggedIn,
        userInfo,
        createOrder,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const Auth = () => {
  return useContext(AuthContext);
};
