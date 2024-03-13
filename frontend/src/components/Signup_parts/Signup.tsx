import { Button, Stack, Typography } from "@mui/material";
import { CustomInput } from "../CustomInput";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import AppleIcon from "@mui/icons-material/Apple";
import MicrosoftIcon from "@mui/icons-material/Microsoft";
import GoogleIcon from "@mui/icons-material/Google";
import Link from "next/link";

export default function SignUp(props: any) {
  const { Next, setIndex } = props;
  const data = [
    { name: "Google-ээр нэвтрэх", icon: <GoogleIcon /> },
    { name: "Microsoft-оор нэвтрэх", icon: <MicrosoftIcon /> },
    { name: "Apple-аар нэвтрэх", icon: <AppleIcon /> },
  ];

  return (
    <Stack
      className="max-w-[440px] w-full h-[756px] p-10 rounded-2xl m-auto"
      sx={{ border: "solid 1px #ECEDF0" }}
    >
      <Typography className="text-[32px] font-bold text-center mb-10">
        Бүртгүүлэх
      </Typography>
      <CustomInput label="Таны имэйл" placeholder="Имэйл" className="mb-5" />
      <CustomInput label="Таны нэр" placeholder="Нэр" />
      <Button
        onClick={() => {
          Next(setIndex((prev: any) => prev + 1));
        }}
        variant="contained"
        className="h-[60px] mt-4 flex justify-between rounded-lg bg-black normal-case"
      >
        <span></span>
        Дараах
        <span className="text-right">
          <ArrowForwardIcon />
        </span>
      </Button>

      <Stack
        sx={{
          mt: "28px",
          py: "28px",
          borderBottom: "1px solid #ECEDF0",
          borderTop: "1px solid #ECEDF0",
        }}
      >
        {data.map((item) => {
          return (
            <Stack
              direction="row"
              justifyContent="center"
              alignItems="center"
              className="bg-[#ECEDF0] h-[52px] mb-3 cursor-pointer"
            >
              <Link href="#">
                <Stack direction="row" gap={1} className="w-52">
                  {item.icon}
                  {item.name}
                </Stack>
              </Link>
            </Stack>
          );
        })}
      </Stack>

      <Stack direction="row" className="text-sm m-auto mt-6">
        Бүртгэлтэй юу?
        <Link href="#" className="underline cursor-pointer ml-1">
          Нэвтрэх
        </Link>
      </Stack>
    </Stack>
  );
}
