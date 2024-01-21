import * as React from 'react';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';
import { styled } from '@material-ui/core';

const columns = [
  { id: 'name', label: 'SL No', minWidth: 100 },
  { id: 'code', label: 'Name', minWidth: 100 },
  {
    id: 'population',
    label: 'Email',
    minWidth: 170,
    align: 'right',
    format: (value) => value.toLocaleString('en-US'),
  },
  {
    id: 'size',
    label: 'Phone',
    minWidth: 170,
    align: 'right',
    format: (value) => `+91 ${value}`
  },
  {
    id: 'density',
    label: 'PIN CODE',
    minWidth: 170,
    align: 'right',
    format: (value) => value,
  },
  {
    id: 'Delete',
    label: 'Delete',
    minWidth: 170,
    align: 'right',
    format: (value) => value,
  },
];

function createData(name, code, population, size,density, Delete) {
  //const density = population / size;
  return { name, code, population, size, density, Delete };
}

const rows = [
  createData('1',"ABC", 'Testdemo@gmail.com', 1324171354, 526312,"Delete"),
  createData('2',"ABC", 'Testdemo@gmail.com', 1403500365, 526312,"Delete" ),
  createData('3', "ABC",'Testdemo@gmail.com', 60483973, 526312, "Delete"),
  createData('4',"ABC", 'Testdemo@gmail.com', 327167434, 526312, "Delete"),
  createData('5',"ABC", 'Testdemo@gmail.com', 37602103, 526312, "Delete"),
  createData('6', "ABC",'Testdemo@gmail.com', 25475400, 526312, "Delete"),
  createData('7', "ABC",'Testdemo@gmail.com', 83019200, 526312, "Delete"),
  createData('8', "ABC",'Testdemo@gmail.com', 4857000, 526312, "Delete"),
  createData('9', "ABC",'Testdemo@gmail.com', 126577691, 526312, "Delete"),
  createData('10',"ABC", 'Testdemo@gmail.com', 126317000, 526312, "Delete"),
  createData('11', "ABC",'Testdemo@gmail.com', 67022000, 640679, "Delete"),
  createData('12',"ABC", 'Testdemo@gmail.com', 67545757, 242495, "Delete"),
  createData('13',"ABC", 'Testdemo@gmail.com', 146793744, 17098246, "Delete"),
  createData('14', "ABC",'Testdemo@gmail.com', 200962417, 923768, "Delete"),
  createData('15', "ABC",'Testdemo@gmail.com', 210147125, 526312, "Delete"),
];

export default function Userslist() {
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  // const StyledTableRow = styled(TableRow)(({ theme }) => ({
  //   '&:nth-of-type(odd)': {
  //     backgroundColor: theme.palette.action.hover,
  //   },
  //   // hide last border
  //   '&:last-child td, &:last-child th': {
  //     border: 0, 
  //   },
  // }));

  return (
    <Paper sx={{ width: '90%', marginLeft:'5%', overflow: 'hidden' }}>
      <TableContainer sx={{ maxHeight: 440 }}>
        <Table stickyHeader aria-label="sticky table">
          <TableHead>
            <TableRow>
              {columns.map((column) => (
                <TableCell 
                  key={column.id}
                  align={column.align}
                  style={{ minWidth: column.minWidth, backgroundColor:'grey', color:'white', textAlign:'center'}}
                >
                  {column.label}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody  >
            {rows
              .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              .map((row) => {
                return (
                  <TableRow tabIndex={-1} key={row.code}>
                    {columns.map((column) => {
                      const value = row[column.id];
                      return (
                        <TableCell style={{textAlign:'center'}} key={column.id} align={column.align}>
                          {column.format && typeof value === 'number'
                            ? column.format(value)
                            : value}
                        </TableCell>
                      );
                    })}
                  </TableRow>
                );
              })}
          </TableBody>
        </Table>
      </TableContainer>
      <TablePagination
        rowsPerPageOptions={[10, 25, 100]}
        component="div"
        count={rows.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
    </Paper>
  );
}
