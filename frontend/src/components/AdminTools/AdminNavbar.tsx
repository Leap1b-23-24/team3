"use client";
import { Stack } from "@mui/material";
import WindowSharpIcon from "@mui/icons-material/WindowSharp";
import ContentPasteOutlinedIcon from "@mui/icons-material/ContentPasteOutlined";
import LocalOfferIcon from "@mui/icons-material/LocalOffer";
import ListAltIcon from "@mui/icons-material/ListAlt";
import SettingsIcon from "@mui/icons-material/Settings";
import { useContext } from "react";
import { AdminContext } from "../providers/AdminProvider";
const data = [
  { label: "Хяналтын самбар", icon: <WindowSharpIcon /> },
  { label: "Захиалга", icon: <ContentPasteOutlinedIcon /> },
  { label: "Орлого", icon: <LocalOfferIcon /> },
  { label: "Бүтээгдэхүүн", icon: <ListAltIcon /> },
  { label: "Тохиргоо", icon: <SettingsIcon /> },
];
export default function DashboardNavbar() {
  const { selectNavbar, setSelectNavbar, setIsAddProduct } =
    useContext(AdminContext);

  function addLs(value: any) {
    localStorage.setItem("NavbarIndex", value);
    setSelectNavbar(value);
  }
  return (
    <Stack maxWidth="222px" width="100%" height="100vh" mt="24px">
      <Stack gap={1}>
        {data.map((item, index) => {
          return (
            <Stack
              key={index}
              direction="row"
              onClick={() => {
                addLs(item.label);
                setIsAddProduct(false);
              }}
              className="pl-3 gap-3 cursor-pointer h-10 items-center font-semibold min-w-[200px] "
              sx={{ bgcolor: selectNavbar === item.label ? "#ECEDF0" : "none" }}
            >
              {item.icon} {item.label}
            </Stack>
          );
        })}
      </Stack>
    </Stack>
  );
}
