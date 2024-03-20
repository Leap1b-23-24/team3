"use client";
import {
  Button,
  Card,
  FormControl,
  MenuItem,
  Select,
  Stack,
  Typography,
} from "@mui/material";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import ClearIcon from "@mui/icons-material/Clear";
import Card1 from "./Card1";
import Card2 from "./Card2";
import { useState } from "react";
export default function OrderDetial() {
  const [isInput, setIsInput] = useState(0);
  return (
    <Stack className="bg-[#F7F7F8] h-screen">
      <Button className="bg-white h-[56px] items-center justify-start gap-7 ">
        <ArrowBackIosNewIcon />
        <Typography>Захиалгын дэлгэрэнгүй</Typography>
      </Button>
      <Stack direction="row" className="m-7 gap-8 justify-center">
        <Card className=" p-7 w-[627px]">
          <Stack direction="row">
            <Stack direction="row" className="justify-between w-full mb-5">
              <Stack>
                <Typography>Захиалгын ID дугаар: </Typography>
                <Typography fontSize="16px" fontWeight="600">
                  2072705735829
                </Typography>
              </Stack>
              <FormControl sx={{ minWidth: 120, backgroundColor: "white" }}>
                <Select
                  displayEmpty
                  sx={{ height: "36px", borderRadius: "16px" }}
                  style={{
                    backgroundColor:
                      isInput === 2
                        ? "#c8e6c9"
                        : "null"
                        ? isInput === 3
                          ? "#b3e5fc"
                          : "null"
                          ? isInput === 4
                            ? "#eeeeee"
                            : "null"
                            ? isInput === 5
                              ? "#ef9a9a"
                              : "white"
                            : ""
                          : ""
                        : "",
                  }}
                  onChange={(e: any) => {
                    setIsInput(e.target.value);
                    console.log(e.target.value);
                  }}
                >
                  <MenuItem>
                    <Stack direction="row" className="items-center gap-2">
                      <Typography>Шинэ захиалга</Typography>
                      <ClearIcon sx={{ width: "15px", height: "15px" }} />
                    </Stack>
                  </MenuItem>
                  <MenuItem value={2}>
                    <Typography className="flex rounded-xl p-1 text-[#0A4E22] bg-[#c8e6c9] w-full">
                      Хүргэгдсэн
                    </Typography>
                  </MenuItem>
                  <MenuItem value={3}>
                    <Typography className="flex rounded-xl p-1 text-[#1890FF] bg-[#b3e5fc]">
                      Хүргэлтэнд гарсан
                    </Typography>
                  </MenuItem>
                  <MenuItem value={4}>
                    <Typography className="flex p-1 rounded-xl bg-[#eeeeee]">
                      Бэлтгэгдэж байна
                    </Typography>
                  </MenuItem>
                  <MenuItem value={5}>
                    <Typography className="flex p-1 rounded-xl bg-[#ef9a9a]">
                      Цуцлагдсан
                    </Typography>
                  </MenuItem>
                </Select>
              </FormControl>
              {/* <Button className="bg-[#F7F7F8] rounded-[30px] flex gap-2">
                <Typography>Бэлтгэгдэж байна</Typography>
                <ExpandMoreIcon />
              </Button> */}
            </Stack>
          </Stack>
          <Stack className="mb-5">
            <Typography>Захиалагч: Хувь хүн </Typography>
            <Typography fontSize="16px" fontWeight="600">
              Zoloosoko0526@gmail.com, 88556061
            </Typography>
          </Stack>
          <Card className="flex bg-[#F7F7F8]">
            <img width="180px" src="Image.png" />
            <Stack className="w-full p-5">
              <Typography fontSize="24px" fontWeight="700">
                WOMEN'S HORSEBIT MULE
              </Typography>
              <Stack>
                <Typography>2024-01-20</Typography>
                <Typography>Бүтээгдэхүүний ID: 30349049903</Typography>
              </Stack>
              <Stack direction="row" className="justify-between">
                <Typography fontSize="16px" fontWeight="500">
                  Тоо ширхэг: 3
                </Typography>
                <Typography fontSize="18pxs" fontWeight="600">
                  ₮677,100
                </Typography>
              </Stack>
            </Stack>
          </Card>
        </Card>
        <Stack className="gap-7 ">
          <Card1 />
          <Card2 />
        </Stack>
      </Stack>
    </Stack>
  );
}
