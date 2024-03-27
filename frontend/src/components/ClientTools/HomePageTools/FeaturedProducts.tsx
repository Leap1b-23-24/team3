"use client";

import { Stack, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import FeaturedProductSingleCard from "./FeaturedProductSingleCard";
import { Client } from "../../providers/ClientProvider";

export default function FeaturedProducts() {
  const { allProducts } = Client();
  const [step, setStep] = useState(0);
  const [pause, setPause] = useState(false);
  const data = [0, 1, 2, 3];

  useEffect(() => {
    if (pause) return;

    const id = setTimeout(() => {
      setStep((prev) => (prev + 1) % 4);
    }, 4500);

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
          transitionDuration: step === 0 ? "0s" : "0.6s",
        }}
      >
        {allProducts
          .filter((item, itemlength) => itemlength <= 15)
          .map((item: any, index: any) => {
            return (
              <Stack key={index}>
                <FeaturedProductSingleCard
                  setPause={setPause}
                  name={item.productName}
                  price={item.price}
                  image={item.images[0]}
                  productId={item._id}
                />
              </Stack>
            );
          })}
      </Stack>
      <Stack direction="row" gap="7px" m="auto">
        {data.map((item, index) => {
          return (
            <Stack
              onClick={() => {
                setStep(index);
              }}
              key={index}
              sx={{
                height: "4px",
                borderRadius: "10px",
                width: step == item ? "24px" : "16px",
                bgcolor: step == item ? "#FB2E86" : "#FEBAD7",
              }}
            ></Stack>
          );
        })}
      </Stack>
    </Stack>
  );
}
