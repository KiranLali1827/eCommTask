import * as React from 'react';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { grey } from '@mui/material/colors';

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
    
  },
  
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  '&:nth-of-type(odd)': {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  '&:last-child td, &:last-child th': {
    border: 0, 
  },
}));

function createData(name, calories, fat, carbs, protein) {
  return { name, calories, fat, carbs, protein };
}

const rows = [
  createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
  createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
  createData('Eclair', 262, 16.0, 24, 6.0),
  createData('Cupcake', 305, 3.7, 67, 4.3),
  createData('Gingerbread', 356, 16.0, 49, 3.9),
];

export default function CustomizedTables() {
  return (
    <TableContainer style={{width:'1000px', marginLeft:'75px'}} component={Paper}>
      <Table  aria-label="customized table">
        <TableHead>
          <TableRow>
          <StyledTableCell style={{backgroundColor:'grey', color:'white', textAlign:'center'}} >Sl No </StyledTableCell>
            <StyledTableCell style={{backgroundColor:'grey', color:'white', textAlign:'center'}} >Employee Name </StyledTableCell>
            <StyledTableCell style={{backgroundColor:'grey', color:'white', textAlign:'center'}} >Employee ID </StyledTableCell>
            <StyledTableCell style={{backgroundColor:'grey', color:'white', textAlign:'center'}} >Email</StyledTableCell>
            <StyledTableCell style={{backgroundColor:'grey', color:'white', textAlign:'center'}} >Phone</StyledTableCell>
            <StyledTableCell style={{backgroundColor:'grey', color:'white', textAlign:'center'}}>Type</StyledTableCell>
            <StyledTableCell style={{backgroundColor:'grey', color:'white', textAlign:'center'}}>Delete</StyledTableCell>
            <StyledTableCell style={{backgroundColor:'grey', color:'white', textAlign:'center'}}>Update</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <StyledTableRow  key={row.name}>
              <StyledTableCell style={{textAlign:'center'}} component="th" scope="row">
               1
              </StyledTableCell>
              <StyledTableCell style={{textAlign:'center'}} component="th" scope="row">
                {row.name}
              </StyledTableCell>
              <StyledTableCell  style={{textAlign:'center'}} >{row.calories}</StyledTableCell>
              <StyledTableCell style={{textAlign:'center'}} >{row.fat}</StyledTableCell>
              <StyledTableCell style={{textAlign:'center'}}>{row.carbs}</StyledTableCell>
              <StyledTableCell style={{textAlign:'center'}}>{row.protein}</StyledTableCell>
              <StyledTableCell style={{textAlign:'center'}} >{row.protein}</StyledTableCell>
              <StyledTableCell style={{textAlign:'center'}}>{row.protein}</StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
