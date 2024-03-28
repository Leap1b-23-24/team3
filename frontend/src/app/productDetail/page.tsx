"use client";
import { Stack } from "@mui/material";
import { Client } from "@/components/providers/ClientProvider";
import Details from "../../components/ClientTools/Details";
import { Header } from "@/components/ClientTools/HeaderOfUser";
import { Footer } from "@/components";

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

export default function ProductDetail(props: any) {
  const id = localStorage.getItem("itemId");
  const { allProducts } = Client();
  const products = allProducts.find((product) => product._id == id);
  return (
    <Stack>
      <Header />
      <Details
        id={products?._id}
        image={products?.images}
        name={products?.productName}
        price={products?.price}
        description={products?.description}
      />
      <Footer />
    </Stack>
  );
}
