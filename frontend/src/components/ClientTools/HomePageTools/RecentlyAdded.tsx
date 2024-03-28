"use client";
import { Grid, Stack, Typography } from "@mui/material";
import { Client } from "../../providers/ClientProvider";
import MainCard from "./RecentlySingleCard";

export const RecentlyAddedProducts = () => {
  const { allProducts } = Client();
  return (
    <Stack maxWidth="1240px" m="auto" mt="128px">
      <Stack alignItems="center">
        <Typography color="#151875" fontSize={42} fontWeight={800} mb="53px">
          Шинээр нэмэгдсэн
        </Typography>
        <Grid container>
          {allProducts
            .filter((item, index) => index < 8)
            .map((item: any, index: number) => (
              <Grid item xs={12} sm={6} md={4} xl={3} key={index}>
                <Stack width={270}>
                  <MainCard
                    image={item.images[0]}
                    name={item.productName}
                    price={item.price}
                    productId={item._id}
                  />
                </Stack>
              </Grid>
            ))}
        </Grid>
      </Stack>
    </Stack>
  );
};
