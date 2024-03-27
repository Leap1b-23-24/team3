"use client";
import { Client } from "@/components/providers/ClientProvider";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import { Rating, Stack, Typography } from "@mui/material";
import { numberFormatter } from "@/components/numberFormatter";
import { useRouter } from "next/navigation";

export default function Details() {
  const router = useRouter();
  const { allProducts, id } = Client();
  const product = allProducts.find((item: any) => item._id == id);
  if (!id) {
    router.push("/");
  }
  return (
    <Stack>
      <Stack direction="row" className="gap-[41px] px-[378px] mt-24 mb-12">
        <Stack direction="row" className="gap-[21px]">
          <Stack className="gap-[11px]">
            <img width="151px" height="155px" src="Rectangle 134.png" />
            <img width="151px" height="155px" src="Rectangle 136.png" />
            <img width="151px" height="155px" src="Rectangle 137.png" />
          </Stack>
          <img
            width="375px"
            height="487px"
            src={product?.images && product.images[0]}
          />
        </Stack>
        <Stack className="text-[#111C85] ">
          <Stack className="gap-[16px] mb-16">
            <Typography fontSize="36px" fontWeight="800">
              {product?.productName}
            </Typography>
            <Stack direction="row" className="items-center">
              <Rating name="simple-controlled" />
              <Typography fontSize="13px" fontWeight="800">
                (32)
              </Typography>
            </Stack>
            <Typography fontSize="32px" fontWeight="400">
              {numberFormatter.format(product?.price)}₮
            </Typography>
            <Stack direction="row" className="gap-[8px]">
              <Stack className="w-3 h-3 bg-[#DE9034] rounded-full"></Stack>
              <Stack className="w-3 h-3 bg-[#E60584] rounded-full"></Stack>
              <Stack className="w-3 h-3 bg-[#5E37FF] rounded-full"></Stack>
            </Stack>
            <Typography color="#9295AA" fontSize="17px">
              {product?.description}
            </Typography>
          </Stack>
          <Stack direction="row" className="gap-[20px]">
            <Typography fontSize="16px" fontWeight="800">
              Add To cart
            </Typography>
            <FavoriteBorderIcon />
          </Stack>
        </Stack>
      </Stack>
      <Stack className="text-[#151875] bg-[#F9F8FE] px-[378px] py-44">
        <Stack direction="row" className="mb-[56px]">
          <Typography fontSize="24px" fontWeight="800" borderBottom={2}>
            Нэмэлт мэдээлэл
          </Typography>
          <Typography fontSize="24px" fontWeight="800">
            Үнэлгээ
          </Typography>
        </Stack>
        <Stack className="gap-[9px]">
          <Typography fontSize="24px" fontWeight="800">
            Varius tempor.
          </Typography>
          <Typography color="#A9ACC6">
            Aliquam dis vulputate vulputate integer sagittis. Faucibus dolor
            ornare faucibus vel sed et eleifend habitasse amet. Montes, mauris
            varius ac est
            <br /> bibendum. Scelerisque a, risus ac ante. Velit consectetur
            neque, elit, aliquet. Non varius proin sed urna, egestas consequat
            laoreet diam tincidunt. Magna
            <br /> eget faucibus cras justo, tortor sed donec tempus. Imperdiet
            consequat, quis diam arcu, nulla lobortis justo netus dis. Eu in
            fringilla vulputate nunc nec.
            <br />
            Dui, massa viverr .
          </Typography>
        </Stack>
        <Stack className="text-[#A9ACC6] gap-[9px]">
          <Typography fontSize="24px" fontWeight="800" color="#151875">
            More details
          </Typography>
          <Stack direction="row" gap="8px">
            <ArrowForwardIcon />
            <Typography>
              Aliquam dis vulputate vulputate integer sagittis. Faucibus ds diam
              arcu, nulla lobortis justo netus dis. Eu in fringilla vulputate
              nunc nec. Dui, massa viverr .
            </Typography>
          </Stack>
          <Stack direction="row" gap="8px">
            <ArrowForwardIcon />
            <Typography>
              Aliquam dis vulputate vulputate integer sagittis. Faucibus ds diam
              arcu, nulla lobortis justo netus dis. Eu in fringilla vulputate
              nunc nec. Dui, massa viverr .
            </Typography>
          </Stack>
          <Stack direction="row" gap="8px">
            <ArrowForwardIcon />
            <Typography>
              Aliquam dis vulputate vulputate integer sagittis. Faucibus ds diam
              arcu, nulla lobortis justo netus dis. Eu in fringilla vulputate
              nunc nec. Dui, massa viverr .
            </Typography>
          </Stack>
          <Stack direction="row" gap="8px">
            <ArrowForwardIcon />
            <Typography>
              Aliquam dis vulputate vulputate integer sagittis. Faucibus ds diam
              arcu, nulla lobortis justo netus dis. Eu in fringilla vulputate
              nunc nec. Dui, massa viverr .
            </Typography>
          </Stack>
        </Stack>
      </Stack>
    </Stack>
  );
}
