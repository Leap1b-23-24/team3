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
import { numberFormatter } from "@/components/numberFormatter";

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
              <TableCell className="font-semibold w-8">№</TableCell>
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
                <TableCell width="30px">{index + 1}</TableCell>
                <TableCell align="center">
                  <Stack
                    direction="row"
                    alignItems="center"
                    className="max-w-[250px] justify-between"
                  >
                    <img
                      src={item.thumbnail}
                      className="w-10 h-10 rounded-full"
                    />
                    <Stack alignItems="flex-start">
                      <Typography
                        sx={{ fontWeight: 600 }}
                        className="text-sm font-semibold uppercase"
                      >
                        {item.productName}
                      </Typography>
                      <Typography>{item._id}</Typography>
                    </Stack>
                  </Stack>
                </TableCell>
                <TableCell align="center">0</TableCell>
                <TableCell align="center">
                  {numberFormatter.format(item.price)}₮
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Stack>
  );
}
