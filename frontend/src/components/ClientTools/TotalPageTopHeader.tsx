"use client";

import { Stack, Typography } from "@mui/material";

export default function TotalPageTopHeader() {
  return (
    <Stack
      direction="row"
      className="h-[100px] bg-[#F6F5FF] px-[378px] items-center"
    >
      <Typography>Home</Typography>
      <Typography color="#FB2E86">. Shop Left Sidebar</Typography>
    </Stack>
  );
}
