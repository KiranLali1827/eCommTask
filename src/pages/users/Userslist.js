import * as React from 'react';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';

const columns = [
  { id: 'name', label: 'SL No', minWidth: 170 },
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
    format: (value) => value.toLocaleString('en-US'),
  },
  {
    id: 'density',
    label: 'PIN CODE',
    minWidth: 170,
    align: 'right',
    format: (value) => value.toFixed(2),
  },
];

function createData(name, code, population, size) {
  const density = population / size;
  return { name, code, population, size, density };
}

const rows = [
  createData('1', 'Testdemo@gmail.com', 1324171354, 3287263),
  createData('2', 'Testdemo@gmail.com', 1403500365, 9596961),
  createData('3', 'Testdemo@gmail.com', 60483973, 301340),
  createData('4', 'Testdemo@gmail.com', 327167434, 9833520),
  createData('5', 'Testdemo@gmail.com', 37602103, 9984670),
  createData('6', 'Testdemo@gmail.com', 25475400, 7692024),
  createData('7', 'Testdemo@gmail.com', 83019200, 357578),
  createData('8', 'Testdemo@gmail.com', 4857000, 70273),
  createData('9', 'Testdemo@gmail.com', 126577691, 1972550),
  createData('10', 'Testdemo@gmail.com', 126317000, 377973),
  createData('11', 'Testdemo@gmail.com', 67022000, 640679),
  createData('12', 'Testdemo@gmail.com', 67545757, 242495),
  createData('13', 'Testdemo@gmail.com', 146793744, 17098246),
  createData('14', 'Testdemo@gmail.com', 200962417, 923768),
  createData('15', 'Testdemo@gmail.com', 210147125, 8515767),
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

  return (
    <Paper sx={{ width: '100%', overflow: 'hidden' }}>
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
                  <TableRow hover role="checkbox" tabIndex={-1} key={row.code}>
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
