"use client";
import {
  Badge,
  IconButton,
  InputAdornment,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import WifiCalling3OutlinedIcon from "@mui/icons-material/WifiCalling3Outlined";
import Person2OutlinedIcon from "@mui/icons-material/Person2Outlined";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import SearchIcon from "@mui/icons-material/Search";
import ExpandMoreOutlinedIcon from "@mui/icons-material/ExpandMoreOutlined";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { Client } from "../providers/ClientProvider";
import { useState } from "react";
export const Header = () => {
  const { addToBasket } = Client();
  const router = useRouter();
  const [isPink, setIsPink] = useState(true);

  return (
    <Stack>
      <Stack
        direction="row"
        className="bg-[#7E33E0] items-center  h-12  text-white justify-between mb-5"
      >
        <Stack
          direction="row"
          className="max-w-[1240px] justify-between items-center w-full m-auto"
        >
          <Stack direction="row" className=" w-full gap-16">
            <Stack direction="row" className="items-center gap-[10px]">
              <MailOutlineIcon
                sx={{
                  bgcolor: "#7E33E0",
                  width: "16px",
                  height: "16px",
                }}
              />
              <Typography fontSize="16px" fontWeight="600">
                info@ecommerce.mn
              </Typography>{" "}
            </Stack>
            <Stack direction="row" className="items-center gap-[10px]">
              <WifiCalling3OutlinedIcon
                sx={{
                  bgcolor: "#7E33E0",
                  width: "16px",
                  height: "16px",
                }}
              />{" "}
              <Typography fontSize="16px" fontWeight="600">
                77123456
              </Typography>
            </Stack>
          </Stack>
          <Stack direction="row" className="gap-[29px]">
            <Stack direction="row" className="items-center">
              <Typography fontSize="16px" fontWeight="600">
                Нэвтрэх
              </Typography>
              <Person2OutlinedIcon />
            </Stack>
            <Stack direction="row" className="items-center">
              <Typography fontSize="16px" fontWeight="600">
                Хадгалах
              </Typography>
              <FavoriteBorderOutlinedIcon />
            </Stack>
            <IconButton>
              <Badge
                badgeContent={addToBasket.length}
                color="success"
                sx={{ cursor: "pointer" }}
                onClick={() => {
                  router.push("/basket");
                }}
              >
                <ShoppingCartOutlinedIcon sx={{ color: "white" }} />
              </Badge>
            </IconButton>
          </Stack>
        </Stack>
        <Stack direction="row" className="gap-[29px]">
          <Link href={"/signupshop"}>
            <Stack direction="row" className="items-center">
              <Typography fontSize="16px" fontWeight="600">
                Нэвтрэх
              </Typography>
              <Person2OutlinedIcon />
            </Stack>
          </Link>
          <Stack direction="row" className="items-center">
            <Typography fontSize="16px" fontWeight="600">
              Хадгалах
            </Typography>
            <FavoriteBorderOutlinedIcon />
          </Stack>
          <ShoppingCartOutlinedIcon />
        </Stack>
      </Stack>

      <Stack
        direction="row"
        className="max-w-[1240px] justify-between items-center w-full m-auto mb-5"
      >
        <Stack direction="row" className="items-center gap-14">
          <Typography fontSize="34px" fontWeight="700">
            Ecommerce
          </Typography>
          <Stack direction="row" gap={2}>
            <Stack direction="row" sx={{ cursor: "pointer", gap: "25px" }}>
              <Typography style={{ color: isPink ? "#FB2E86" : "black" }}>
                Нүүр
              </Typography>
              <Typography
                onClick={() => {
                  setIsPink(false);
                  router.push("/AllProducts");
                }}
                style={{ color: !isPink ? "#FB2E86" : "black" }}
              >
                Ангилал
              </Typography>
            </Stack>
          </Stack>
        </Stack>
        <Stack direction="row">
          <TextField
            InputProps={{
              sx: {
                width: "317px",
                height: "40px",
                p: "0px",
              },
              endAdornment: (
                <InputAdornment position="end">
                  <SearchIcon
                    sx={{
                      height: "40px",
                      width: "51px",
                      bgcolor: "#FB2E86",
                      color: "white",
                    }}
                  />
                </InputAdornment>
              ),
            }}
            type="search"
          />
        </Stack>
      </Stack>
    </Stack>
  );
};
