"use client";

import { OrderAddress } from "@/components/ClientTools/OrderAddress";
import { numberFormatter } from "@/components/numberFormatter";
import { Client } from "@/components/providers/ClientProvider";
import { Box, Button, Container, Stack, Typography } from "@mui/material";

export default function DeliveryAddress() {
  const { addToBasket } = Client();
  const sumBasketIsProduct = addToBasket.reduce((sum, currentValue) => {
    return sum + currentValue.price * currentValue.orderQty;
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
              <OrderAddress />
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
                >
                  <Stack
                    position="relative"
                    width={1}
                    sx={{ aspectRatio: 1 / 1 }}
                  >
                    <img
                      src={item.image}
                      style={{ objectFit: "cover" }}
                      sizes="small"
                      alt="product image"
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
                    // router.push("/addressDetail");
                  }}
                  variant="contained"
                  sx={{
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
