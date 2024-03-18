"use client";

import {
  Dispatch,
  PropsWithChildren,
  SetStateAction,
  createContext,
  useContext,
  useState,
  ChangeEvent,
  useEffect,
} from "react";
import { toastError, toastSuccess } from "../toastClient";
import { useRouter } from "next/navigation";
import { AxiosError } from "axios";
import { api } from "@/common";
type AuthContextType = {
  creatProduct: (type: creatProductType) => Promise<void>;
  index: string;
  setIndex: Dispatch<SetStateAction<string>>;
  checkUser: (email: string) => Promise<void>;
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
  handleImageChange: (event: ChangeEvent<HTMLInputElement>) => void;
  handleImageInput: () => Promise<void>;
  imageUrl: string;
  setImageUrl: Dispatch<SetStateAction<string>>;
  selectedFile: File | null;
  setSelectedFile: Dispatch<SetStateAction<File | null>>;
  productModal: boolean;
  setProductModal: Dispatch<SetStateAction<boolean>>;
};
type creatProductType = {
  productName: string;
  description: string;
  price: number;
  thumbnail: string;
  discount: number;
  qty: number;
  // images: {
  //   imageLink: string;
  // }[];
  category: string;
  subCategory: string;
  // color: {
  //   colorName: string;
  //   colorCode: string;
  // }[];
  // size: {
  //   sizeType: string;
  // }[];
  // tags: {
  //   tagsName: string;
  // }[];
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
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [imageUrl, setImageUrl] = useState("");
  const [productModal, setProductModal] = useState(false);
  const handleImageChange = (event: ChangeEvent<HTMLInputElement>) => {
    if (!event.target.files) return;
    setSelectedFile(event.target.files[0]);
  };
  const handleImageInput = async () => {
    if (selectedFile) {
      try {
        const formData = new FormData();
        formData.append("file", selectedFile);
        const response = await fetch(
          "https://api.cloudinary.com/v1_1/dluvjoh6c/upload?upload_preset=iiart9je",
          {
            method: "POST",
            body: formData,
          }
        );
        const data = await response.json();
        setImageUrl(data.secure_url);
      } catch (error) {
        console.error("Image upload error:", error);
      }
    }
  };
  const creatProduct = async (type: creatProductType) => {
    try {
      const { data } = await api.post("/product/create", type);
      console.log(data);
    } catch (error) {
      if (error instanceof AxiosError) {
        console.log(error);
      }
    }
  };
  useEffect(() => {
    handleImageInput();
  }, []);

  const checkUser = async (email: string) => {
    try {
      const { data } = await api.post("/account/email", email);
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
        handleImageChange,
        handleImageInput,
        creatProduct,
        imageUrl,
        setImageUrl,
        selectedFile,
        setSelectedFile,
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
