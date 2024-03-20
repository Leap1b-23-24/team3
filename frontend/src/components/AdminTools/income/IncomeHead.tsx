"use client";
import { Divider, Stack, Typography } from "@mui/material";
import DownloadIcon from "@mui/icons-material/Download";
import { useState } from "react";
import InsertInvitationOutlinedIcon from "@mui/icons-material/InsertInvitationOutlined";
import MenuItem from "@mui/material/MenuItem";
import Select, { SelectChangeEvent } from "@mui/material/Select";

const tabs = [
  {
    label: "өнөөдөр",
  },
  {
    label: "7 хоног",
  },
];

export default function IncomeHeader() {
  const [activeTab, setActiveTab] = useState(tabs[0]);

  const [age, setAge] = useState("");

  const handleChange = (event: SelectChangeEvent) => {
    setAge(event.target.value);
  };

  return (
    <>
      <Stack
        maxWidth="1000px"
        m="auto"
        px="24px"
        bgcolor="white"
        borderRadius="12px"
        sx={{ border: 1, borderColor: "#e6e3e3" }}
      >
        <Stack
          direction="row"
          justifyContent="space-between"
          alignItems="center"
          py="24px"
        >
          <Typography fontWeight="600" fontSize="20px">
            Орлого
          </Typography>
          <Stack
            direction="row"
            bgcolor="#1C20240A"
            borderRadius="8px"
            p="8px"
            gap="4px"
          >
            <DownloadIcon />
            <Typography fontWeight="520" fontSize="14px">
              Хуулга татах
            </Typography>
          </Stack>
        </Stack>

        <Divider />

        <Stack
          direction="row"
          justifyContent="space-between"
          alignItems="center"
          py="24px"
        >
          <Typography fontWeight="600" fontSize="20px">
            235,000$
          </Typography>

          <Stack direction="row" spacing="8px">
            {tabs.map((item, index) => (
              <Stack
                key={index}
                borderRadius="8px"
                py="8px"
                px="20px"
                onClick={() => {
                  setActiveTab(item);
                }}
                sx={{
                  border: 1,
                  borderColor: "#e6e3e3",
                  bgcolor: item.label === activeTab.label ? "#18BA51" : "white",
                  color: item.label === activeTab.label ? "white" : "black",
                }}
              >
                <Typography>{item.label}</Typography>
              </Stack>
            ))}

            <Stack height="5px">
              <Select
                sx={{ height: "40px" }}
                value={age}
                onChange={handleChange}
                displayEmpty
                inputProps={{ "aria-label": "Without label" }}
              >
                <MenuItem value="">
                  <em className="flex gap-2">
                    <InsertInvitationOutlinedIcon />
                    <Typography>Сараар</Typography>
                  </em>
                </MenuItem>
                <MenuItem value={10}>Ten</MenuItem>
                <MenuItem value={20}>Twenty</MenuItem>
                <MenuItem value={30}>Thirty</MenuItem>
              </Select>
            </Stack>
          </Stack>
        </Stack>
      </Stack>
    </>
  );
}
