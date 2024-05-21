import * as React from "react";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import Dropdown from "./Dropdown";
import { useState } from "react";
import { APIKey } from "../../components/Constants/Constant";
// TODO remove, this demo shouldn't need to reset the theme.
import "../users/Createuser.scss";

const defaultTheme = createTheme();

export default function Createuser() {
  //Get data for Role
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("");
  const [address, setAddress] = useState("");
  const [error, setError] = useState(false);

  const HandletoGetRole = (roleData) => {
    setRole(roleData);
  };

  const handleSubmit = (e) => {
    const checkemail = checkemailValidOrNot(email);
    console.log(checkemail);
    e.preventDefault();
    if (checkemail) {
      if (
        firstName.length === 0 ||
        lastName.length === 0 ||
        email.length === 0 ||
        phone.length === 0 ||
        password.length === 0 ||
        role.length === 0 ||
        address.length === 0 ||
        checkemail === false
      ) {
        setError(true);
      } else {
        let mydata = {
          firstname: firstName,
          lastname: lastName,
          email: email,
          phone: phone,
          password: password,
          address: address,
          role: role,
        };
        loginUser(mydata);
      }
    } else {
      if (
        firstName.length === 0 ||
        lastName.length === 0 ||
        email.length === 0 ||
        phone.length === 0 ||
        password.length === 0 ||
        role.length === 0 ||
        address.length === 0 ||
        checkemail === false
      ) {
        setError(true);
      } else {
      }
      alert("Please enter valid email");
      setEmail("");
    }
  };

  function loginUser(userdata) {
    let data = userdata;
    fetch(`${APIKey}/Createuser`, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    }).then((resp) => {
      resp.json().then((respData) => {
        console.warn("result", respData.result.status);
        if (respData.result.status === 200) {
          cleartextfield(respData);
        } else {
          alert("User creation failed, please try again later");
        }
      });
    });
  }

  const cleartextfield = (resp) => {
    alert(resp.result.msg);
    setFirstName("");
    setLastName("");
    setEmail("");
    setPassword("");
    setPhone("");
    setAddress("");
    //setRole('');
    setError(false);
  };

  // async function loginUser(userdata) {
  //   var resp;
  //   return fetch("http://localhost:2000/Createuser", {
  //     method: "POST",
  //     headers: {
  //       "Content-Type": "application/json"
  //     },
  //     body: JSON.stringify(userdata)
  //   }).then(response => {
  //     resp = response;
  //     return response.json();
  //   }).then(json => {
  //     return {
  //       response: resp,
  //       json: json,
  //       error: !resp.ok
  //     };
  //   });
  // }

  // const handleSubmit = (event) => {
  //   event.preventDefault();
  //   const data = new FormData(event.currentTarget);

  //   let mydata = {
  //     firstname: data.get("lastName"),
  //     lastname: data.get("firstName"),
  //     email: data.get("email"),
  //     password: data.get("password"),
  //     role: role
  //   };
  //   console.log(mydata);
  // };

  function checkemailValidOrNot(email) {
    let re =
      /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (re.test(email)) {
      return true;
    } else {
      return false;
    }
  }

  return (
    <ThemeProvider theme={defaultTheme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            marginLeft: "10px",
          }}
        >
          <Box
            component="form"
            noValidate
            onSubmit={handleSubmit}
            sx={{ mt: -5 }}
          >
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <TextField
                  autoComplete="given-name"
                  name="firstName"
                  required
                  fullWidth
                  id="firstName"
                  value={firstName}
                  label="First Name"
                  autoFocus
                  onChange={(e) => setFirstName(e.target.value)}
                />
              </Grid>
              {error && firstName.length <= 0 ? (
                <label className="Errorlabel">First Name can't be Empty</label>
              ) : (
                ""
              )}
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="lastName"
                  value={lastName}
                  label="Last Name"
                  name="lastName"
                  autoComplete="family-name"
                  onChange={(e) => setLastName(e.target.value)}
                />
              </Grid>
              {error && lastName.length <= 0 ? (
                <label className="Errorlabel">Last Name can't be Empty</label>
              ) : (
                ""
              )}
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="email"
                  value={email}
                  label="Email Address"
                  name="email"
                  autoComplete="email"
                  onChange={(e) => setEmail(e.target.value)}
                />
              </Grid>
              {error && email.length <= 0 ? (
                <label className="Errorlabel">Email can't be Empty</label>
              ) : (
                ""
              )}
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="phone"
                  value={phone}
                  label="phone"
                  name="phone"
                  autoComplete="phone"
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
              </Grid>
              {error && phone.length <= 0 ? (
                <label className="Errorlabel">Phone can't be Empty</label>
              ) : (
                ""
              )}

              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="Address"
                  value={address}
                  label="Address"
                  name="Address"
                  autoComplete="Address"
                  onChange={(e) => setAddress(e.target.value)}
                />
              </Grid>
              {error && address.length <= 0 ? (
                <label className="Errorlabel">Address can't be Empty</label>
              ) : (
                ""
              )}

              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  name="password"
                  label="Password"
                  type="password"
                  id="password"
                  value={password}
                  autoComplete="new-password"
                  onChange={(e) => setPassword(e.target.value)}
                />
              </Grid>
              {error && password.length <= 0 ? (
                <label className="Errorlabel">password can't be Empty</label>
              ) : (
                ""
              )}
              <Grid item xs={12}>
                <Dropdown handleDataChange={HandletoGetRole} />
                {/* <div>
                  <p>role : {role}</p>
                </div> */}
              </Grid>
            </Grid>
            {error && role.length <= 0 ? (
              <label className="Errorlabel">Please select the role</label>
            ) : (
              ""
            )}
            <Button
              style={{ backgroundColor: "gray" }}
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 4, mb: 10 }}
            >
              Create User
            </Button>
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
  );
}
