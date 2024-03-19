'use client'
import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import { Stack } from '@mui/material';





const rows = [
{id: "0983294058",name: "aksdd"},
];

export default function OrderTable() {
  return (
    <Stack height="706px" bgcolor="white" className="rounded-xl px-6 py-4 w-full">
    <Stack className="text-lg font-semibold mb-7">Захиалга</Stack>
    <TableContainer >
      <Table className="w-full">
        <TableHead >
          <TableRow className='bg-[#ECEDF0]' >
            <TableCell className='font-semibold'>Захиалгын ID дугаар</TableCell>
            <TableCell className='font-semibold' align="center">Үйлчлүүлэгч</TableCell>
            <TableCell className='font-semibold' align="center">Огноо</TableCell>
            <TableCell className='font-semibold'  align="center">Цаг</TableCell>
            <TableCell className='font-semibold' align="center">Төлбөр</TableCell>
            <TableCell className='font-semibold' align="center">Статус</TableCell>
            <TableCell className='font-semibold' align="center">Дэлгэрэнгүй</TableCell>
          </TableRow>
        </TableHead>
        <TableBody className='bg-white' >
          {rows.map((row) => (
            <TableRow key={row.name}  >
         <TableCell >{row.id}</TableCell>
         <TableCell align="center">{row.name}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    </Stack>
  );
}
