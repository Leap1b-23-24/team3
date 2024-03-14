import { Stack, Typography } from "@mui/material";
import { CustomInput } from "../CustomInput";

export default function Step1() {
  return (
    <Stack className="max-w-[452px] w-full p-6 m-auto">
      <Typography className="text-[32px] font-bold  mb-5">
        Дэлгүүрийн мэдээлэл
      </Typography>
      <Typography className="font-semibold">
        Танай дэлгүүрийн нэр юу вэ?
      </Typography>
      <CustomInput placeholder="Дэлгүүрийн нэр" />
    </Stack>
  );
}
