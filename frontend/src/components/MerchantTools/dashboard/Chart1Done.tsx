"use client";

import { Stack, Typography } from "@mui/material";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import { ChartFirst } from "./Chart1";

export const Chart1Done = () => {
  return (
    <>
      <Stack gap={3} className="min-w-[565px] p-4 bg-white h-[50%] rounded-xl">
        <Stack
          direction={"row"}
          justifyContent={"space-between"}
          alignItems={"center"}
        >
          <Typography fontWeight={600} fontSize={"18px"}>
            Борлуулалт
          </Typography>
          <ChevronRightIcon />
        </Stack>
        <ChartFirst />
      </Stack>
    </>
  );
};
