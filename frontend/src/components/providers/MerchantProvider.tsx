"use client";
import {
  ChangeEvent,
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
import { useRouter } from "next/navigation";
type creatProductParams = {
  productName: string;
  description: string;
  discount: string;
  price: number;
  images: string[];
  qty: number;
  category: string;
  subCategory: string;
};
type MerchantContextType = {
  imageUrl: string[];
  setImageUrl: Dispatch<SetStateAction<string[]>>;
  creatProduct: (type: creatProductParams) => Promise<void>;
  handleImageChange: (event: ChangeEvent<HTMLInputElement>) => void;
  handleImageInput: () => Promise<void>;
  selectedFile: File | null;
  setSelectedFile: Dispatch<SetStateAction<File | null>>;
  isAddProduct: boolean;
  setIsAddProduct: Dispatch<SetStateAction<boolean>>;
  allProducts: any;
  refreshProducts: () => void;
  deleteProduct: (id: any) => Promise<void>;
};
export const MerchantContext = createContext<MerchantContextType>(
  {} as MerchantContextType
);

export default function MerchantProvider({ children }: PropsWithChildren) {
  const router = useRouter();
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [imageUrl, setImageUrl] = useState<string[]>([]);
  const [isAddProduct, setIsAddProduct] = useState(false);
  const [allProducts, setAllProducts] = useState([]);
  const [refresh, setRefresh] = useState(0);

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
        setImageUrl([...imageUrl, data.secure_url]);
      } catch (error) {
        console.error("Image upload error:", error);
      }
    }
  };
  const creatProduct = async (type: creatProductParams) => {
    try {
      const { data } = await api.post("/product/create", type);
      toastSuccess(data);
    } catch (error) {
      if (error) {
        toastError(error);
      }
    }
  };
  useEffect(() => {
    handleImageInput();
  }, []);

  const getallProducts = async () => {
    try {
      const { data } = await api.get("/product/");
      setAllProducts(data);

      toastSuccess(data);
    } catch (error) {
      toastError(error);
    }
  };
  const deleteProduct = async (id: object) => {
    try {
      const { data } = await api.post("/product/delete", { id: id });
      toastSuccess(data);
      refreshProducts();
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
    <MerchantContext.Provider
      value={{
        imageUrl,
        setImageUrl,
        selectedFile,
        setSelectedFile,
        handleImageChange,
        handleImageInput,
        creatProduct,
        isAddProduct,
        setIsAddProduct,
        allProducts,
        refreshProducts,
        deleteProduct,
      }}
    >
      <DashboardNavbar />
      {children}
    </MerchantContext.Provider>
  );
}
