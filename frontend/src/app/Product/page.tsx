import { Button, Stack, TextField, Typography } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import { CustomInput } from "../../components/CustomInput";
import AttachMoneyIcon from "@mui/icons-material/AttachMoney";
import EventOutlinedIcon from "@mui/icons-material/EventOutlined";
import SearchIcon from "@mui/icons-material/Search";
import Link from "next/link";
import ProductMap from "../../components/AddProduct/ProductMap";
export default function Product() {
  const cardMap = [{}];
  return (
    <Stack className="bg-[#F7F7F8]">
      <Stack gap="40px">
        <Link href={"/AddProductCard"}>
          <Button
            variant="contained"
            className="flex w-[280px] h-[48px] bg-black"
          >
            <AddIcon />
            <Typography>Бүтээгдэхүүн нэмэх</Typography>
          </Button>
        </Link>
        <Stack direction="row">
          <Stack direction="row" className="gap-[13px]">
            <Button variant="outlined" className="w-[145px] h-[40px] bg-white">
              <EventOutlinedIcon />
              <Typography>Ангилал</Typography>
            </Button>
            <Button variant="outlined" className="w-[145px] h-[40px] bg-white">
              <AttachMoneyIcon />
              <Typography>Үнэ</Typography>
            </Button>
            <Button variant="outlined" className="w-[145px] h-[40px] bg-white">
              <EventOutlinedIcon />
              <Typography>Сараар</Typography>
            </Button>
          </Stack>
          <Stack className="w-[419px] border-[1px] bg-white" direction="row">
            <SearchIcon />
            <CustomInput
              inputProps={{}}
              className="h-[40px]"
              type="search"
              placeholder="Бүтээгдэхүүний нэр, SKU, UPC"
            />
          </Stack>
        </Stack>
        <Stack className="rounded-[20px] bg-white">
          <Stack
            direction="row"
            paddingLeft="100px"
            paddingRight="104px"
            className="h-[44px] items-center "
          >
            <Typography className="w-[15%]">Бүтээгдэхүүн</Typography>
            <Typography className="w-[20%]">Ангилал</Typography>
            <Typography className="w-[15%]">Үнэ</Typography>
            <Typography className="w-[15%]">Үлдэгдэл</Typography>
            <Typography className="w-[15%]">Зарагдсан</Typography>
            <Typography className="w-[20%]"> Нэмсэн огноо</Typography>
          </Stack>
          <ProductMap />
        </Stack>
      </Stack>
    </Stack>
  );
}
