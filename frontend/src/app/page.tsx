"use client";
import { Footer, Header } from "@/components";
import { Button, Stack, Typography } from "@mui/material";

export default function Home() {
  return (
    <>
      <Header />
      <Stack className="bg-[#F2F0FF] h-[764px] w-full">
        <Stack
          flexDirection="row"
          className="max-w-[1240px] m-auto items-center"
        >
          <>
            <p className="text-base text-[#FB2E86]">
              Тав тухтай орчинг таны амьдралд
            </p>
            <p className="text-[53px] font-extrabold">
              2024 оны хамгийн шинэ загвар
            </p>
            <p className="text-[#8A8FB9] text-base">
              Швед улсын хамгийн шилдэг брэндийг албан ёсны эрхтэйгээр оруулж
              ирж байна
            </p>
            <Button className="bg-[#FB2E86] w-[163px] h-[50px] hover:bg-[#e0196f] text-white text-base">
              Дэлгэрэнгүй
            </Button>
          </>
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
