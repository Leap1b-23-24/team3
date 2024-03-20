// "use client";
// import Box from "@mui/material/Box";
// import Table from "@mui/material/Table";
// import TableBody from "@mui/material/TableBody";
// import TableCell from "@mui/material/TableCell";
// import TableContainer from "@mui/material/TableContainer";
// import TablePagination from "@mui/material/TablePagination";
// import TableRow from "@mui/material/TableRow";
// import Paper from "@mui/material/Paper";
// import Checkbox from "@mui/material/Checkbox";
// import { useContext, useState } from "react";
// import { AdminContext } from "@/components/providers/AdminProvider";

// export default function ProductTable() {
//   const [isSelected, setIsSelected] = useState();
//   const { AllProduct } = useContext(AdminContext);

//   return (
//     <Box sx={{ width: "100%" }}>
//       <Paper sx={{ width: "100%", mb: 2 }}>
//         <TableContainer>
//           <Table sx={{ minWidth: 750 }}>
//             <TableBody>
//               {}
//               <TableRow>
//                 <TableCell padding="checkbox">
//                   <Checkbox color="primary" />
//                 </TableCell>
//                 <TableCell align="center"></TableCell>
//                 <TableCell align="center"></TableCell>
//                 <TableCell align="center"></TableCell>
//                 <TableCell align="center"></TableCell>
//                 <TableCell align="center"></TableCell>
//               </TableRow>
//             </TableBody>
//           </Table>
//         </TableContainer>
//         <TablePagination
//           rowsPerPageOptions={[5, 10, 25]}
//           component="div"
//           count={AllProduct.length}
//           onPageChange={handleChangePage}
//           onRowsPerPageChange={handleChangeRowsPerPage}
//         />
//       </Paper>
//     </Box>
//   );
// }
