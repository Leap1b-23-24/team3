"use client";
import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import { Stack } from "@mui/material";

const rows = [
  { id: "0983294058", subscriber: "name", price: "12000", date: "12:12" },
];

export default function IncomeTable() {
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
              {rows.map((row, index) => (
                <TableRow key={index}>
                  <TableCell className="font-semibold">{row.id}</TableCell>
                  <TableCell align="center">{row.subscriber}</TableCell>
                  <TableCell align="center">{row.price}</TableCell>
                  <TableCell align="center">{row.date}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Stack>
    </Stack>
  );
}
