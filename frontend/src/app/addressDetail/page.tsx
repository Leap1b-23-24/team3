"use client";

import { OrderAddress } from "@/components/ClientTools/OrderAddress";
import { numberFormatter } from "@/components/numberFormatter";
import { Auth } from "@/components/providers/AuthProvider";
import { Client } from "@/components/providers/ClientProvider";
import { Box, Button, Container, Stack, Typography } from "@mui/material";
import { useFormik } from "formik";
import { useState } from "react";
import * as yup from "yup";
const validationSchema = yup.object({
  firstName: yup.string().required(),
  phone: yup.string().required(),
  address: yup.string().required(),
  additional: yup.string().required(),
  city: yup.string().required(),
});
export default function DeliveryAddress() {
  const { addToBasket } = Client();
  const { createOrder, userInfo } = Auth();
  const [isBtn, setIsBtn] = useState(false);

  const formik = useFormik({
    initialValues: {
      phone: "",
      firstName: "",
      address: "",
      additional: "",
      city: "",
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      createOrder(
        { customerEmail: userInfo.email },
        { customerName: values.firstName },
        { customerPhone: values.phone },
        { DeliveryAddress: values.address },
        { customerCity: values.city },
        { productTotalPrice: sumBasketIsProduct - 10000 }
      );
    },
  });
  const sumBasketIsProduct = addToBasket.reduce((sum, currentValue) => {
    return sum + currentValue.price * currentValue.orderQty + 10000;
  }, 0);
  return (
    <Stack my={12}>
      <Container maxWidth="lg">
        <Box width={1}>
          <Stack width={1} mb="25px">
            <Typography color="#1D3178" fontSize={24} fontWeight={800}>
              Захиалга
            </Typography>
            <Typography color="#1D3178" fontSize={12} fontWeight={400}>
              Хүргэлтийн хаяг
            </Typography>
          </Stack>
          <Stack width={1} flexDirection="row" gap={3}>
            <Stack width={0.7}>
              <OrderAddress
                phone={formik.values.phone}
                city={formik.values.city}
                firstName={formik.values.firstName}
                address={formik.values.address}
                additional={formik.values.additional}
                handleChange={formik.handleChange}
                setIsBtn={setIsBtn}
              />
            </Stack>
            <Stack width={0.3} gap="14px">
              {addToBasket.map((item, index) => (
                <Box
                  key={index}
                  display="flex"
                  flexDirection="row"
                  justifyContent="space-between"
                  alignItems="center"
                  gap="14px"
                  borderBottom={1}
                  borderColor="#E1E1E4"
                  pb="15px"
                  height="100px"
                >
                  <Stack
                    position="relative"
                    width={1}
                    sx={{ aspectRatio: 1 / 1 }}
                  >
                    <img
                      src={item.image}
                      style={{
                        objectFit: "scale-down",
                        height: "87px",
                        width: "87px",
                        margin: "auto",
                      }}
                    />
                  </Stack>
                  <Stack width={1}>
                    <Typography fontSize={14} fontWeight={800}>
                      {item.name}
                    </Typography>
                    <Typography
                      fontSize={12}
                      fontWeight={800}
                      color="#A1A8C1"
                      display="flex"
                      flexDirection="row"
                      alignItems="center"
                      gap={1}
                    >
                      Өнгө:
                      <Stack flexDirection="row" gap={0.5}>
                        {/* {item.productColor.map((element, index) => (
                          <Stack
                            key={index}
                            flexDirection="row"
                            position="relative"
                            sx={{ aspectRatio: 1 / 1 }}
                            p={0.5}
                            borderRadius="50%"
                            bgcolor={element}
                          ></Stack>
                        ))} */}
                      </Stack>
                    </Typography>
                  </Stack>

                  <Stack>
                    <Typography fontSize={14} fontWeight={700} color="#151875">
                      {numberFormatter.format(item.price * item.orderQty)}₮
                    </Typography>
                  </Stack>
                </Box>
              ))}
              <Typography fontWeight={600}>Хүргэлтийн хураамж:</Typography>
              <Typography fontWeight={800} textAlign="end" marginTop="-10px">
                10,000₮
              </Typography>
              <Stack
                flexDirection="row"
                justifyContent="space-between"
                color="#151875"
                fontSize={18}
              >
                <Typography fontWeight={600}>Нийт дүн:</Typography>
                <Typography fontWeight={800}>
                  {numberFormatter.format(sumBasketIsProduct)}₮
                </Typography>
              </Stack>
              <Stack mt="47px">
                <Button
                  onClick={() => {
                    if (isBtn) formik.handleSubmit();
                  }}
                  variant="contained"
                  disabled={!isBtn}
                  sx={{
                    cursor: !isBtn ? "not-allowed" : "pointer",
                    height: "40px",
                    bgcolor: ({ palette }) =>
                      palette.secondary.main + "!important",
                  }}
                >
                  <Typography fontSize={14} fontWeight={700}>
                    Худалдан авах
                  </Typography>
                </Button>
              </Stack>
            </Stack>
          </Stack>
        </Box>
      </Container>
    </Stack>
  );
}
