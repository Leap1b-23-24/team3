import { Button, Card, Stack, TextField, Typography } from "@mui/material";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Card1 from "./Card1";
import Card2 from "./Card2";
export default function OrderDetial() {
  return (
    <Stack className="bg-[#F7F7F8] h-screen">
      <Button className="bg-white h-[56px] items-center justify-start">
        <ArrowBackIosNewIcon />
        <Typography>Захиалгын дэлгэрэнгүй</Typography>
      </Button>
      <Stack direction="row" className="m-7 gap-8">
        <Card className=" p-7 w-[627px]">
          <Stack direction="row">
            <Stack direction="row" className="justify-between w-full mb-5">
              <Stack>
                <Typography>Захиалгын ID дугаар: </Typography>
                <Typography fontSize="16px" fontWeight="600">
                  2072705735829
                </Typography>
              </Stack>
              <Button className="bg-[#F7F7F8] rounded-[30px] flex gap-2">
                <Typography>Бэлтгэгдэж байна</Typography>
                <ExpandMoreIcon />
              </Button>
            </Stack>
          </Stack>
          <Stack className="mb-5">
            <Typography>Захиалагч: Хувь хүн </Typography>
            <Typography fontSize="16px" fontWeight="600">
              Zoloosoko0526@gmail.com, 88556061
            </Typography>
          </Stack>
          <Card className="flex bg-[#F7F7F8]">
            <img width="180px" style={{ border: "1px solid black" }} src="" />
            <Stack className="w-full p-5">
              <Typography fontSize="24px" fontWeight="700">
                WOMEN'S HORSEBIT MULE
              </Typography>
              <Stack>
                <Typography>2024-01-20</Typography>
                <Typography>Бүтээгдэхүүний ID: 30349049903</Typography>
              </Stack>
              <Stack direction="row" className="justify-between">
                <Typography fontSize="16px" fontWeight="500">
                  Тоо ширхэг: 3
                </Typography>
                <Typography fontSize="18pxs" fontWeight="600">
                  ₮677,100
                </Typography>
              </Stack>
            </Stack>
          </Card>
        </Card>
        <Stack className="gap-7">
          <Card1 />
          <Card2 />
        </Stack>
      </Stack>
    </Stack>
  );
}
