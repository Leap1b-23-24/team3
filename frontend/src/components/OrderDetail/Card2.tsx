import { Card, Stack, Typography } from "@mui/material";

export default function Card2() {
  return (
    <Card className="">
      <Typography className="p-6 border-b-[1px]">Төлбөрийн мэдээлэл</Typography>
      <Stack className="p-6">
        <Typography>Бүтээгдэхүүн</Typography>
        <Stack>
          <Typography>WOMEN'S HORSEBIT MULE Women’s horsebit mule</Typography>
        </Stack>
        <Stack>
          <Typography>WOMEN'S HORSEBIT MULE Women’s horsebit mule</Typography>
        </Stack>
        <Stack>
          <Typography> Хүргэлт</Typography>
        </Stack>
        <Stack
          direction="row"
          className="w-full size-4 font-semibold justify-between"
        >
          <Typography className="flex font-semibold">
            Нийт төлсөн дүн
          </Typography>
          <Typography className="flex font-semibold">₮807,800</Typography>
        </Stack>
      </Stack>
    </Card>
  );
}
