"use client";

import { Button, Stack, Typography } from "@mui/material";

const data = ["/pinkarmchair.png", "", ""];
export default function BigBanner() {
  return (
    <Stack className="bg-[#F2F0FF] h-[764px] w-full">
      <Stack
        direction="row"
        className="m-auto w-[1240px] items-center justify-between"
      >
        <Stack>
          <Typography className="text-base text-[#FB2E86]">
            Тав тухтай орчинг таны амьдралд
          </Typography>
          <Typography
            sx={{ fontSize: "53px", lineHeight: "63px" }}
            className="w-[650px] font-extrabold mb-6 mt-3 font-sans"
          >
            2024 оны хамгийн шинэ загвар
          </Typography>
          <Typography className="text-[#8A8FB9] text-base mb-7 max-w-[385px] w-full">
            Швед улсын хамгийн шилдэг брэндийг албан ёсны эрхтэйгээр оруулж ирж
            байна
          </Typography>
          <Button className="bg-[#FB2E86] w-[163px] h-[50px] hover:bg-[#e0196f] text-white text-base">
            Дэлгэрэнгүй
          </Button>
        </Stack>
        <Stack className=" max-w-[605px] max-h-[590px] relative">
          <Stack className="w-[550px] h-[550px] bg-[#ECD2FA59] rounded-full absolute top-0 left-0" />
          <Stack className="w-[550px] h-[550px] bg-[#ECD2FA59] rounded-full absolute bottom-0 right-0" />

          <Stack>
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
      <Stack direction="row" gap={2} m="auto">
        {data.map((item, index) => {
          return (
            <Stack
              onClick={() => {}}
              key={index}
              sx={{
                height: "10px",
                width: "10px",
                bgcolor: index == 0 ? "#FB2E86" : "#FEBAD7",
              }}
              className="rotate-45"
            ></Stack>
          );
        })}
      </Stack>
    </Stack>
  );
}
