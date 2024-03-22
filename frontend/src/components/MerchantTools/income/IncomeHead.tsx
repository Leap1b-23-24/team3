"use client";
import { Box, Button, Stack, Typography } from "@mui/material";
import { useState } from "react";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import FileDownloadOutlinedIcon from "@mui/icons-material/FileDownloadOutlined";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
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

  return (
    <>
      <Stack gap={2} width={1} maxWidth="724px" mx="auto" mb="8px">
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
            <Stack
              sx={{
                width: "144px",
                height: "36px",
                bgcolor: "#1C20240A",
                px: "12px",
                alignItems: "center",
                justifyContent: "center",
                cursor: "pointer",
                borderRadius: "8px",
                "&:hover": { bgcolor: "#ECEDF0" },
                "&:active": { bgcolor: "#D6D8DB" },
              }}
            >
              <Stack
                direction="row"
                alignItems="center"
                justifyContent="center"
              >
                <FileDownloadOutlinedIcon />
                <Typography fontSize={15}>Хуулга татах</Typography>
              </Stack>
            </Stack>
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
            <Stack direction="row" gap={1} alignItems="center">
              {tabs.map((item: any, index) => {
                return (
                  <Stack
                    flexDirection="row"
                    key={index}
                    onClick={() => {
                      setActiveTab(item.label);
                    }}
                    sx={{
                      bgcolor: activeTab === item.label ? "#18BA51" : "white",
                      color: activeTab === item.label ? "white" : "black",
                      border:
                        activeTab === item.label ? "" : "1px solid #ECEDF0",
                      height: "40px",
                      width: "95px",
                      "&:hover": {
                        bgcolor: activeTab === item.label ? "#18BA51" : "white",
                      },
                      justifyContent: "center",
                      alignItems: "center",
                      borderRadius: "8px",
                      cursor: "pointer",
                    }}
                  >
                    {item.label}
                  </Stack>
                );
              })}

              <LocalizationProvider dateAdapter={AdapterDayjs}>
                <DatePicker
                  sx={{ maxWidth: "150px" }}
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
          </Stack>
        </Box>
      </Stack>
    </>
  );
}
