"use client";
import { Button, Stack, Typography } from "@mui/material";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
export default function AddModel() {
  return (
    <Stack className="items-center w-[503px] gap-7">
      <img width="60px" height="60px" src="Featured Icon.png" />
      <Typography>Бүтээгдэхүүн амжилттай нэмэгдлээ.</Typography>
      <Button variant="contained" className="flex bg-black p-4 rounded-xl">
        <Typography>Тохиргоог үргэлжлүүлэх</Typography>
        <ArrowForwardIcon />
      </Button>
    </Stack>
  );
}
