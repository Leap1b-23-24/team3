"use client";
import Box from "@mui/material/Box";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import Checkbox from "@mui/material/Checkbox";
import { useContext } from "react";
import { MerchantContext } from "@/components/providers/MerchantProvider";
import {
  IconButton,
  Stack,
  TableHead,
  Tooltip,
  Typography,
} from "@mui/material";
import { numberFormatter } from "@/components/numberFormatter";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";

export default function ProductTable() {
  const { allProducts, deleteProduct } = useContext(MerchantContext);

  return (
    <Box sx={{ width: "100%", color: "#3F4145" }}>
      <Paper sx={{ width: "100%", mb: 2 }}>
        <TableContainer>
          <Table sx={{ minWidth: 750 }}>
            <TableHead>
              <TableRow>
                <TableCell className="font-semibold w-8"></TableCell>
                <TableCell className="font-semibold w-[220px]" align="center">
                  Бүтээгдэхүүн
                </TableCell>
                <TableCell className="font-semibold" align="center">
                  Ангилал
                </TableCell>
                <TableCell className="font-semibold" align="center">
                  Үнэ
                </TableCell>
                <TableCell className="font-semibold" align="center">
                  Үлдэгдэл
                </TableCell>
                <TableCell className="font-semibold" align="center">
                  Зарагдсан
                </TableCell>
                <TableCell className="font-semibold" align="center">
                  Нэмсэн огноо
                </TableCell>
                <TableCell width="30px"></TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {allProducts.map((item: any, index: number) => (
                <TableRow key={index}>
                  <TableCell padding="checkbox">
                    <Checkbox color="primary" />
                  </TableCell>
                  <TableCell align="center">
                    <Stack
                      direction="row"
                      alignItems="center"
                      className="max-w-[200px] gap-3"
                    >
                      <img
                        src={item.images[0]}
                        alt="no image"
                        className="w-10 h-10 rounded-full border"
                      />
                      <Stack alignItems="flex-start">
                        <Typography
                          sx={{ fontWeight: 600 }}
                          className="text-sm font-semibold uppercase text-left"
                        >
                          {item.productName}
                        </Typography>
                        <Typography>{`000${index + 1}`.slice(-4)}</Typography>
                      </Stack>
                    </Stack>
                  </TableCell>
                  <TableCell align="center">null</TableCell>
                  <TableCell align="center">
                    {numberFormatter.format(item.price)}₮
                  </TableCell>
                  <TableCell align="center">{item.qty}</TableCell>
                  <TableCell align="center">0</TableCell>
                  <TableCell align="center">
                    {item.createdAt.slice(0, 10)}
                  </TableCell>
                  <TableCell align="center">
                    <Stack direction="row" className="gap-2">
                      <Stack className="cursor-pointer">
                        <Tooltip title="Устгах">
                          <IconButton onClick={() => deleteProduct(item._id)}>
                            <DeleteIcon
                              sx={{ fontSize: "20px", color: "#1C20243D" }}
                            />
                          </IconButton>
                        </Tooltip>
                      </Stack>
                      <Stack className="cursor-pointer">
                        <Tooltip title="Засварлах">
                          <IconButton>
                            <EditIcon
                              sx={{ fontSize: "20px", color: "#1C20243D" }}
                            />
                          </IconButton>
                        </Tooltip>
                      </Stack>
                    </Stack>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Paper>
    </Box>
  );
}
