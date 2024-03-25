"use client";
import { Footer, Header } from "@/components";
import FeaturedProducts from "@/components/ClientTools/FeaturedProducts";
import { Button, Stack, Typography } from "@mui/material";

export default function Home() {
  return (
    <>
      <Header />
      <Stack className="bg-[#F2F0FF] h-[764px] w-full">
        <Stack
          direction="row"
          className="max-w-[1240px] m-auto items-center justify-between w-full"
        >
          <Stack>
            <p className="text-base text-[#FB2E86]">
              Тав тухтай орчинг таны амьдралд
            </p>
            <Typography className="w-[650px] text-[53px] leading-[63px] font-extrabold mb-6 mt-3 font-sans">
              2024 оны хамгийн шинэ загвар
            </Typography>
            <p className="text-[#8A8FB9] text-base mb-7 max-w-[385px] w-full">
              Швед улсын хамгийн шилдэг брэндийг албан ёсны эрхтэйгээр оруулж
              ирж байна
            </p>
            <Button className="bg-[#FB2E86] w-[163px] h-[50px] hover:bg-[#e0196f] text-white text-base">
              Дэлгэрэнгүй
            </Button>
          </Stack>
          <Stack className=" max-w-[605px] max-h-[590px] relative">
            <Stack className="w-[550px] h-[550px] bg-[#ECD2FA59] rounded-full absolute top-0 left-0" />
            <Stack className="w-[550px] h-[550px] bg-[#ECD2FA59] rounded-full absolute bottom-0 right-0" />
            <img src="/pinkarmchair.png" className="z-10 mt-14 w-[530px]" />
            <Stack
              alignItems="center"
              justifyContent="center"
              className="top-8 right-0 absolute w-[116px] z-10 h-[118px]"
            >
              <Typography className="z-10 font-bold text-[35px] mt-4 text-white">
                50%
              </Typography>
              <img src="/percent.svg" className="w-[116px] absolute " />
            </Stack>
          </Stack>
        </Stack>
      </Stack>
      <FeaturedProducts />
      <Stack maxWidth="1240px" m="auto"></Stack>
      <Footer />
    </>
  );
}
