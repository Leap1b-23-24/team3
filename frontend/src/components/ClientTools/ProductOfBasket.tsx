"use client";
import * as React from "react";
import {
  Stack,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
} from "@mui/material";
import { Add, HighlightOffOutlined, Remove } from "@mui/icons-material";
import { Client } from "../providers/ClientProvider";
import { numberFormatter } from "../numberFormatter";

export const ProductOfBasket = () => {
  const { setAddToBasket } = Client();
  const [products, setProducts] = React.useState([]);

  React.useEffect(() => {
    const product = JSON.parse(localStorage.getItem("OrderProduct") || "{}");
    setProducts(product);
  }, []);

  const tableHeader = ["Бүтээгдэхүүн", "Үнэ", "Тоо ширхэг", "Нийт", ""];

  return (
    <Stack mt={2}>
      <TableContainer>
        <Table aria-label="simple table">
          <TableHead>
            <TableRow>
              {tableHeader.map((item, index) => (
                <TableCell key={index} align="center">
                  <Typography fontSize={20} fontWeight={800} color="#1D3178">
                    {item}
                  </Typography>
                </TableCell>
              ))}
            </TableRow>
          </TableHead>

          <TableBody>
            {products.map((row: any, index: number) => (
              <TableRow
                key={index}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  <Stack flexDirection="row" alignItems="center" gap={1.5}>
                    <Stack
                      position="relative"
                      overflow="hidden"
                      height="87px"
                      sx={{ aspectRatio: 1 / 1 }}
                    >
                      <img
                        src={row.image}
                        alt="product image"
                        style={{ objectFit: "cover" }}
                      />
                    </Stack>
                    <Stack gap={0.5}>
                      <Typography
                        fontSize={14}
                        fontWeight={800}
                        color="secondary.dark"
                      >
                        {row.name}
                      </Typography>
                      <Stack
                        flexDirection="row"
                        fontSize={12}
                        fontWeight={400}
                        color="#5E6166"
                        gap={1}
                      >
                        {/* {row.productColor.map((item, index) => (
                          <Stack
                            key={index}
                            p={0.5}
                            borderRadius="50%"
                            bgcolor={item}
                          ></Stack>
                        ))} */}
                      </Stack>
                    </Stack>
                  </Stack>
                </TableCell>
                <TableCell align="center">
                  <Typography fontSize={14} fontWeight={700} color="#151875">
                    {numberFormatter.format(row.price)} ₮
                  </Typography>
                </TableCell>
                <TableCell align="center">
                  <Stack
                    flexDirection="row"
                    justifyContent="center"
                    alignItems="center"
                  >
                    <Typography
                      onClick={() => {
                        const newCart = products.map((element: any) => {
                          if (element.productId == row.productId) {
                            if (element.orderQty > 1) {
                              element.orderQty -= 1;
                            }
                            return element;
                          } else {
                            return element;
                          }
                        });
                        setAddToBasket(newCart);
                      }}
                      sx={{ cursor: "pointer" }}
                      bgcolor="#E7E7EF"
                      color="#BEBFC2"
                    >
                      <Remove fontSize="small" color="inherit" />
                    </Typography>
                    <Typography
                      color="#BEBFC2"
                      bgcolor="#F0EFF2"
                      fontSize={16}
                      fontWeight={800}
                      px={2}
                    >
                      {row.orderQty}
                    </Typography>
                    <Typography
                      sx={{ cursor: "pointer" }}
                      bgcolor="#E7E7EF"
                      color="#BEBFC2"
                    >
                      <Add
                        onClick={() => {
                          const newCart = products.map((element: any) => {
                            if (element.productId == row.productId) {
                              element.orderQty += 1;
                              return element;
                            } else {
                              return element;
                            }
                          });
                          setAddToBasket(newCart);
                        }}
                        fontSize="small"
                        color="inherit"
                      />
                    </Typography>
                  </Stack>
                </TableCell>
                <TableCell align="center">
                  <Typography fontSize={14} fontWeight={700} color="#151875">
                    {numberFormatter.format(row.price * row.orderQty)} ₮
                  </Typography>
                </TableCell>
                <TableCell align="center">
                  <Typography
                    onClick={() => {
                      const newCart = products.filter(
                        (item: any) => item.productId != row.productId
                      );
                      setAddToBasket(newCart);
                    }}
                    fontSize={14}
                    fontWeight={700}
                    color="#A1A8C1"
                    sx={{
                      "&:hover": {
                        color: "success.main",
                      },
                    }}
                  >
                    <HighlightOffOutlined fontSize="small" />
                  </Typography>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Stack>
  );
};
