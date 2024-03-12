import { Button, Stack, Typography } from "@mui/material";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import ArrowBackTwoToneIcon from "@mui/icons-material/ArrowBackTwoTone";
import { CustomInput } from "../CustomInput";

export default function Step1(props: any) {
  const { Next, setIndex } = props;

  return (
    <Stack className="max-w-[452px] w-full h-[296px] p-6 m-auto">
      <Typography className="text-[32px] font-bold text-center mb-5">
        Дэлгүүрийн мэдээлэл
      </Typography>
      <Typography className="font-medium">
        Танай дэлгүүрийн нэр юу вэ?
      </Typography>
      <CustomInput placeholder="Дэлгүүрийн нэр" />
      <Stack
        direction="row"
        className="max-w-[404px] mt-14 items-center justify-between"
      >
        <Stack
          onClick={() => {
            Next(setIndex((prev: any) => prev - 1));
          }}
          className="w-12 h-12 bg-[#ECEDF0] rounded-full cursor-pointer items-center justify-center"
        >
          <ArrowBackTwoToneIcon />
        </Stack>
        <Button
          onClick={() => {
            Next(setIndex((prev: any) => prev + 1));
          }}
          variant="contained"
          className="h-[48px] max-w-[127px] rounded-lg bg-black normal-case"
        >
          <span></span>
          Дараах
          <span className="text-right">
            <ArrowForwardIcon />
          </span>
        </Button>
      </Stack>
    </Stack>
  );
}
