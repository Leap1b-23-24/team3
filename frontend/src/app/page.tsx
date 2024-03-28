import { Footer } from "@/components";
import { AboutOfService } from "@/components/ClientTools/HomePageTools/AboutOfService";
import BigBanner from "@/components/ClientTools/HomePageTools/BigBanner";
import FeaturedProducts from "@/components/ClientTools/HomePageTools/FeaturedProducts";
import { Header } from "@/components/ClientTools/HeaderOfUser";
import { RecentlyAddedProducts } from "@/components/ClientTools/HomePageTools/RecentlyAdded";
import { Stack } from "@mui/material";
export default function Home() {
  return (
    <>
      <BigBanner />
      <FeaturedProducts />
      <RecentlyAddedProducts />
      <AboutOfService />
    </>
  );
}
