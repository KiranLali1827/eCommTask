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
import { useRef } from "react";

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

export default function Userslist() {
  const [loading, setLoading] = useState(true);
  const [userObject, setUserObject] = useState([]);

  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
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

  // function SlNo(i) {
  //   console.log("The sl no is ", i)
  //   oldText.current = 2
  //   return oldText.current + 1
  // }


  

//   function HandleDeleteButton(event, someParameter){
//     //do with event
//     alert(someParameter)
// }

const HandleDeleteButton = (event, someParameter) => {
  alert(someParameter)
}

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
                      <button style={{ backgroundColor: "skyblue" }}>
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
            rowsPerPageOptions={[5, 10, 100]}
            component="div"
            count={userObject.length}
            rowsPerPage={rowsPerPage}
            page={page}
            onPageChange={handleChangePage}
            onRowsPerPageChange={handleChangeRowsPerPage}
          />
        </TableContainer>
      )}
    </div>
  );
}
