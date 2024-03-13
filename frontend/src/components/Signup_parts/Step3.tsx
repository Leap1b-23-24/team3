import { Stack, Typography } from "@mui/material";
import { CustomInput } from "../CustomInput";

export default function Step3() {
  return (
    <Stack className="max-w-[452px] w-full p-6 m-auto">
      <Typography className="text-[32px] font-bold mb-5">
        Жоохон танилцья
      </Typography>
      <Typography>
        Энэ мэдээллийг дэлгүүрийн тохиргоонд туслах зорилгоор ашиглана.
      </Typography>

      <Typography className="font-semibold mt-8">
        Та борлуулалт хийж байсан туршлагатай юу?
      </Typography>
      <CustomInput placeholder="Сонгох" />
      <Typography className="font-semibold mt-2">
        Та ямар төрлийн бүтээгдэхүүн борлуулах вэ?
      </Typography>
      <CustomInput placeholder="Сонгох" />
    </Stack>
  );
}
