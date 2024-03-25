"use client";

import { Stack, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import FeaturedProductSingleCard from "./FeaturedProductSingleCard";
import { Client } from "../providers/ClientProvider";

export default function FeaturedProducts() {
  const { allProducts } = Client();
  const [step, setStep] = useState(0);
  const [pause, setPause] = useState(false);

  useEffect(() => {
    if (pause) return;

    const id = setTimeout(() => {
      setStep((prev) => (prev + 1) % 4);
    }, 2500);

    return () => {
      clearTimeout(id);
    };
  }, [step, pause]);

  return (
    <Stack maxWidth="1240px" m="auto" mt="130px" overflow="hidden">
      <Typography className="text-[#1A0B5B] text-[42px] font-extrabold font-sans text-center mb-10">
        Онцлох бүтээгдэхүүн
      </Typography>
      <Stack
        direction="row"
        className="justify-around w-[400%] "
        sx={{
          translate: `${step * -25}%`,
          transitionDuration: "1s",
        }}
      >
        {allProducts
          .filter((item, itemlength) => itemlength <= 16)
          .map((item: any, index: any) => {
            return (
              <Stack key={index}>
                <FeaturedProductSingleCard
                  setPause={setPause}
                  name={item.productName}
                  price={item.price}
                  image={item.thumbnail}
                />
              </Stack>
            );
          })}
      </Stack>
    </Stack>
  );
}
