"use client";

import { Card, Stack } from "@mui/material";
import Image from "next/image";

export default function FeaturedProductSingleCard() {
  return (
    <Stack
      className="w-[270px] h-[360px] shadow-slate-200 mb-10 shadow-lg"
      onMouseOver={() => {}}
    >
      <Stack className="w-[225px] h-[225px] bg-white mx-auto">
        <Image
          alt="FeturedCard"
          src="/image30.png"
          width={175}
          height={190}
          style={{ margin: "auto" }}
        />
      </Stack>
      <Stack className="mt-5 mb-9 text-center text-lg font-bold text-[#FB2E86]">
        Дан хүрэм пиджак
      </Stack>
      <Stack className=" mb-7 text-center text-lg font-bold text-[#151875]">
        750’000₮
      </Stack>
    </Stack>
  );
}
