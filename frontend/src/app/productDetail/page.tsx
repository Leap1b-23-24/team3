"use client";
import { Stack } from "@mui/material";
import { Client } from "@/components/providers/ClientProvider";
import Details from "../../components/ClientTools/Details";
import { Header } from "@/components/ClientTools/HeaderOfUser";
import { Footer } from "@/components";
import { useRouter } from "next/navigation";
import { Dispatch, SetStateAction, useEffect, useState } from "react";
import { api } from "@/common";

type userType = {
  userName: string;
  email: string;
  merchName: string;
  address: { city: string; district: string; khoroo: string };
  experience: string;
  merchType: string;
  password: string;
  role: string;
  createdAt: Date;
  updatedAt: Date;
};
type CommentType = {
  userId: userType;
  productId: string;
  comment: string;
  star: number;
  createdAt: Date;
  updatedAt: Date;
};

type ProductDetailProps = {
  allComments: CommentType[];
  setAllComments: Dispatch<SetStateAction<CommentType[]>>;
};

export default function ProductDetail(props: any) {
  const [allComments, setAllComments] = useState<CommentType[]>([]);
  const router = useRouter();
  const getAllComments = async () => {
    try {
      const { data } = await api.get("comment/getAllComments");
      setAllComments(data);
    } catch (error) {
      console.log(error), "FFF";
    }
  };
  const id = localStorage.getItem("itemId");
  const { allProducts, setRefresh, refresh } = Client();
  const products = allProducts.find((product) => product._id == id);

  useEffect(() => {
    getAllComments();
  }, [refresh]);
  if (!id) {
    router.push("/");
  }
  return (
    <Stack>
      <Header />
      <Details
        id={products?._id}
        image={products?.images}
        name={products?.productName}
        price={products?.price}
        description={products?.description}
        // rating={products?.avgStars}
        // reviewCount={products?.reviewCount}
        // comments={productsComments}
      />
      <Footer />
    </Stack>
  );
}
