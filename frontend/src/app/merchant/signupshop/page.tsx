import { Button, Card, Stack, Typography } from "@mui/material";
import { CustomInput } from "../../../components/CustomInput";
export default function SignUp() {
  return (
    <Stack className="items-center gap-[16px] text-center">
      <Card className="flex flex-col w-[496px] px-8 py-6 text-center m-32 text-[#9096B2] gap-[21px]">
        <Typography fontSize="32px" fontWeight="800" color="black">
          Бүртгүүлэх
        </Typography>
        <Typography fontSize="17px" fontWeight="400">
          Доорх мэдээллийг бөглөнө үү
        </Typography>
        <CustomInput placeholder="Имэйл хаяг" />
        <CustomInput placeholder="Нууц үг" />
        <CustomInput placeholder="Нууц үг давтах" />
        <Typography fontSize="17px" fontWeight="400">
          Нууц үгээ мартсан
        </Typography>
        <Button
          variant="contained"
          className=" bg-[#FB2E86] hover:bg-[#FB2E86]"
        >
          Бүртгүүлэх
        </Button>
        <Typography fontSize="17px" fontWeight="400">
          Нэвтрэх хэсэг
        </Typography>
      </Card>
    </Stack>
  );
}
