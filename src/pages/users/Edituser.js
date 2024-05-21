import React from "react";
import TextField from "@mui/material/TextField";
import { Button, Grid } from "@mui/material";
import Dropdown from "./Dropdown";
import { useState } from "react";

const Edituser = ({ handleClose, details }) => {
  const [firstName, setFirstName] = useState(details.firstname);
  const [lastName, setLastName] = useState(details.lastname);
  const [email, setEmail] = useState(details.email);
  const [phone, setPhone] = useState(details.phone);
  const [role, setRole] = useState(details.role);
  const [address, setAddress] = useState(details.address);
  const [error, setError] = useState(false);

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
                {/* <TextField
                  id="re_ps"
                  label="PS"
                  // value={this.state.re_pe_value}
                  // onChange={this.re_ps_handleChange('value')}
                  margin="normal"
                  type="number"
                  variant="filled"
                  style={{ paddingRight: "20px", width: "170px" }}
                /> */}
                <h5>Firstname</h5>
                <TextField
                  id="outlined-basic"
                  variant="outlined"
                  value={firstName}
                  onChange={(e) => setFirstName(e.target.value)}
                />
              </Grid>
              <Grid item xs={4}>
                <h5>Lastname</h5>
                <TextField
                  id="outlined-basic"
                  variant="outlined"
                  value={lastName}
                  onChange={(e) => setLastName(e.target.value)}
                />
              </Grid>
              <Grid item xs={4}>
                <h5>Email</h5>
                <TextField
                  id="outlined-basic"
                  variant="outlined"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
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
                  onChange={(e) => setPhone(e.target.value)}
                />
              </Grid>
              {/* <Grid item xs={4}>
                <h5>Firstname</h5>
                <div style={{width:'180px', marginLeft:'87px'}}>
                <Dropdown />
                </div>
              </Grid> */}
              <Grid item xs={4}>
                <h5>Role</h5>
                <TextField
                  id="outlined-basic"
                  variant="outlined"
                  value={role}
                  onChange={(e) => setRole(e.target.value)}
                />
              </Grid>
              <Grid item xs={4}>
                <h5>Address</h5>
                <TextField
                  id="outlined-basic"
                  variant="outlined"
                  value={address}
                  onChange={(e) => setAddress(e.target.value)}
                />
                <br></br>
                <br></br>
                <h5>
                  {address}
                </h5>
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
            onClick={handleClose}
            style={{
              backgroundColor: "green",
              width: "200px",
              marginRight: "16px",
            }}
            type="submit"
            variant="contained"
            sx={{ mt: 2, mb: 8 }}
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
