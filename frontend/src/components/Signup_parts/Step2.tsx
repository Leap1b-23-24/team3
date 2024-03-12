import { Button, Stack } from "@mui/material";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

export default function Step2(props: any) {
  const { Next, setIndex } = props;

  return (
    <Stack>
      <Button
        onClick={() => {
          Next(setIndex((prev: any) => prev + 1));
        }}
        variant="contained"
        className="h-[60px] mt-4 flex justify-between rounded-lg bg-black"
      >
        <span></span>
        Дараах
        <span className="text-right">
          <ArrowForwardIcon />
        </span>
      </Button>
    </Stack>
  );
}
