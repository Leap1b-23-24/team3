"use client";
import { Stack } from "@mui/material";
import WindowSharpIcon from "@mui/icons-material/WindowSharp";
import ContentPasteOutlinedIcon from "@mui/icons-material/ContentPasteOutlined";
import LocalOfferIcon from "@mui/icons-material/LocalOffer";
import ListAltIcon from "@mui/icons-material/ListAlt";
import SettingsIcon from "@mui/icons-material/Settings";
import { usePathname, useRouter } from "next/navigation";
const data = [
  {
    label: "Хяналтын самбар",
    icon: <WindowSharpIcon />,
    href: "/merchant/dashboard",
  },
  {
    label: "Захиалга",
    icon: <ContentPasteOutlinedIcon />,
    href: "/merchant/order",
  },
  { label: "Орлого", icon: <LocalOfferIcon />, href: "/merchant/income" },
  { label: "Бүтээгдэхүүн", icon: <ListAltIcon />, href: "/merchant/product" },
  { label: "Тохиргоо", icon: <SettingsIcon />, href: "#" },
];
export default function DashboardNavbar() {
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
