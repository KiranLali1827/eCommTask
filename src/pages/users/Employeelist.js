// import * as React from 'react';
// import { styled } from '@mui/material/styles';
// import Table from '@mui/material/Table';
// import TableBody from '@mui/material/TableBody';
// import TableCell, { tableCellClasses } from '@mui/material/TableCell';
// import TableContainer from '@mui/material/TableContainer';
// import TableHead from '@mui/material/TableHead';
// import TableRow from '@mui/material/TableRow';
// import Paper from '@mui/material/Paper';

// const StyledTableCell = styled(TableCell)(({ theme }) => ({
//   [`&.${tableCellClasses.body}`]: {
//     fontSize: 14,

//   },

// }));

// const StyledTableRow = styled(TableRow)(({ theme }) => ({
//   // '&:nth-of-type(odd)': {
//   //   backgroundColor: theme.palette.action.hover,
//   // },
//   // hide last border
//   '&:last-child td, &:last-child th': {
//     border: 0,
//   },
// }));

// function createData(name, calories, fat, carbs, protein) {
//   return { name, calories, fat, carbs, protein };
// }

// const rows = [
//   createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
//   createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
//   createData('Eclair', 262, 16.0, 24, 6.0),
//   createData('Cupcake', 305, 3.7, 67, 4.3),
//   createData('Gingerbread', 356, 16.0, 49, 3.9),
// ];

// export default function Employeelist() {
//   return (
//     <TableContainer style={{width:'1000px', marginLeft:'75px'}} component={Paper}>
//       <Table  aria-label="customized table">
//         <TableHead>
//           <TableRow>
//           <StyledTableCell style={{backgroundColor:'grey', color:'white', textAlign:'center'}} >Sl No </StyledTableCell>
//             <StyledTableCell style={{backgroundColor:'grey', color:'white', textAlign:'center'}} >Employee Name </StyledTableCell>
//             <StyledTableCell style={{backgroundColor:'grey', color:'white', textAlign:'center'}} >Employee ID </StyledTableCell>
//             <StyledTableCell style={{backgroundColor:'grey', color:'white', textAlign:'center'}} >Email</StyledTableCell>
//             <StyledTableCell style={{backgroundColor:'grey', color:'white', textAlign:'center'}} >Phone</StyledTableCell>
//             <StyledTableCell style={{backgroundColor:'grey', color:'white', textAlign:'center'}}>Type</StyledTableCell>
//             <StyledTableCell style={{backgroundColor:'grey', color:'white', textAlign:'center'}}>Delete</StyledTableCell>
//             <StyledTableCell style={{backgroundColor:'grey', color:'white', textAlign:'center'}}>Update</StyledTableCell>
//           </TableRow>
//         </TableHead>
//         <TableBody>
//           {rows.map((row) => (
//             <StyledTableRow  key={row.name}>
//               <StyledTableCell style={{textAlign:'center'}} component="th" scope="row">
//                1
//               </StyledTableCell>
//               <StyledTableCell style={{textAlign:'center'}} component="th" scope="row">
//                 {row.name}
//               </StyledTableCell>
//               <StyledTableCell  style={{textAlign:'center'}} >{row.calories}</StyledTableCell>
//               <StyledTableCell style={{textAlign:'center'}} >{row.fat}</StyledTableCell>
//               <StyledTableCell style={{textAlign:'center'}}>{row.carbs}</StyledTableCell>
//               <StyledTableCell style={{textAlign:'center'}}>{row.protein}</StyledTableCell>
//               <StyledTableCell style={{textAlign:'center'}}><button style={{backgroundColor:'skyblue'}}>Update</button></StyledTableCell>
//               <StyledTableCell style={{textAlign:'center'}}><button style={{backgroundColor:'red', color:'white'}}>Delete</button></StyledTableCell>
//             </StyledTableRow>
//           ))}
//         </TableBody>
//       </Table>
//     </TableContainer>
//   );
// }

import * as React from "react";
import { styled } from "@mui/material/styles";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { useEffect } from "react";
import { useState } from "react";
import { fetchData } from "../../components/Constants/Constant";
import TablePagination from "@mui/material/TablePagination";
import Edituser from "./Edituser";

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  // '&:nth-of-type(odd)': {
  //   backgroundColor: theme.palette.action.hover,
  // },
  // hide last border
  "&:last-child td, &:last-child th": {
    border: 0,
  },
}));

