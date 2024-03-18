import { Card, Stack, Typography } from "@mui/material";

export default function Card2() {
  return (
    <Card className="w-full">
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
          className="flex size-4 font-semibold justify-between"
        >
          <Typography className="flex size-4 font-semibold">
            Нийт төлсөн дүн
          </Typography>
          <Typography className="flex size-4 font-semibold">
            ₮807,800
          </Typography>
        </Stack>
      </Stack>
    </Card>
  );
}
