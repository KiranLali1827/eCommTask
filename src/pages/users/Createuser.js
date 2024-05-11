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
// TODO remove, this demo shouldn't need to reset the theme.


const defaultTheme = createTheme();

export default function Createuser() {

  const apiKey = process.env.REACT_APP_API_URL;

  //Get data for Role
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("");
  const [error, setError] = useState(false);

  const HandletoGetRole = (roleData) => {
    setRole(roleData);
    //console.log("roleData",roleData)
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (
      firstName.length == 0 ||
      lastName.length == 0 ||
      email.length === 0 ||
      phone.length === 0 ||
      password.length === 0 ||
      role.length === 0
    ) {
      setError(true);
    } else {
      let mydata = {
        firstname: firstName,
        lastname: lastName,
        email: email,
        phone: phone,
        password: password,
        role: role,
      };
      console.log("Create user data : ", mydata);
      loginUser(mydata);
    }
  };

  function loginUser(userdata) {
    console.log("apiKey",(`${apiKey}/Createuser`));
    let data = userdata;
     console.warn(process.env.REACT_APP_API_URL);
    fetch(`${apiKey}/Createuser`, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    }).then((resp) => {
      // console.warn("resp",resp);;
      resp.json().then((respData) => {
        console.warn("result", respData.result.status);
        if (respData.result.status === 200) {
          cleartextfield(respData)
        } else {
          alert("User creation failed, please try again later")
        }
      });
    });
  }

  const cleartextfield = (resp) => {
   alert(resp.result.msg)
  }

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
                  label="phone"
                  name="phone"
                  autoComplete="phone"
                  onChange={(e) => setPhone(e.target.value)}
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
                  name="password"
                  label="Password"
                  type="password"
                  id="password"
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
                <div>
                  <p>role : {role}</p>
                </div>
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
