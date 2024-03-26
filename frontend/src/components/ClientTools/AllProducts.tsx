import { Stack } from "@mui/material";
import ShopSidebar from "./SideBar";
import MainSingleCard from "./MainSingleCard";
import AllProductHead from "./AllProductHead";
import { Footer } from "..";
import { Header } from "./HeaderOfUser";

export default function AllProducts() {
  return (
    <Stack className="px-[378px] ">
      <Header />
      <AllProductHead />
      <Stack direction="row" className="gap-[102px]">
        <ShopSidebar />
        <MainSingleCard />
      </Stack>
      <Footer />
    </Stack>
  );
}
