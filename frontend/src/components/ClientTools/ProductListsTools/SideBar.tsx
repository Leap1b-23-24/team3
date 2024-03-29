"use client";
import {
  Checkbox,
  InputAdornment,
  Rating,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import { pink, yellow } from "@mui/material/colors";
import SearchIcon from "@mui/icons-material/Search";

export default function ShopSidebar() {
  const angilal = [
    { title: "Prestashop" },
    { title: "Magento" },
    { title: "Bigcommerce" },
    { title: "osCommerce" },
    { title: "3dcart" },
    { title: "Bags" },
    { title: "Watches" },
  ];
  const une = [
    { price: "$0.00 - $150.00" },
    { price: "$150.00 - $350.00" },
    { price: "$150.00 - $504.00" },
    { price: "$450.00 +" },
  ];
  const unelgee = [
    { text: "(2341)" },
    { text: "(1726)" },
    { text: "(258)" },
    { text: "(25)" },
  ];
  return (
    <Stack>
      <Stack className="gap-[48px]">
        <Stack className="gap-[10px]">
          <Typography
            fontSize="20px"
            fontWeight="800"
            color="#151875"
            borderBottom={1}
            className="w-fit"
          >
            Үнэлгээ
          </Typography>
          {unelgee.map((item, index) => {
            return (
              <Stack
                direction="row"
                className="gap-2 mb-4 items-center"
                key={index}
              >
                <Checkbox
                  sx={{
                    bgcolor: "#FFF6DA",
                    width: "16px",
                    height: "16px",
                    color: "#FFF6DA",
                    "&.Mui-checked": {
                      color: yellow[600],
                    },
                  }}
                />
                <Rating
                  name="simple-controlled"
                  // onChange={(event, newValue) => {
                  //   setValue(newValue);
                  // }}
                />
                <Typography>{item.text}</Typography>
              </Stack>
            );
          })}
        </Stack>
        <Stack gap="10px">
          <Typography
            fontSize="20px"
            fontWeight="800"
            color="#151875"
            borderBottom={1}
            className="w-fit"
          >
            Ангилал
          </Typography>
          {angilal.map((item, index) => {
            return (
              <Stack direction="row" className="gap-2" key={index}>
                <Checkbox
                  sx={{
                    bgcolor: "#FFDBF1",
                    width: "16px",
                    height: "16px",
                    color: "#FFDBF1",
                    "&.Mui-checked": {
                      color: pink[600],
                    },
                  }}
                />
                <Typography fontSize="16px" fontWeight="400" color="#7E81A2">
                  {item.title}
                </Typography>
              </Stack>
            );
          })}
        </Stack>
        <Stack className="gap-[10px]">
          <Typography
            fontSize="20px"
            fontWeight="800"
            color="#151875"
            borderBottom={1}
            className="w-fit"
          >
            Үнэ
          </Typography>
          {une.map((item, index) => {
            return (
              <Stack direction="row" className="gap-2 mb-4" key={index}>
                <Checkbox
                  sx={{
                    bgcolor: "#FFDBF1",
                    width: "16px",
                    height: "16px",
                    color: "#FFDBF1",
                    "&.Mui-checked": {
                      color: pink[600],
                    },
                  }}
                />
                <Typography fontSize="16px" fontWeight="400" color="#7E81A2">
                  {item.price}
                </Typography>
              </Stack>
            );
          })}
          <TextField
            placeholder="$10.00 - 20000$"
            InputProps={{
              sx: {
                width: "203px",
                height: "31px",
                p: "0px",
              },
              endAdornment: (
                <InputAdornment position="end">
                  <SearchIcon
                    sx={{
                      height: "16px",
                      width: "16px",
                    }}
                  />
                </InputAdornment>
              ),
            }}
            type="search"
          />
        </Stack>
      </Stack>
    </Stack>
  );
}
