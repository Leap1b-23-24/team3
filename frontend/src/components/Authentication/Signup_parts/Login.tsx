"use client";
import { CustomInput } from "@/components/CustomInput";
import { Button, Card, Stack, Typography } from "@mui/material";

import { useRouter } from "next/navigation";
export default function Login() {
  const router = useRouter();
  return (
    <Stack className="items-center gap-[16px] text-center">
      <Card className="flex flex-col w-[496px] px-8 py-6 text-center mt-32 text-[#9096B2] gap-[21px]">
        <Typography fontSize="32px" fontWeight="800" color="black">
          Нэвтрэх
        </Typography>
        <Typography fontSize="17px" fontWeight="400">
          Доорх мэдээллийн оруулж нэвтэрнэ үү
        </Typography>
        <CustomInput placeholder="Имэйл хаяг" />
        <CustomInput placeholder="Нууц үг" />
        <Typography fontSize="17px" fontWeight="400">
          Нууц үгээ мартсан
        </Typography>
        <Button
          variant="contained"
          className=" bg-[#FB2E86] hover:bg-[#FB2E86]"
        >
          Нэвтрэх
        </Button>
        <Typography
          className="text-[17px] font-normal"
          onClick={() => {
            router.push("/signupshop");
          }}
        >
          Шинээр бүртгүүлэх
        </Typography>
      </Card>
      <Typography className="mb-32 text-[#9096B2] border-b-2">
        мерчант нэвтрэх
      </Typography>
    </Stack>
  );
}
