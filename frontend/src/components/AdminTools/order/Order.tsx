"use client";
import {
  Button,
  FormControl,
  InputAdornment,
  InputLabel,
  MenuItem,
  Select,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import CalendarTodayIcon from "@mui/icons-material/CalendarToday";
import { useState } from "react";
export default function Order() {
  const title = [
    { text: "Бүгд" },
    { text: "Шинэ захиалага" },
    { text: "Бэлтгэгдэж байна" },
    { text: "Хүргэлтэнд гарсан" },
    { text: "Хүргэгдсэн" },
    { text: "Цуцлагдсан" },
  ];
  const [titles, setTitles] = useState(title[0]);
  return (
    <Stack className="bg-[#ECEDF0] h-screen">
      <Stack direction="row" className="border-b-[1px]">
        {title.map((item) => {
          return (
            <Typography
              className="px-[16px] h-[56px] items-center flex"
              onClick={() => {
                setTitles(item);
              }}
              style={{
                fontWeight: item.text === titles.text ? "600" : "400",
                borderBottom:
                  item.text === titles.text ? "2px solid black" : "",
              }}
            >
              {item.text}
            </Typography>
          );
        })}
      </Stack>
      <Stack direction="row" className="p-8 justify-between">
        <Stack direction="row" className="h-[36px] gap-2">
          <Button className="bg-[#18BA51] text-white">Өнөөдөр</Button>
          <Button className="bg-white">7 хоног</Button>
          <FormControl sx={{ minWidth: 120, backgroundColor: "white" }}>
            <Select displayEmpty sx={{ height: "36px" }}>
              <MenuItem>
                <em className="flex gap-2">
                  <CalendarTodayIcon />
                  <Typography>Сараар</Typography>
                </em>
              </MenuItem>
              <MenuItem value={10}>Ten</MenuItem>
              <MenuItem value={20}>Twenty</MenuItem>
              <MenuItem value={30}>Thirty</MenuItem>
            </Select>
          </FormControl>
        </Stack>
        <Stack>
          <TextField
            placeholder="Дугаар, Имэйл"
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <SearchIcon />
                </InputAdornment>
              ),
              style: {
                padding: "0px 5px",
                height: "36px",
                width: "302px",
                backgroundColor: "white",
              },
            }}
          />
        </Stack>
      </Stack>
    </Stack>
  );
}

{
}
