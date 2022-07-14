import { Button, makeStyles, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@material-ui/core';
import * as React from 'react';
import { Link } from 'react-router-dom';
import ViewMoreButton from '../GeneralCompanents/Viewmore';

const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
  main: {
    margin:"15px"
  }
});

const ViewOrders = () => {
  const classes = useStyles();
  return (
    <div className={classes.main} >
      <Link to={"/admin"} > <ViewMoreButton text={"Back"} /></Link>
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
        </TableContainer>
      </center>
    </div>
  )
}

export default ViewOrders