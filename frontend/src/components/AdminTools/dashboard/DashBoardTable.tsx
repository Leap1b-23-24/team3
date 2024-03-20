"use client";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import { Stack, Typography } from "@mui/material";
import { useContext } from "react";
import { AdminContext } from "@/components/providers/AdminProvider";

const rows = [
  { product: "gg", sold: "33", price: "12,800₮" },
  { product: "gg", sold: "33", price: "12,800₮" },
  { product: "gg", sold: "33", price: "12,800₮" },
];

export default function DashboardTable() {
  const { AllProduct } = useContext(AdminContext);
  return (
    <Stack
      width="581px"
      height="706px"
      bgcolor="white"
      className="rounded-xl px-6 py-4"
    >
      <Stack className="text-lg font-semibold mb-7">Шилдэг бүтээгдэхүүн</Stack>
      <TableContainer>
        <Table sx={{ maxWidth: "533px" }} aria-label="customized table">
          <TableHead>
            <TableRow className="bg-[#ECEDF0]">
              <TableCell className="font-semibold">№</TableCell>
              <TableCell className="font-semibold" align="center">
                Бүтээгдэхүүн
              </TableCell>
              <TableCell className="font-semibold" align="center">
                Зарагдсан
              </TableCell>
              <TableCell className="font-semibold" align="center">
                Үнэ
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody className="bg-white">
            {AllProduct.map((item: any, index: number) => (
              <TableRow key={index}>
                <TableCell>{index + 1}</TableCell>
                <TableCell align="center">
                  <Stack
                    direction="row"
                    alignItems="center"
                    className="max-w-[157px] bg-cyan-50"
                  >
                    <img
                      src={item.thumbnail}
                      className="w-10 h-10 rounded-full"
                    />
                    <Stack>
                      <Typography>{item.productName}</Typography>
                      <Typography>{item._id}</Typography>
                    </Stack>
                  </Stack>
                </TableCell>
                <TableCell align="center">{item.sold}</TableCell>
                <TableCell align="center">{item.price}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Stack>
  );
}
