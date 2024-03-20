"use client";

import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import { Stack } from "@mui/material";
import { AdminContext } from "@/components/providers/AdminProvider";
import { useContext } from "react";

export default function IncomeTable() {
  const { AllProduct } = useContext(AdminContext);

  return (
    <Stack>
      <Stack className="text-lg font-semibold mb-7">Захиалга</Stack>
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
              {AllProduct.map((item: any, index: number) => (
                <TableRow key={index}>
                  <TableCell className="font-semibold">{item._id}</TableCell>
                  <TableCell align="center">{item.subcriber}</TableCell>
                  <TableCell align="center">{item.price}</TableCell>
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
