import { Stack, Typography } from "@mui/material";
import { CustomInput } from "../CustomInput";

export default function Step2(props: any) {
  return (
    <Stack className="max-w-[452px] w-full p-6 m-auto">
      <Typography className="text-[32px] font-bold mb-5">
        Бүс нутгийн мэдээлэл
      </Typography>
      <Typography className="font-semibold ">Сум/Дүүрэг</Typography>
      <CustomInput placeholder="Сум/Дүүрэг" />
      <Typography className="font-semibold mt-2">Хороо</Typography>
      <CustomInput placeholder="Хороо" />
    </Stack>
  );
}
