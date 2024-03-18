import { Card, Stack, Typography } from "@mui/material";

export default function Card1() {
  return (
    <Card>
      <Typography className="p-6 border-b-[1px]">
        Хүргэлтийн мэдээлэл
      </Typography>
      <Stack className="p-6">
        <Typography>Гэр</Typography>
        <Typography fontSize="16px" fontWeight="600">
          Улаанбаатар, Сонгинохайрхан дүүрэг, 1-р хороо, 14r bair 8r orts 6r
          darvar
        </Typography>
      </Stack>
    </Card>
  );
}
