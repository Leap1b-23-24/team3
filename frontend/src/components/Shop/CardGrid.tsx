import { Stack, Typography } from "@mui/material";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import SavedSearchIcon from "@mui/icons-material/SavedSearch";
export default function CardGrid() {
  const gridCard = [
    { image: "cam 3.png", title: "Canon камер", price: "750’000" },
    { image: "cam 3.png", title: "Canon камер", price: "750’000" },
    { image: "cam 3.png", title: "Canon камер", price: "750’000" },
    { image: "cam 3.png", title: "Canon камер", price: "750’000" },
    { image: "cam 3.png", title: "Canon камер", price: "750’000" },
    { image: "cam 3.png", title: "Canon камер", price: "750’000" },
    { image: "cam 3.png", title: "Canon камер", price: "750’000" },
    { image: "cam 3.png", title: "Canon камер", price: "750’000" },
    { image: "cam 3.png", title: "Canon камер", price: "750’000" },
  ];
  return (
    <Stack direction="row" className="grid grid-cols-4 place-items-center">
      {gridCard.map((item) => {
        return (
          <Stack className="w-[270px] justify-center items-center text-[#151875] mb-[53px]">
            <Stack
              className="w-[270px] h-[280px] justify-center items-center relative bg-[#F6F7FB] hover:bg-[#EBF4F3]"
              sx={{ "&:hover .icon": { opacity: 1 } }}
            >
              <img width="169px" height="158px" src={item.image} />
              <Stack className="gap-[20px] absolute bottom-2 left-2 opacity-0 icon">
                <Stack className="w-[34px] h-[34px] hover:bg-white rounded-full justify-center items-center">
                  <ShoppingCartIcon />
                </Stack>
                <Stack className="w-[34px] h-[34px] hover:bg-white rounded-full justify-center items-center">
                  <FavoriteBorderIcon />
                </Stack>
                <Stack className="w-[34px] h-[34px] hover:bg-white rounded-full justify-center items-center">
                  <SavedSearchIcon />
                </Stack>
              </Stack>
            </Stack>
            <Stack className="gap-2 text-center items-center">
              <Typography fontSize="18px" fontWeight="700">
                {item.title}
              </Typography>
              <Stack direction="row" className="gap-[8px]">
                <Stack className="w-3 h-3 bg-[#DE9034] rounded-full"></Stack>
                <Stack className="w-3 h-3 bg-[#E60584] rounded-full"></Stack>
                <Stack className="w-3 h-3 bg-[#5E37FF] rounded-full"></Stack>
              </Stack>
              <Typography fontSize="21px" fontWeight="400">
                {item.price}₮
              </Typography>
            </Stack>
          </Stack>
        );
      })}
    </Stack>
  );
}
