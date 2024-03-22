"use client";
import {
  FormControl,
  FormHelperText,
  InputAdornment,
  MenuItem,
  Select,
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
export const Header = () => {
  return (
    <Stack>
      <Stack
        direction="row"
        className="bg-[#7E33E0] items-center px-[378px]  h-11  text-white justify-between"
      >
        <Stack direction="row" className="gap-[66px]">
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
            </Typography>
          </Stack>
          <Stack direction="row" className="items-center gap-[10px]">
            <WifiCalling3OutlinedIcon
              sx={{
                bgcolor: "#7E33E0",
                width: "16px",
                height: "16px",
              }}
            />
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
          <ShoppingCartOutlinedIcon />
        </Stack>
      </Stack>
      <Stack
        direction="row"
        className="items-center px-[378px]  h-11 justify-between"
      >
        <Stack direction="row" className="items-center gap-14">
          <Typography fontSize="34px" fontWeight="700">
            Ecommerce
          </Typography>
          <Stack direction="row">
            <Typography>
              Нүүр
              <ExpandMoreOutlinedIcon />
            </Typography>
            <Typography>Ангилал</Typography>
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
