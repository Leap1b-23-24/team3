import { Stack, Typography } from "@mui/material";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
export default function Chart2() {
  const data = [
    { city: "Улаанбаатар", percent: "70" },
    { city: "Дархан", percent: "20" },
    { city: "Эрдэнэт", percent: "10" },
    { city: "Бусад", percent: "0" },
  ];
  return (
    <Stack className="min-w-[565px] p-4 bg-white h-[50%] rounded-xl">
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
        {data.map((item, index) => {
          return (
            <Stack direction="row" key={index} alignItems="center">
              <Typography marginRight="34px" width="100px">
                {item.city}
              </Typography>
              <Stack
                width="353px"
                height="8px"
                bgcolor="#1C202414"
                marginRight="12px"
                borderRadius="4px"
              >
                <Stack
                  maxWidth="353px"
                  height="8px"
                  bgcolor="#000"
                  marginRight="12px"
                  borderRadius="4px"
                  sx={{ width: `${item.percent}%` }}
                ></Stack>
              </Stack>
              <Typography>{item.percent}%</Typography>
            </Stack>
          );
        })}
      </Stack>
    </Stack>
  );
}
