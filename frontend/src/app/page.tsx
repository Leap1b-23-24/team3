import { Footer, SingleCardOfHomePage } from "@/components";
import { Header } from "@/components/header";

export default function Home() {
  return (
    <>
      <Header></Header>
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
      <Footer></Footer>
    </>
  );
}
