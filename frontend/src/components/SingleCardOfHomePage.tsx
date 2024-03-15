"use client";
import { Stack, Typography } from "@mui/material";

export const SingleCardOfHomePage = () => {
  return (
    <Stack className="max-w-[235px] max-h-[416px] w-full h-full rounded-xl border border-[#ECEDF0]">
      <img src="/Image.svg" className="rounded-t-xl -mt-[2px]" />
      <Stack className="p-6">
        <Stack className="md:h-[116px]">
          <b className="md:text-xl text-base mb-3">
            Олон төрөл сүлжээс, өнгөтэй
          </b>
          <Typography className="md:text-base text-xs mb-6 mt-3">
            Дугуй захтай цамц
          </Typography>
        </Stack>
        <Stack className="font-extrabold md:text-2xl text-xl text-right ">
          768,000₮
        </Stack>
      </Stack>
    </Stack>
  );
};
