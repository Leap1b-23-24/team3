"use client";
import { Box, Button, Stack, Typography } from "@mui/material";
import { useState } from "react";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import FileDownloadOutlinedIcon from "@mui/icons-material/FileDownloadOutlined";
import { DemoContainer } from "@mui/x-date-pickers/internals/demo";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";

import Select, { SelectChangeEvent } from "@mui/material/Select";
import { DatePicker } from "@mui/x-date-pickers";

const tabs = [
  {
    label: "Өнөөдөр",
  },
  {
    label: "7 хоног",
  },
];

export default function IncomeHeader() {
  const [activeTab, setActiveTab] = useState("Өнөөдөр");

  const [age, setAge] = useState("");

  const handleChange = (event: SelectChangeEvent) => {
    setAge(event.target.value);
  };

  return (
    <>
      <Stack gap={2} width={1}>
        <Box
          display="flex"
          flexDirection="column"
          border={1}
          borderColor="#ECEDF0"
          borderRadius={1.5}
          bgcolor="common.white"
        >
          <Stack
            borderBottom={1}
            borderColor="#ECEDF0"
            py={2.5}
            px={3}
            flexDirection="row"
            justifyContent="space-between"
          >
            <Typography fontSize={20} fontWeight={700}>
              Орлого
            </Typography>
            <Button
              variant="text"
              sx={{ bgcolor: "#1C20240A", px: "12px" }}
              startIcon={<FileDownloadOutlinedIcon />}
            >
              <Typography fontSize={16} fontWeight={600}>
                Хуулга татах
              </Typography>
            </Button>
          </Stack>
          <Stack
            flexDirection="row"
            p={3}
            justifyContent="space-between"
            alignItems="center"
          >
            <Typography fontSize={28} fontWeight={700}>
              235,000₮
            </Typography>
            <Stack flexDirection="row" gap={1} alignItems="center">
              {tabs.map((item: any, index) => {
                return (
                  <Stack
                    onClick={() => {
                      setActiveTab(item.label);
                    }}
                    sx={{
                      bgcolor: activeTab === item.label ? "#18BA51" : "white",
                      color: activeTab === item.label ? "white" : "black",
                      borderColor: "#ECEDF0",
                      p: "10px 16px",
                      borderRadius: "8px",
                      cursor: "pointer",
                    }}
                  >
                    {item.label}
                  </Stack>
                );
              })}

              <LocalizationProvider dateAdapter={AdapterDayjs}>
                <DemoContainer sx={{ p: 0 }} components={["DatePicker"]}>
                  <DatePicker
                    disableFuture
                    monthsPerRow={3}
                    views={["month", "year"]}
                    slotProps={{
                      inputAdornment: {
                        position: "start",
                      },
                      openPickerButton: {
                        size: "small",
                      },
                    }}
                  />
                </DemoContainer>
              </LocalizationProvider>
            </Stack>
          </Stack>
        </Box>
      </Stack>
    </>
  );
}
