"use client";
import { Client } from "@/components/providers/ClientProvider";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import { Button, Rating, Stack, Typography } from "@mui/material";
import { numberFormatter } from "@/components/numberFormatter";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { ProductRating } from "../../components/ClientTools/Rating&Comment";
import { Header } from "@/components/ClientTools/HeaderOfUser";
import { Footer } from "@/components";

export default function Details() {
  const [selectImg, setSelectImg] = useState(0);
  const [isRating, setIsRating] = useState(0);
  const router = useRouter();
  const { allProducts, id } = Client();
  const arr = ["Нэмэлт мэдээлэл", "Үнэлгээ"];

  useEffect(() => {
    const products = allProducts.find((item: any) => item._id == id);
    if (!products) return;
    localStorage.setItem("itemDetails", JSON.stringify(products));
  }, []);
  const product = JSON.parse(localStorage.getItem("itemDetails"));

  return (
    <>
      <Header />
      <Stack>
        <Stack
          direction="row"
          className="justify-around m-auto w-[1240px] mt-24 mb-12"
        >
          <Stack direction="row" className="gap-[20px] w-[547px] h-[487px]">
            <Stack className="gap-[11px]">
              {product.images &&
                product.images.map((item: any, index: number) => {
                  return (
                    <Stack
                      width="170px"
                      height="165px"
                      key={index}
                      onClick={() => setSelectImg(index)}
                      sx={{
                        cursor: "pointer",
                        bgcolor: selectImg == index ? "#F0EFF2" : "none",
                        justifyContent: "center",
                        alignItems: "center",
                        overflow: "hidden",
                      }}
                    >
                      <img
                        width="150px"
                        height="150px"
                        src={product?.images && product.images[index]}
                        className="mix-blend-multiply"
                      />
                    </Stack>
                  );
                })}
            </Stack>
            <Stack
              width="375px"
              height="487px"
              className="bg-[#EBF4F3] justify-center items-center"
            >
              <img
                width={280}
                height={280}
                src={product?.images && product.images[selectImg]}
                className="object-scale-down mix-blend-multiply"
              />
            </Stack>
          </Stack>
          <Stack className="text-[#111C85] w-[590px]">
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
          <Stack direction="row" className="mb-[56px] gap-5">
            {arr.map((item, index) => {
              return (
                <Typography
                  key={index}
                  fontSize="24px"
                  fontWeight="800"
                  sx={{
                    borderBottom:
                      isRating === index ? "2px solid #151875" : "0px",
                    cursor: "pointer",
                  }}
                  onClick={() => {
                    setIsRating(index);
                  }}
                >
                  {item}
                </Typography>
              );
            })}
          </Stack>
          {isRating === 0 ? (
            <Stack>
              <Stack className="gap-[9px]">
                <Typography fontSize="24px" fontWeight="800">
                  Varius tempor.
                </Typography>
                <Typography color="#A9ACC6">
                  Aliquam dis vulputate vulputate integer sagittis. Faucibus
                  dolor ornare faucibus vel sed et eleifend habitasse amet.
                  Montes, mauris varius ac est
                  <br /> bibendum. Scelerisque a, risus ac ante. Velit
                  consectetur neque, elit, aliquet. Non varius proin sed urna,
                  egestas consequat laoreet diam tincidunt. Magna
                  <br /> eget faucibus cras justo, tortor sed donec tempus.
                  Imperdiet consequat, quis diam arcu, nulla lobortis justo
                  netus dis. Eu in fringilla vulputate nunc nec.
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
                    Aliquam dis vulputate vulputate integer sagittis. Faucibus
                    ds diam arcu, nulla lobortis justo netus dis. Eu in
                    fringilla vulputate nunc nec. Dui, massa viverr .
                  </Typography>
                </Stack>
                <Stack direction="row" gap="8px">
                  <ArrowForwardIcon />
                  <Typography>
                    Aliquam dis vulputate vulputate integer sagittis. Faucibus
                    ds diam arcu, nulla lobortis justo netus dis. Eu in
                    fringilla vulputate nunc nec. Dui, massa viverr .
                  </Typography>
                </Stack>
                <Stack direction="row" gap="8px">
                  <ArrowForwardIcon />
                  <Typography>
                    Aliquam dis vulputate vulputate integer sagittis. Faucibus
                    ds diam arcu, nulla lobortis justo netus dis. Eu in
                    fringilla vulputate nunc nec. Dui, massa viverr .
                  </Typography>
                </Stack>
                <Stack direction="row" gap="8px">
                  <ArrowForwardIcon />
                  <Typography>
                    Aliquam dis vulputate vulputate integer sagittis. Faucibus
                    ds diam arcu, nulla lobortis justo netus dis. Eu in
                    fringilla vulputate nunc nec. Dui, massa viverr .
                  </Typography>
                </Stack>
              </Stack>
            </Stack>
          ) : (
            <ProductRating productId={id} />
          )}
        </Stack>
      </Stack>
      <Footer />
    </>
  );
}
