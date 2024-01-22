import * as React from "react";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import Dropdown from "../users/Dropdown"




// TODO remove, this demo shouldn't need to reset the theme.

const defaultTheme = createTheme();

export default function Createproductsection() {
  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log({
      email: data.get("email"),
      password: data.get("password"),
    });
  };


  const [age, setAge] = React.useState('');

  const handleChange = (event) => {
    setAge(event.target.value);
  };

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
              <Grid item xs={12} sm={6}>
                <TextField
                  required
                  fullWidth
                  id="Product_name"
                  label="SKU"
                  name="SKU_ID"
                  placeholder="MAC001"
                  
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  required
                  fullWidth
                  id="Product_name"
                  label="Product Name"
                  name="Product_name"
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  required
                  fullWidth
                  id="Serial"
                  label="Serial Number"
                  name="Serial"
                />
              </Grid>
              <Grid item xs={12} sm={6}> 
                <TextField
                     required
                     fullWidth
                     id="Model"
                     label="Model Number"
                     name="Model"
                />
              </Grid>
              <Grid item xs={12}> 
                <TextField
                     required
                     fullWidth
                     id="Short Description"
                     label="Short Description"
                     name="Short Description"
                />
              </Grid>
           
             
              <Grid item xs={12}>
              <Dropdown />
              </Grid>
             
              
            </Grid>

         
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
  );
}
