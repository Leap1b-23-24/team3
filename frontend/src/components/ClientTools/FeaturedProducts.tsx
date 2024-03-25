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
    setTimeout(() => {
      if (step < 3) {
        setStep(step + 1);
      } else {
        setStep(0);
      }
    }, 4500);
  }, [step]);
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
              <Stack>
                <FeaturedProductSingleCard />
              </Stack>
            );
          })}
      </Stack>
    </Stack>
  );
}