export default function Employeelist() {
  const [loading, setLoading] = useState(true);
  const [userObject, setUserObject] = useState([]);

  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(4);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  // const handleEditUserDetails = (event, someParameter) => {
  //   alert(someParameter.firstname)
  //   console.log("rowInfo is", someParameter);

  // };

  const [show, setShow] = useState(false);
  const [selectedData, setSelectedData] = useState([]);

  const handleEditUserDetails = (event, someParameter) => {
    setSelectedData(someParameter);
    setShow(true);
  };

  const hideModal = () => {
    setShow(false);
  };

  useEffect(() => {
    fetchData().then((employees) => {
      // console.log("The data, ", employees.User[0].firstname)
      //setUserObject(employees)
      setUserObject(employees.User);

      //    const items = employees.User.map( (data, index) => (

      //    setUserObject({
      //     firstname: data.firstname,
      //     lastname: data.lastname,
      //     email: data.email,
      //     password: data.password,
      //     phone: data.phone,
      //     role: data.role
      //   })
      //   // console.log(items)
      // ))

      if (employees) {
        setLoading(false);
      }
    });
  }, [loading]);

  //   function HandleDeleteButton(event, someParameter){
  //     //do with event
  //     alert(someParameter)
  // }

  const HandleDeleteButton = (event, someParameter) => {
    alert(someParameter);
  };

  return (
    <div>
      {loading ? (
        "Please wait..."
      ) : (
        <TableContainer
          style={{ width: "1000px", marginLeft: "75px" }}
          component={Paper}
        >
          <Table aria-label="customized table">
            <TableHead>
              <TableRow>
                <StyledTableCell
                  style={{
                    backgroundColor: "grey",
                    color: "white",
                    textAlign: "center",
                  }}
                >
                  Sl No{" "}
                </StyledTableCell>
                <StyledTableCell
                  style={{
                    backgroundColor: "grey",
                    color: "white",
                    textAlign: "center",
                  }}
                >
                  Firstname{" "}
                </StyledTableCell>
                <StyledTableCell
                  style={{
                    backgroundColor: "grey",
                    color: "white",
                    textAlign: "center",
                  }}
                >
                  Lastname{" "}
                </StyledTableCell>
                <StyledTableCell
                  style={{
                    backgroundColor: "grey",
                    color: "white",
                    textAlign: "center",
                  }}
                >
                  Email
                </StyledTableCell>
                <StyledTableCell
                  style={{
                    backgroundColor: "grey",
                    color: "white",
                    textAlign: "center",
                  }}
                >
                  Phone
                </StyledTableCell>
                <StyledTableCell
                  style={{
                    backgroundColor: "grey",
                    color: "white",
                    textAlign: "center",
                  }}
                >
                  Role
                </StyledTableCell>
                <StyledTableCell
                  style={{
                    backgroundColor: "grey",
                    color: "white",
                    textAlign: "center",
                  }}
                >
                  Address
                </StyledTableCell>
                <StyledTableCell
                  style={{
                    backgroundColor: "grey",
                    color: "white",
                    textAlign: "center",
                  }}
                >
                  Update
                </StyledTableCell>
                <StyledTableCell
                  style={{
                    backgroundColor: "grey",
                    color: "white",
                    textAlign: "center",
                  }}
                >
                  Delete
                </StyledTableCell>
              </TableRow>
            </TableHead>

            <TableBody>
              {userObject
                .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                .map((row, index) => (
                  <StyledTableRow key={row.name}>
                    <StyledTableCell
                      style={{ textAlign: "center" }}
                      component="th"
                      scope="row"
                    >
                      {index + 1}
                    </StyledTableCell>
                    <StyledTableCell
                      style={{ textAlign: "center" }}
                      component="th"
                      scope="row"
                    >
                      {row.firstname}
                    </StyledTableCell>

                    <StyledTableCell style={{ textAlign: "center" }}>
                      {row.lastname}
                    </StyledTableCell>
                    <StyledTableCell style={{ textAlign: "center" }}>
                      {row.email}
                    </StyledTableCell>
                    <StyledTableCell style={{ textAlign: "center" }}>
                      {row.phone}
                    </StyledTableCell>
                    <StyledTableCell style={{ textAlign: "center" }}>
                      {row.role}
                    </StyledTableCell>
                    <StyledTableCell style={{ textAlign: "center" }}>
                      {row.address}
                    </StyledTableCell>
                    <StyledTableCell style={{ textAlign: "center" }}>
                      <button
                        style={{ backgroundColor: "green", color: "white" }}
                        onClick={(e) => {
                          handleEditUserDetails(e, row);
                        }}
                      >
                        Update
                      </button>
                    </StyledTableCell>
                    <StyledTableCell style={{ textAlign: "center" }}>
                      <button
                        style={{ backgroundColor: "red", color: "white" }}
                        onClick={(e) => {
                          HandleDeleteButton(e, row._id);
                        }}
                      >
                        Delete
                      </button>
                    </StyledTableCell>
                  </StyledTableRow>
                ))}
            </TableBody>
          </Table>
          <TablePagination
            rowsPerPageOptions={[4, 7, 10, 100]}
            component="div"
            count={userObject.length}
            rowsPerPage={rowsPerPage}
            page={page}
            onPageChange={handleChangePage}
            onRowsPerPageChange={handleChangeRowsPerPage}
          />
          {show && <Edituser details={selectedData} handleClose={hideModal} />}
        </TableContainer>
      )}
    </div>
  );
}
