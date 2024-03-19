import { Footer, Header, SingleCardOfHomePage } from "@/components";

import { Stack } from "@mui/material";

export default function Home() {
  return (
    <>
      <Header />
      <Stack px="24px">
        <div className="max-w-[1240px] m-auto py-6">
          <img
            className="w-[1237px] h-[557px] rounded-[20px] object-cover"
            src="/banner1.png"
          />
          <h2 className="font-bold text-[28px] py-4">Санал болгож буй</h2>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 place-content-center place-items-center gap-5">
            {new Array(5).fill(<SingleCardOfHomePage />)}
          </div>
          <img
            className="w-[1237px] h-[557px] rounded-[20px] mt-6"
            src="/banner2.png"
          />
        </div>
        <div className="max-w-[1240px] m-auto py-6">
          <h2 className="font-bold text-[28px] py-4">Шинээр нэмэгдсэн</h2>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 place-content-center place-items-center gap-5">
            {new Array(10).fill(<SingleCardOfHomePage />)}
          </div>
        </div>
      </Stack>
      <Footer />
    </>
  );
}
