'use client'
import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import { Stack } from '@mui/material';


const rows = [
{product: "gg", sold: "33", price: "12,800₮"},
{product: "gg", sold: "33", price: "12,800₮"},
{product: "gg", sold: "33", price: "12,800₮"},
];

export default function DashboardTable() {
  return (
    <Stack width="581px" height="706px" bgcolor="white" className="rounded-xl px-6 py-4">
    <Stack className="text-lg font-semibold mb-7">Шилдэг бүтээгдэхүүн</Stack>
    <TableContainer >
      <Table sx={{ maxWidth: "533px"}} aria-label="customized table">
        <TableHead >
          <TableRow className='bg-[#ECEDF0]' >
            <TableCell className='font-semibold'>№</TableCell>
            <TableCell className='font-semibold' align="center">Бүтээгдэхүүн</TableCell>
            <TableCell className='font-semibold' align="center">Зарагдсан</TableCell>
            <TableCell className='font-semibold' align="center">Үнэ</TableCell>
          </TableRow>
        </TableHead>
        <TableBody className='bg-white' >
          {rows.map((row,index) => (
            <TableRow key={index}  >
              <TableCell >
                {index+1}
              </TableCell>
              <TableCell align="center">{row.product}</TableCell>
              <TableCell align="center">{row.sold}</TableCell>
              <TableCell align="center">{row.price}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    </Stack>
  );
}
