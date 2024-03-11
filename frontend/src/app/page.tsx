import { Footer, Header, SingleCardOfHomePage } from "@/components";
import Carousel from "@/components/Carousel1";

export default function Home() {
  return (
    <>
      <Header />
      <div className="max-w-[1240px] m-auto py-[24px]">
        <h2 className="font-bold text-[28px] py-[16px]">Санал болгож буй</h2>
        <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 place-content-center place-items-center gap-5">
          <SingleCardOfHomePage />
          <SingleCardOfHomePage />
          <SingleCardOfHomePage />
          <SingleCardOfHomePage />
          <SingleCardOfHomePage />
        </div>
      </div>
      <Carousel />
      <div className="max-w-[1240px] m-auto py-[24px]">
        <h2 className="font-bold text-[28px] py-[16px]">Шинээр нэмэгдсэн</h2>
        <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 place-content-center place-items-center gap-5">
          <SingleCardOfHomePage />
          <SingleCardOfHomePage />
          <SingleCardOfHomePage />
          <SingleCardOfHomePage />
          <SingleCardOfHomePage />
          <SingleCardOfHomePage />
          <SingleCardOfHomePage />
          <SingleCardOfHomePage />
          <SingleCardOfHomePage />
        </div>
      </div>
      <Footer />
    </>
  );
}
