import { Rating, Stack, Typography } from "@mui/material";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import SavedSearchIcon from "@mui/icons-material/SavedSearch";
export default function ShopCard() {
  const card = [
    {
      image: "image 1165.png",
      title: "Усан ягаан сандал",
      price: "750’000",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Magna in est adipiscing in phasellus non in justo.",
    },
    {
      image: "image 1165.png",
      title: "Усан ягаан сандал",
      price: "750’000",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Magna in est adipiscing in phasellus non in justo.",
    },
    {
      image: "image 1165.png",
      title: "Усан ягаан сандал",
      price: "750’000",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Magna in est adipiscing in phasellus non in justo.",
    },
    {
      image: "image 1165.png",
      title: "Усан ягаан сандал",
      price: "750’000",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Magna in est adipiscing in phasellus non in justo.",
    },
    {
      image: "image 1165.png",
      title: "Усан ягаан сандал",
      price: "750’000",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Magna in est adipiscing in phasellus non in justo.",
    },
  ];
  return (
    <Stack className="gap-[34px]">
      {card.map((item) => {
        return (
          <Stack direction="row" className="gap-4 h-[270px] mb-[96px]">
            <Stack className="w-[270px]  bg-[#EBF4F3] justify-center items-center">
              <img width="169px" height="169px" src={item.image} />
            </Stack>
            <Stack className="gap-4 text-[#151875] p-[16px] h-[270px] justify-between">
              <Stack>
                <Stack direction="row" className="gap-4 items-center">
                  <Typography fontSize="18px" fontWeight="700">
                    {item.title}
                  </Typography>
                  <Stack direction="row" className="gap-[8px]">
                    <Stack className="w-3 h-3 bg-[#DE9034] rounded-full"></Stack>
                    <Stack className="w-3 h-3 bg-[#E60584] rounded-full"></Stack>
                    <Stack className="w-3 h-3 bg-[#5E37FF] rounded-full"></Stack>
                  </Stack>
                </Stack>
                <Stack direction="row" className="gap-3 items-center">
                  <Typography fontSize="21px" fontWeight="400">
                    {item.price}₮
                  </Typography>
                  <Stack direction="row">
                    <Rating
                      name="simple-controlled"
                      sx={{ fontSize: "20px" }}
                    />
                    <Typography fontSize="13px" fontWeight="800">
                      (32)
                    </Typography>
                  </Stack>
                </Stack>
                <Typography>{item.text}</Typography>
              </Stack>
              <Stack direction="row" className="gap-[20px]">
                <Stack className="w-[34px] h-[34px] bg-white rounded-full">
                  <ShoppingCartIcon />
                </Stack>
                <Stack className="w-[34px] h-[34px] bg-white rounded-full">
                  <FavoriteBorderIcon />
                </Stack>
                <Stack className="w-[34px] h-[34px] bg-white rounded-full">
                  <SavedSearchIcon />
                </Stack>
              </Stack>
            </Stack>
          </Stack>
        );
      })}
    </Stack>
  );
}
