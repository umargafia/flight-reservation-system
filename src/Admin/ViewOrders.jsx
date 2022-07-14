import { makeStyles, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@material-ui/core';
import * as React from 'react';

const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
});



function createData(name, email, phone, address, children, adults, peoples) {
  return { name, calories: email, phone, carbs: address, children, adults, peoples };
}

const rows = [
  createData(),
  createData('Ice cream sandwich', "umaddr@gmail.com", 91234567, "katsina", 4, 1, ""),
  createData('Eclair', "umar23@gmail.com", 161234567, 2483745, "katsina", 1, 3, ""),
  createData('Cupcake', "234umar@gmail.com", 31234567, 6738475, "katsina", 5, 2, ""),
];
const ViewOrders = () => {
  const classes = useStyles();
  return (
   <center>
   <TableContainer component={Paper} style={{ width: "80%", margin: 30 }} >
   <Table className={classes.table} aria-label="simple table">
     <TableHead>
       <TableRow>
         <TableCell>Full name</TableCell>
         <TableCell align="right">Email</TableCell>
         <TableCell align="right">Phone Number</TableCell>
         <TableCell align="right">Address</TableCell>
         <TableCell align="right">no of Children</TableCell>
         <TableCell align="right">no of Adults</TableCell>
         <TableCell align="right">Number of peoples</TableCell>
       </TableRow>
     </TableHead>
     <TableBody>

       <TableRow >
         <TableCell >Frozen</TableCell>
         <TableCell align="right">umar@gmail.com</TableCell>
         <TableCell align="right">1234567</TableCell>
         <TableCell align="right">24124</TableCell>
         <TableCell align="right">katsina</TableCell>
         <TableCell align="right">1</TableCell>
         <TableCell align="right">2</TableCell>
       </TableRow>


       <TableRow >
         <TableCell >Frozen</TableCell>
         <TableCell align="right">umar@gmail.com</TableCell>
         <TableCell align="right">1234567</TableCell>
         <TableCell align="right">24124</TableCell>
         <TableCell align="right">katsina</TableCell>
         <TableCell align="right">1</TableCell>
         <TableCell align="right">2</TableCell>
       </TableRow>
       <TableRow >
       <TableCell >Frozen</TableCell>
       <TableCell align="right">umar@gmail.com</TableCell>
       <TableCell align="right">1234567</TableCell>
       <TableCell align="right">24124</TableCell>
       <TableCell align="right">katsina</TableCell>
       <TableCell align="right">1</TableCell>
       <TableCell align="right">2</TableCell>
     </TableRow>

     </TableBody>
   </Table>
 </TableContainer></center>
  )
}

export default ViewOrders