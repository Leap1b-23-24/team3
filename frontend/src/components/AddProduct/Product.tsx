import { Button, Stack, Typography } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import { CustomInput } from "../CustomInput";
import AttachMoneyIcon from "@mui/icons-material/AttachMoney";
import EventOutlinedIcon from "@mui/icons-material/EventOutlined";
import SearchIcon from "@mui/icons-material/Search";
export default function Product() {
  return (
    <Stack>
      <Stack>
        <Button
          variant="contained"
          className="flex w-[280px] h-[48px] bg-black"
        >
          <AddIcon />
          <Typography>Бүтээгдэхүүн нэмэх</Typography>
        </Button>
        <Stack direction="row">
          <Stack direction="row" className="gap-[13px]">
            <Button variant="outlined" className="w-[145px] h-[40px]">
              <EventOutlinedIcon />
              <Typography>Ангилал</Typography>
            </Button>
            <Button variant="outlined" className="w-[145px] h-[40px]">
              <AttachMoneyIcon />
              <Typography>Үнэ</Typography>
            </Button>
            <Button variant="outlined" className="w-[145px] h-[40px]">
              <EventOutlinedIcon />
              <Typography>Сараар</Typography>
            </Button>
          </Stack>
          <Stack className="w-[419px] border-[1px]" direction="row">
            <SearchIcon />
            <CustomInput
              inputProps={{}}
              className="h-[40px]"
              type="search"
              placeholder="Бүтээгдэхүүний нэр, SKU, UPC"
            />
          </Stack>
        </Stack>
      </Stack>
    </Stack>
  );
}
