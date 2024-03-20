import { Footer, Header, SingleCardOfHomePage } from "@/components";
import DehazeRoundedIcon from "@mui/icons-material/DehazeRounded";

import { Stack, Typography } from "@mui/material";

export default function Home() {
  return (
    <>
      <Header />
      <Stack maxWidth="1240px" m="auto">
        <Stack
          width="35%"
          gap="32px"
          direction="row"
          alignItems="center"
          py="8px"
          bgcolor="white"
        >
          <DehazeRoundedIcon />
          <Stack direction="row" gap="16px" color="#121316">
            <Typography fontWeight="600" fontSize="14px">
              Хямдралтай
            </Typography>
            <Typography fontWeight="600" fontSize="14px">
              Эрэгтэй
            </Typography>
            <Typography fontWeight="600" fontSize="14px">
              Эмэгтэй
            </Typography>
            <Typography fontWeight="600" fontSize="14px">
              Хүүхдийн
            </Typography>
          </Stack>
        </Stack>
      </Stack>
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
            className="w-[1237px] h-[557px] rounded-[20px] mt-6 object-cover"
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
