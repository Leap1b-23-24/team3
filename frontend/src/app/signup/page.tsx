"use client";
import SignUp from "@/components/Signup_parts/Signup";
import Step1 from "@/components/Signup_parts/Step1";
import Step2 from "@/components/Signup_parts/Step2";
import Step3 from "@/components/Signup_parts/Step3";
import { Stack, Typography } from "@mui/material";
import Image from "next/image";
import { useState } from "react";

export default function () {
  const [index, setIndex] = useState(0);
  console.log(index);

  function Next() {
    if (index === 0) {
      return <SignUp />;
    } else if (index === 1) {
      return <Step1 />;
    } else if (index === 2) {
      return <Step2 />;
    } else if (index === 3) {
      return <Step3 />;
    }
  }
  return (
    <Stack className="p-11">
      <Image
        src="/PineconeLogo.svg"
        alt="pinecone"
        width={193}
        height={32}
        className=" mb-14"
      />
      {index >= 0 && (
        <Stack className="max-w-[792px] w-full bg-red-300 m-auto mb-[120px] ">
          <Stack
            direction="row"
            className="max-w-[656px] w-full m-auto relative justify-between"
          >
            <Stack className="w-9 h-9 bg-black rounded-full items-center justify-center text-white ">
              1
            </Stack>
            <Stack className="w-9 h-9 bg-black rounded-full items-center justify-center text-white ">
              2
            </Stack>
            <Stack className="w-9 h-9 bg-black rounded-full items-center justify-center text-white ">
              3
            </Stack>
            <Stack className="w-[656px] h-1 bg-slate-300 absolute top-[50%] "></Stack>
          </Stack>
          <Stack
            direction="row"
            className="w-full m-auto relative justify-between text-base font-semibold"
          >
            <Typography>Дэлгүүрийн нэр</Typography>
            <Typography>Бүс нутаг</Typography>
            <Typography></Typography>
          </Stack>
        </Stack>
      )}

      {index === 0 && <SignUp Next={Next} setIndex={setIndex} />}
      {index === 1 && <Step1 Next={Next} setIndex={setIndex} />}
      {index === 2 && <Step2 Next={Next} setIndex={setIndex} />}
      {index === 3 && <Step3 Next={Next} setIndex={setIndex} />}
    </Stack>
  );
}
