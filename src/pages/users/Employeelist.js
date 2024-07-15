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
import {
  Getuserdata,
  Deleteuserdata,
} from "../../components/Constants/Constant";
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
  const [deletedEmployee, setdeletedEmployee] = useState(false)

  const handleEditEmployeeDetails = (event, someParameter) => {
    setSelectedData(someParameter);
    setShow(true);
  };

  const HandleDeleteEmployeeButton = (event, someParameter) => {
    // alert(someParameter);
    deleteAPiCallInEmployee(someParameter);
  };


  const refreshEmployeeonceupdated = (newData) => {
    console.log("The refresh value is", newData);
    if (newData) {
      Getuserdata().then((employees) => {
        FilterBasedOnEmployee(employees.User); 
        if (employees) {
          setLoading(false);
        }
      });
    } else {
      alert("Do not call refresh api")
    }
  };

  const deleteAPiCallInEmployee = (someParameter) => {
    Deleteuserdata(someParameter).then((employees) => {
      console.log("The data");
      setdeletedEmployee(true)
      //setUserObject(employees)
      //setUserObject(employees.User);

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

      // if (employees) {
      //   setLoading(false);
      // }
    });
  };

  const hideModal = () => {
    setShow(false);
  };

   const FilterBasedOnEmployee = (empArray) => {
    const filtered = empArray.filter(item => item.role === "Employee"); // Filter based on role
    console.log(filtered)
    setUserObject(filtered);
   // setFilteredData(filtered); // Update state with filtered array
  };

  

  useEffect(() => {
    Getuserdata().then((employees) => {
      FilterBasedOnEmployee(employees.User); 
      if (employees) {
        setLoading(false);
      }
    });
  },[deletedEmployee, loading, show]);

  //   function HandleDeleteButton(event, someParameter){
  //     //do with event
  //     alert(someParameter)
  // }

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
                          handleEditEmployeeDetails(e, row);
                        }}
                      >
                        Update
                      </button>
                    </StyledTableCell>
                    <StyledTableCell style={{ textAlign: "center" }}>
                      <button
                        style={{ backgroundColor: "red", color: "white" }}
                        onClick={(e) => {
                          HandleDeleteEmployeeButton(e, row._id);
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
          {show && <Edituser details={selectedData} handleClose={hideModal} refresh_data_callback={refreshEmployeeonceupdated} />}
        </TableContainer>
      )}
    </div>
  );
}
