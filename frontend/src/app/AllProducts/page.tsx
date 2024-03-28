import { Stack } from "@mui/material";
import ShopSidebar from "../../components/ClientTools/ProductListsTools/SideBar";
import MainSingleCard from "../../components/ClientTools/ProductListsTools/MainSingleCard";
import AllProductHead from "../../components/ClientTools/ProductListsTools/AllProductHead";
import { Footer } from "../../components";
import { Header } from "../../components/ClientTools/HeaderOfUser";

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
