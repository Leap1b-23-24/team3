"use client";
import { Footer } from "@/components";
import { Stack, Typography } from "@mui/material";

export default function Home() {
  return (
    <>
      <Stack className="bg-[#F2F0FF] h-[764px] w-full">
        <Stack className="max-w-[1240px] m-auto">
          <Stack className=" w-[705px]  h-[689px] max-h-[690px] relative">
            <Stack className="w-[650px] h-[650px] bg-[#ECD2FA59] rounded-full absolute  top-0 right-0" />
            <Stack className="w-[650px] h-[650px] bg-[#ECD2FA59] rounded-full absolute bottom-0 left-0" />
            <img src="/pinkarmchair.png" className="z-10" />
            <Stack
              alignItems="center"
              justifyContent="center"
              className="top-8 right-2 absolute w-[136px] z-10 h-[138px]"
            >
              <Typography className="z-10 font-bold text-[35px] mt-4 text-white">
                50%
              </Typography>
              <img src="/percent.svg" className="w-[136px] absolute " />
            </Stack>
          </Stack>
        </Stack>
      </Stack>
      <Stack maxWidth="1240px" m="auto"></Stack>
      <Footer />
    </>
  );
}
