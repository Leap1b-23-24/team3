"use client";
import { Stack } from "@mui/material";
import { Dispatch, SetStateAction, useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { Client } from "@/components/providers/ClientProvider";
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


const detailId = localStorage.getItem("detailId");
export default function ProductDetail(props: any) {
  const { allProducts, id, refresh } = Client();
  const [allComments, setAllComments] = useState<CommentType[]>([]);
  const router = useRouter();
  const selectedProduct = allProducts.find(
    (product) => product._id == id
  );
  console.log(selectedProduct)
  // const getAllComments = async () => {
  //   try {
  //     const { data } = await api.get("comment/getAllComments");
  //     setAllComments(data);
  //   } catch (error) {
  //     console.log(error), "FFF";
  //   }
  // };
  // const selectedProductComments = allComments.filter(
  //   (comment) => comment.productId == detailId
  // );

  // useEffect(() => {
  //   getAllComments();
  // }, [refresh]);
  if (!detailId) {
    router.push("/");
  }
  return (
    <Stack>
      <ProductDetail
        id={selectedProduct?._id}
        productImage={selectedProduct?.images}
        productName={selectedProduct?.productName}
        price={selectedProduct?.price}
        // productAdditional={selectedProduct?.productAdditional}
        // productColor={selectedProduct?.productColor}
        // productRating={selectedProduct?.avgStars}
        // reviewCount={selectedProduct?.reviewCount}
        // comments={selectedProductComments}
      />
    </Stack>
  );
}
