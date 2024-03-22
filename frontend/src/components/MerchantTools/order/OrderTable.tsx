"use client";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import { Stack } from "@mui/material";
import { useContext } from "react";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import moment from "moment";
import { AdminContext } from "@/components/providers/MerchantProvider";
import { numberFormatter } from "@/components/numberFormatter";

const rows = [{ id: "0983294058", name: "aksdd" }];

export default function OrderTable() {
  const { AllProduct } = useContext(AdminContext);
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
              <TableCell className="font-semibold w-[190px]" align="center">
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
            {AllProduct.map((item: any, index: number) => (
              <TableRow key={index}>
                <TableCell className="w-[190px]">{item._id}</TableCell>
                <TableCell align="center">{item.name}</TableCell>
                <TableCell align="center">
                  {item.createdAt.slice(0, 10)}
                </TableCell>
                <TableCell align="center">
                  {moment(item.createdAt).format("HH:mm")}
                </TableCell>
                <TableCell align="center">
                  {numberFormatter.format(item.price)}₮
                </TableCell>
                <TableCell align="center">null</TableCell>
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
