"use client";
import { Footer, Header } from "@/components";
import { AboutOfService } from "@/components/ClientTools/AboutOfService";
import BigBanner from "@/components/ClientTools/BigBanner";
import FeaturedProducts from "@/components/ClientTools/FeaturedProducts";
import { RecentlyAddedProducts } from "@/components/ClientTools/RecentlyAdded";

export default function Home() {
  return (
    <>
      <Header />
      <BigBanner />
      <FeaturedProducts />
      <RecentlyAddedProducts />
      <AboutOfService />
      <Footer />
    </>
  );
}
