"use client";
import { Button, Stack, TextField, Typography } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import EventOutlinedIcon from "@mui/icons-material/EventOutlined";

import { useContext, useState } from "react";
import { AdminContext } from "@/components/providers/MerchantProvider";
import { DatePicker, LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";

export default function ProductHead() {
  const [isBorder, setIsBorder] = useState(true);
  const { setIsAddProduct } = useContext(AdminContext);
  return (
    <Stack className="bg-[#F7F7F8] ">
      <Stack direction="row" className="h-[56px] ">
        <Typography
          style={{
            fontWeight: isBorder ? "600" : "400",
            borderBottom: isBorder ? "2px solid black" : "",
          }}
          className="w-[124px] flex justify-center items-center"
          onClick={() => {
            setIsBorder(true);
          }}
        >
          Бүтээгдэхүүн
        </Typography>
        <Typography
          style={{
            fontWeight: isBorder ? "400" : "600",
            borderBottom: isBorder ? "" : "2px solid black",
          }}
          className="w-[88px] flex justify-center items-center"
          onClick={() => {
            setIsBorder(false);
          }}
        >
          Ангилал
        </Typography>
      </Stack>
      <Stack gap="40px">
        <Button
          variant="contained"
          className="flex w-[280px] h-[48px] bg-black mt-6"
          onClick={() => {
            setIsAddProduct(true);
          }}
        >
          <AddIcon />
          <Typography>Бүтээгдэхүүн нэмэх</Typography>
        </Button>

        <Stack direction="row" className="justify-between items-center ">
          <Stack direction="row" className="gap-[13px] w-full" mb={2}>
            <Button variant="outlined" className="w-[145px] h-10 bg-white">
              <EventOutlinedIcon />
              <Typography>Ангилал</Typography>
            </Button>
            <Button variant="outlined" className="w-[145px] h-10 bg-white">
              <EventOutlinedIcon />
              <Typography>Ангилал</Typography>
            </Button>
            <LocalizationProvider dateAdapter={AdapterDayjs}>
              <DatePicker
                sx={{ maxWidth: "150px", bgcolor: "white" }}
                disableFuture
                monthsPerRow={3}
                views={["month"]}
                slotProps={{
                  textField: { size: "small", placeholder: "Сараар" },
                  inputAdornment: {
                    position: "start",
                  },
                  openPickerButton: {
                    size: "small",
                  },
                }}
              />
            </LocalizationProvider>
          </Stack>

          <Stack>
            <TextField
              sx={{ width: "420px", height: "40px", bgcolor: "white" }}
              className="-mt-3"
              placeholder="Бүтээгдэхүүний нэр, SKU, UPC"
              type="search"
              InputProps={{ sx: { width: "420px", height: "40px" } }}
            />
          </Stack>
        </Stack>
      </Stack>
    </Stack>
  );
}
