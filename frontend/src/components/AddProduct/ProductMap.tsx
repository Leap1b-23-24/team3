"use client";
import { Stack, TextField, Typography } from "@mui/material";
import DeleteOutlinedIcon from "@mui/icons-material/DeleteOutlined";
import ModeEditOutlinedIcon from "@mui/icons-material/ModeEditOutlined";
export default function ProductMap() {
  const cardMap = [{}];
  return (
    <Stack>
      {cardMap.map((item, index) => {
        return (
          <Stack key={index} direction="row" className="justify-between">
            <TextField className="w-[100px]" margin="none" type="checkbox" />
            <Stack direction="row" className="w-[100%] justify-between">
              <Stack direction="row" className="w-[15%]">
                <img
                  width="40px"
                  height="40px"
                  className="rounded-full"
                  src=""
                />
                <Stack>
                  <Typography>Laptop цүнх</Typography>
                  <Typography>0001</Typography>
                </Stack>
              </Stack>
              <Stack className="w-[20%]">
                <Typography>Эмэгтэй, цүнх</Typography>
              </Stack>
              <Stack className="w-[15%]">
                <Typography>19,000₮</Typography>
              </Stack>
              <Stack className="w-[15%]">
                <Typography>76</Typography>
              </Stack>
              <Stack className="w-[15%]">
                <Typography>30</Typography>
              </Stack>
              <Stack className="w-[20%]">
                <Typography>2024-01-10</Typography>
              </Stack>
            </Stack>
            <Stack direction="row" className="w-[104px]">
              <DeleteOutlinedIcon />
              <ModeEditOutlinedIcon />
            </Stack>
          </Stack>
        );
      })}
    </Stack>
  );
}
