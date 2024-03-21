import { Card, Stack, Typography } from "@mui/material";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
export default function Chart2() {
  return (
    <Stack>
      <Card className="max-w-[565px] p-4">
        <Stack
          direction="row"
          className="w-full justify-between items-center mb-5"
        >
          <Typography fontSize="18px" fontWeight="600">
            Идэвхтэй бүс нутаг
          </Typography>
          <ArrowForwardIosIcon sx={{ height: "17px" }} />
        </Stack>
        <Stack className="h-[216px] justify-between">
          <Stack>
            <Typography>Улаанбаатар</Typography>
          </Stack>
          <Stack>
            <Typography>Дархан </Typography>
          </Stack>
          <Stack>
            <Typography>Эрдэнэт </Typography>
          </Stack>
          <Stack>
            <Typography>Бусад</Typography>
          </Stack>
        </Stack>
      </Card>
    </Stack>
  );
}
