import React from "react";
import TextField from "@mui/material/TextField";
import { Button, Grid } from "@mui/material";
import { useState } from "react";
import {
  APIKey,
  Getuserdata,
  checkemailValidOrNot,
  update,
} from "../../components/Constants/Constant";

// import Dropdown from "./Dropdown";

const Edituser = ({ handleClose, details, refresh_data_callback }) => {
  const [firstName, setFirstName] = useState(details.firstname);
  const [lastName, setLastName] = useState(details.lastname);
  const [email, setEmail] = useState(details.email);
  const [phone, setPhone] = useState(details.phone);
  const [role, setRole] = useState(details.role);
  const [address, setAddress] = useState(details.address);
  const [_id, setID] = useState(details._id);
  const [error, setError] = useState(false);

  

  // const send_data_back_to_parent = () => {
  //   setRefresh_check(inputValue);
  // };

  const send_data_back_to_parent = (data) => {
    refresh_data_callback(data)
  };


  const updateuser = (e, someParameter) => {
    // alert(`Hello ${_id} & ${firstName}`);
    // console.log(`The url is : ${APIKey}${update}/${_id}`)

    const checkemail = checkemailValidOrNot(email);
    e.preventDefault();
    if (checkemail) {
      if (
        firstName.length === 0 ||
        lastName.length === 0 ||
        checkemail === false ||
        phone.length === 0 ||
        address.length === 0
        //  role.length === 0
      ) {
        setError(true);
      } else {
        let User_Updated_Data = {
          firstname: firstName,
          lastname: lastName,
          email: email,
          phone: phone,
          address: address,
          // role: role,
        };
        CallUpdateUserApi(User_Updated_Data);
      }
    } else {
      if (
        firstName.length === 0 ||
        lastName.length === 0 ||
        checkemail === false ||
        phone.length === 0 ||
        address.length === 0 ||
        role.length === 0
      ) {
        setError(true);
      } else {
      }
      alert("Please enter valid email");
      setEmail("");
    }

    // handleClose();
  };

  function CallUpdateUserApi(userdata) {
    // console.log("The user edited data is", userdata);

    fetch(`${APIKey}${update}/${_id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(userdata),
    }).then((resp) => {
      resp
        .json()
        .then((data) =>
          data.result.acknowledged
            ? clearTextfields()
            : alert("Error while updating user")
        )
        .catch((err) => alert(err));
    });
  }

  const clearTextfields = () => {
    alert("User updated successfully");
    setFirstName("");
    setLastName("");
    setEmail("");
    setPhone("");
    setAddress("");
    //setRole('');
    setError(false);
    send_data_back_to_parent(true)
    handleClose();
  };

  return (
    <div className="modal display-block">
      <section className="modal-main">
        <div className="App">
          <br></br>
          <br></br>

          <div>
            <h1 style={{ color: "green" }}>Edit User Details</h1>
          </div>
          <br></br>
          <br></br>

          <div>
            <Grid container spacing={4}>
              <Grid item xs={4}>
                <h5>Firstname</h5>
                <TextField
                  id="outlined-basic"
                  variant="outlined"
                  value={firstName}
                  onChange={(e) => setFirstName(e.target.value)}
                />
                <br></br>
                {error && firstName.length <= 0 ? (
                  <label className="Errorlabel">
                    First Name can't be Empty
                  </label>
                ) : (
                  ""
                )}
              </Grid>

              <Grid item xs={4}>
                <h5>Lastname</h5>
                <TextField
                  id="outlined-basic"
                  variant="outlined"
                  value={lastName}
                  onChange={(e) => setLastName(e.target.value)}
                />
                <br></br>
                {error && lastName.length <= 0 ? (
                  <label className="Errorlabel">Last Name can't be Empty</label>
                ) : (
                  ""
                )}
              </Grid>
              <Grid item xs={4}>
                <h5>Email</h5>
                <TextField
                  id="outlined-basic"
                  variant="outlined"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
                <br></br>
                {error && email.length <= 0 ? (
                  <label className="Errorlabel">Email can't be Empty</label>
                ) : (
                  ""
                )}
              </Grid>
            </Grid>
          </div>
          <br></br>
          <div>
            <Grid container spacing={4}>
              <Grid item xs={4}>
                <h5>Phone</h5>
                <TextField
                  id="outlined-basic"
                  variant="outlined"
                  value={phone}
                  onChange={(e) => {
                    const re = /^[0-9\b]+$/;
                    // if value is not blank, then test the regex
                    if (e.target.value.length > 10) {
                      alert("Mobile number should not be more than 10 numbers");
                    } else if (
                      e.target.value === "" ||
                      re.test(e.target.value)
                    ) {
                      setPhone(e.target.value);
                    }
                  }}
                />
                <br></br>
                {error && phone.length <= 0 ? (
                  <label className="Errorlabel">
                    Phone number can't be Empty
                  </label>
                ) : (
                  ""
                )}
              </Grid>

              {/* <Grid item xs={4}>
                <h5>Role</h5>

                <Dropdown
                  id="outlined-basic"
                  variant="outlined"
                  value={role}
                  onChange={(e) => setRole(e.target.value)}
                />
                <br></br>
                {error && role.length <= 0 ? (
                  <label className="Errorlabel">Role can't be Empty</label>
                ) : (
                  ""
                )}
              </Grid> */}

              <Grid item xs={4}>
                <h5>Address</h5>
                <TextField
                  id="outlined-basic"
                  variant="outlined"
                  value={address}
                  onChange={(e) => setAddress(e.target.value)}
                />
                <br></br>
                {error && address.length <= 0 ? (
                  <label className="Errorlabel">Address can't be Empty</label>
                ) : (
                  ""
                )}
                <br></br>
                <br></br>
                <h5 style={{ color: "red" }}>{`Address : ${address}`}</h5>
              </Grid>
            </Grid>
          </div>
          <br></br>
          <br></br>

          {/* <table class="table">
              <thead>
                <tr>
                  <th scope="col">Id</th>
                  <th scope="col">First</th>
                  <th scope="col">Last</th>
                  <th scope="col">Age</th>
                  <th scope="col">Location</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td align="right">{details?.firstname}</td>
                  <td>{details?.lastname}</td>
                  <td>{details?.email}</td>
                  <td>{details?.role}</td>
                  <td>{details?.phone}</td>
                </tr>
              </tbody>
            </table> */}
          {/* <button onClick={handleClose}>close</button> */}

          <Button
            // onClick={(e)=>{updateuser(e._id)}}
            style={{
              backgroundColor: "green",
              width: "200px",
              marginRight: "16px",
            }}
            type="submit"
            variant="contained"
            sx={{ mt: 2, mb: 8 }}
            onClick={(e) => {
              updateuser(e, e._id);
            }}
          >
            Update User
          </Button>
          <Button
            onClick={handleClose}
            style={{ backgroundColor: "red", width: "200px" }}
            type="submit"
            variant="contained"
            sx={{ mt: 2, mb: 8 }}
          >
            Cancel
          </Button>
        </div>
      </section>
    </div>
  );
};
export default Edituser;
