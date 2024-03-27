import { IconButton, Stack, Typography } from "@mui/material";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import SavedSearchIcon from "@mui/icons-material/SavedSearch";
import { numberFormatter } from "@/components/numberFormatter";
import { Client } from "../providers/ClientProvider";
import { useRouter } from "next/navigation";

export default function MainCard(props: any) {
  const router = useRouter();
  const { setId } = Client();
  const { name, image, price, productId } = props;
  return (
    <Stack
      direction="row"
      onClick={() => {
        setId(productId);
        router.push("/productDetail");
      }}
    >
      <Stack className="w-[270px] justify-center items-center text-[#151875] mb-[53px] cursor-pointer">
        <Stack
          className="w-[270px] h-[280px] justify-center items-center relative bg-[#F6F7FB] hover:bg-[#EBF4F3]"
          sx={{
            "&:hover .icon": { opacity: 1 },
          }}
        >
          <img
            src={image}
            style={{
              maxWidth: "169px",
              maxHeight: "158px",
              mixBlendMode: "multiply",
            }}
            className="img"
          />
          <Stack className="gap-[20px] absolute bottom-2 left-2 opacity-0 icon ">
            <IconButton>
              <ShoppingCartIcon />
            </IconButton>
            <IconButton>
              <FavoriteBorderIcon />
            </IconButton>
            <IconButton>
              <SavedSearchIcon />
            </IconButton>
          </Stack>
        </Stack>
        <Stack className="gap-2 text-center items-center mt-4">
          <Typography fontSize="18px" fontWeight="700">
            {name}
          </Typography>
          <Stack direction="row" className="gap-[8px]">
            <Stack className="w-3 h-3 bg-[#DE9034] rounded-full"></Stack>
            <Stack className="w-3 h-3 bg-[#E60584] rounded-full"></Stack>
            <Stack className="w-3 h-3 bg-[#5E37FF] rounded-full"></Stack>
          </Stack>
          <Typography fontSize="21px" fontWeight="400 mt-3">
            {numberFormatter.format(price)}₮
          </Typography>
        </Stack>
      </Stack>
    </Stack>
  );
}
