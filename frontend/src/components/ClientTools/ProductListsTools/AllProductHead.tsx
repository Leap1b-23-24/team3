import { Stack, TextField, Typography } from "@mui/material";
import WindowIcon from "@mui/icons-material/Window";
import FormatListBulletedIcon from "@mui/icons-material/FormatListBulleted";
export default function AllProductHead() {
  return (
    <Stack direction="row" className=" justify-between mb-[48px] mt-24">
      <Stack>
        <Typography fontSize="22px" fontWeight="800" color="#151875">
          Ecommerce Acceories & Fashion item
        </Typography>
        <Typography fontSize="12px" fontWeight="400" color="#8A8FB9">
          About 9,620 results (0.62 seconds)
        </Typography>
      </Stack>
      <Stack direction="row" className="text-[#3F509E] items-center gap-6">
        <Stack direction="row" className="gap-[10px]">
          <Typography fontSize="16px" fontWeight="400">
            Per Page:
          </Typography>
          <TextField
            InputProps={{
              sx: {
                bgcolor: "#E7E6EF",
                width: "56px",
                height: "25px",
                p: "0px",
              },
            }}
          />
        </Stack>
        <Stack direction="row">
          <Typography>Sort By:</Typography>
          <TextField
            InputProps={{
              sx: {
                bgcolor: "#E7E6EF",
                width: "98px",
                height: "25px",
                p: "0px",
              },
            }}
          />
        </Stack>
        <Stack direction="row" className="items-center gap-1">
          <Typography>View:</Typography>
          <WindowIcon sx={{ width: "12px", height: "12px" }} />
          <FormatListBulletedIcon sx={{ width: "12px", height: "12px" }} />
          <TextField
            InputProps={{
              sx: {
                marginX: "10px",
                bgcolor: "#E7E6EF",
                width: "166px",
                height: "25px",
                p: "0px",
              },
            }}
          />
        </Stack>
      </Stack>
    </Stack>
  );
}
