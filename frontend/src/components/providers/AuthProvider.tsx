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
import { toastError, toastSuccess } from "../toastClient";
import { useRouter } from "next/navigation";
import { backend } from "@/common";
import {
  Dispatch,
  PropsWithChildren,
  SetStateAction,
  createContext,
  useContext,
  useState,
} from "react";

type AuthContextType = {
  creatProduct: (type: creatProductType) => Promise<void>;
  allSize: boolean;
  setAllsSize: Dispatch<SetStateAction<boolean>>;
  imageUrl: null;
  setImageUrl: Dispatch<SetStateAction<null>>;
  selectedFile: File | null;
  setSelectedFile: Dispatch<SetStateAction<File | null>>;
};

type creatProductType = {
  productName: string;
  description: string;
  price: number;
  thumbnail: string;
  discount: number;
  qty: number;
  images: {
    imageLink: string;
  }[];
  category: string;
  subCategory: string;
  color: {
    colorName: string;
    colorCode: string;
  }[];
  size: {
    sizeType: string;
  }[];
  tags: {
    tagsName: string;
  }[];
};

type checkUserParams = {
  email: string;
};
type AuthContextType = {
  index: string;
  setIndex: Dispatch<SetStateAction<string>>;
  checkUser: (params: checkUserParams) => Promise<void>;
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

  const checkUser = async (params: checkUserParams) => {
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
    } catch (error: any) {
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
      router.push("/dashboard");
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
      }}
    >
  const [product, setProduct] = useState();
  const [allSize, setAllsSize] = useState(false);
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [imageUrl, setImageUrl] = useState(null);
  const creatProduct = async (type: creatProductType) => {
    try {
      const { data } = await backend.post("/product/create", type);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <AuthContext.Provider
      value={{
        creatProduct,
        allSize,
        setAllsSize,
        imageUrl,
        setImageUrl,
        selectedFile,
        setSelectedFile,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const Auth = () => {
  return useContext(AuthContext);
};
