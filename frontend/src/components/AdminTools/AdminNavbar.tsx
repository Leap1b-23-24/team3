"use client";
import { Stack } from "@mui/material";
import WindowSharpIcon from "@mui/icons-material/WindowSharp";
import ContentPasteOutlinedIcon from "@mui/icons-material/ContentPasteOutlined";
import LocalOfferIcon from "@mui/icons-material/LocalOffer";
import ListAltIcon from "@mui/icons-material/ListAlt";
import SettingsIcon from "@mui/icons-material/Settings";
import { useContext } from "react";
import { AdminContext } from "../providers/AdminProvider";
import { usePathname, useRouter } from "next/navigation";
const data = [
  {
    label: "Хяналтын самбар",
    icon: <WindowSharpIcon />,
    href: "/admin/dashboard",
  },
  {
    label: "Захиалга",
    icon: <ContentPasteOutlinedIcon />,
    href: "/admin/order",
  },
  { label: "Орлого", icon: <LocalOfferIcon />, href: "/admin/income" },
  { label: "Бүтээгдэхүүн", icon: <ListAltIcon />, href: "/admin/product" },
  { label: "Тохиргоо", icon: <SettingsIcon /> },
];
export default function DashboardNavbar() {
  const { selectNavbar } = useContext(AdminContext);
  const router = useRouter();
  const pathname = usePathname();

  return (
    <Stack maxWidth="222px" width="100%" height="100vh" mt="24px">
      <Stack gap={1}>
        {data.map((item, index) => {
          return (
            <Stack
              key={index}
              direction="row"
              onClick={() => {
                router.push(`${item.href}`);
              }}
              className="pl-3 gap-3 cursor-pointer h-10 items-center font-semibold min-w-[200px] "
              sx={{
                bgcolor: pathname.includes(`${item.href}`) ? "#ECEDF0" : "none",
              }}
            >
              {item.icon} {item.label}
            </Stack>
          );
        })}
      </Stack>
    </Stack>
  );
}
