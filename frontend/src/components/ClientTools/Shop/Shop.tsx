import { Stack } from "@mui/material";
import ShopSidebar from "./Shopsidebar";
import ShopCard from "./ShopCard";
import Shopheader from "./Shopheader";
import MainCard from "./MainCard";

export default function Shop() {
  return (
    <Stack className="px-[378px] ">
      <Shopheader />
      <Stack>{/* <MainCard /> */}</Stack>
      <Stack direction="row" className="gap-[102px]">
        <ShopSidebar />
        <ShopCard />
      </Stack>
    </Stack>
  );
}
