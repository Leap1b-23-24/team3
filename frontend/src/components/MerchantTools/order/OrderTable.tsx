"use client";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import ClearIcon from "@mui/icons-material/Clear";
import {
  FormControl,
  MenuItem,
  Select,
  Stack,
  Typography,
} from "@mui/material";
import { useContext, useEffect, useState } from "react";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import moment from "moment";
import { MerchantContext } from "@/components/providers/MerchantProvider";
import { numberFormatter } from "@/components/numberFormatter";
import { useRouter } from "next/navigation";

const rows = [{ id: "0983294058", name: "aksdd" }];

export default function OrderTable() {
  const { allOrders, setOrderDetails } = useContext(MerchantContext);
  const [isInput, setIsInput] = useState(1);
  console.log(allOrders);
  const router = useRouter();
  return (
    <Stack
      height="706px"
      bgcolor="white"
      className="rounded-xl px-6 py-4 w-full"
    >
      <Stack className="text-lg font-semibold mb-7">Захиалга</Stack>
      <TableContainer>
        <Table className="w-full">
          <TableHead>
            <TableRow className="bg-[#ECEDF0]">
              <TableCell className="font-semibold " align="center">
                Захиалгын ID дугаар
              </TableCell>
              <TableCell className="font-semibold" align="center">
                Үйлчлүүлэгч
              </TableCell>
              <TableCell className="font-semibold" align="center">
                Огноо
              </TableCell>
              <TableCell className="font-semibold" align="center">
                Цаг
              </TableCell>
              <TableCell className="font-semibold" align="center">
                Төлбөр
              </TableCell>
              <TableCell className="font-semibold" align="center">
                Статус
              </TableCell>
              <TableCell className="font-semibold" align="center">
                Дэлгэрэнгүй
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody className="bg-white">
            {allOrders.map((item: any, index: number) => (
              <TableRow
                key={index}
                sx={{ cursor: "pointer" }}
                onClick={() => {
                  setOrderDetails(item);
                  router.push("/merchant/order/OrderDetail");
                }}
              >
                <TableCell className="w-[190px]">
                  {item._id.slice(15)}
                </TableCell>
                <TableCell align="center">{item.customerEmail}</TableCell>
                <TableCell align="center">
                  {/* {item.createdAt.slice(0, 10)} */}
                </TableCell>
                <TableCell align="center">
                  {/* {moment(item.createdAt).format("HH:mm")} */}
                </TableCell>
                <TableCell align="center">
                  {numberFormatter.format(item.orderTotalPrice)}₮
                </TableCell>

                <TableCell align="center">
                  <FormControl sx={{ minWidth: 120, backgroundColor: "white" }}>
                    <Select
                      displayEmpty
                      sx={{ height: "36px", borderRadius: "16px" }}
                      onChange={(e: any) => {
                        setIsInput(e.target.value);
                      }}
                    >
                      <MenuItem selected>
                        <Stack direction="row" className="items-center gap-2">
                          <Typography>{item.status}</Typography>
                          <ClearIcon sx={{ width: "15px", height: "15px" }} />
                        </Stack>
                      </MenuItem>
                    </Select>
                  </FormControl>
                </TableCell>
                <TableCell
                  align="center"
                  sx={{ cursor: "pointer", width: "60px" }}
                >
                  <KeyboardArrowRightIcon />
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Stack>
  );
}
