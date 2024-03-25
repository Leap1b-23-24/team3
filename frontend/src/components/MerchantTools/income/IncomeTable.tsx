"use client";

import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import { Stack } from "@mui/material";
import { MerchantContext } from "@/components/providers/MerchantProvider";
import { useContext } from "react";
import { numberFormatter } from "@/components/numberFormatter";

export default function IncomeTable() {
  const { allProducts } = useContext(MerchantContext);

  return (
    <Stack>
      <Stack bgcolor="white" className="rounded-xl w-full max-w-[724px] m-auto">
        <TableContainer>
          <Table className="w-full max-w-[724px] text-red rounded-xl">
            <TableHead>
              <TableRow>
                <TableCell>Захиалгын ID дугаар</TableCell>
                <TableCell align="center">Захиалагч</TableCell>
                <TableCell align="center">Төлбөр</TableCell>
                <TableCell align="center">Огноо</TableCell>
              </TableRow>
            </TableHead>
            <TableBody className="bg-white">
              {allProducts.map((item: any, index: number) => (
                <TableRow key={index}>
                  <TableCell className="font-semibold">{item._id}</TableCell>
                  <TableCell align="center">{item.subcriber}</TableCell>
                  <TableCell align="center">
                    {numberFormatter.format(item.price)}₮
                  </TableCell>
                  <TableCell align="center">
                    {item.createdAt.slice(0, 10)}
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Stack>
    </Stack>
  );
}
