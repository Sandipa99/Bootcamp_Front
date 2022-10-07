import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { registerAction } from "../actions/farmerloginactions.js";
import { useNavigate } from "react-router-dom";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";

function Copyright(props) {
  return (
    <Typography
      variant="body2"
      color="text.secondary"
      align="center"
      {...props}
    >
      {"Copyright © "}
      <Link color="inherit" href="https://mui.com/">
        Your Website
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

const theme = createTheme();

const FarmerRegister = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [farmer, setFarmer] = useState({
    username: "",
    password: "",
    address: "",
    phoneNo: "",
    name: "",
  });

  //const farm = useSelector((state) => state.login.farmer);

  const handleChange = (event) => {
    const newFarmer = { ...farmer };
    newFarmer[event.target.name] = event.target.value;
    setFarmer(newFarmer);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(registerAction(farmer));
    alert("Farmer  added successfully!");
    navigate("/");
  };
  console.log(farmer);
  return (
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign up For Farmer
          </Typography>
          <Box
            component="form"
            noValidate
            onSubmit={handleSubmit}
            sx={{ mt: 3 }}
          >
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <TextField
                  className="form-control"
                  autoComplete="given-name"
                  name="name"
                  required
                  fullWidth
                  id="name"
                  label="Name"
                  autoFocus
                  type="name"
                  value={farmer.name}
                  onChange={handleChange}
                  //           aria-describedby="nameHelp"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  className="form-control"
                  name="username"
                  label="Username"
                  type="username"
                  id="username"
                  autoComplete="new-username"
                  value={farmer.username}
                  onChange={handleChange}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  className="form-control"
                  name="phoneNo"
                  label="PhoneNo"
                  type="number"
                  id="phoneNo"
                  autoComplete="new-address"
                  value={farmer.phoneNo}
                  onChange={handleChange}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  className="form-control"
                  name="address"
                  label="Address"
                  type="address"
                  id="address"
                  autoComplete="new-address"
                  value={farmer.address}
                  onChange={handleChange}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  className="form-control"
                  name="password"
                  label="Password"
                  type="password"
                  id="password"
                  autoComplete="new-password"
                  value={farmer.password}
                  onChange={handleChange}
                />
              </Grid>

              <Grid item xs={12}>
                {/* <FormControlLabel
                  control={
                    <Checkbox value="allowExtraEmails" color="primary" />
                  }
                  label="I want to receive inspiration, marketing promotions and updates via email."
                /> */}
              </Grid>
            </Grid>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Sign Up
            </Button>
            <Grid
              container
              spacing={0}
              direction="column"
              alignItems="center"
              justifyContent="center"
              style={{ minHeight: "5vh" }}
            >
              <Grid container justifyContent="flex-end">
                <Grid item xs={3}>
                  <Link href="#" variant="body2">
                    Already have an account? Sign in
                  </Link>
                </Grid>
              </Grid>
            </Grid>
          </Box>
        </Box>
        <Copyright sx={{ mt: 5 }} />
      </Container>
    </ThemeProvider>
    // <div>
    //   <h1>Register Page</h1>
    //   <div>
    //     <form
    //       onSubmit={handleSubmit}
    //       className="w-50 mx-auto border border-secondary rounded mt-4 p-2 shadow-lg p-3 mb-5 bg-body rounded"
    //     >
    //       <p className="text-center fs-4 bg-secondary text-white">
    //         Register Form
    //       </p>

    //       <div className="mb-3">
    //         <label htmlFor="name" className="form-label">
    //           Name
    //         </label>
    //         <input
    //           type="name"
    //           className="form-control"
    //           id="name"
    //           aria-describedby="nameHelp"
    //           name="name"
    //           value={farmer.name}
    //           onChange={handleChange}
    //         />
    //       </div>
    //       <div className="mb-3">
    //         <label htmlFor="username" className="form-label">
    //           Username
    //         </label>
    //         <input
    //           type="text"
    //           className="form-control"
    //           id="username"
    //           name="username"
    //           value={farmer.username}
    //           onChange={handleChange}
    //         />
    //       </div>

    //       <div className="mb-3">
    //         <label htmlFor="password" className="form-label">
    //           Password
    //         </label>
    //         <input
    //           type="password"
    //           className="form-control"
    //           id="password"
    //           name="password"
    //           value={farmer.password}
    //           onChange={handleChange}
    //         />
    //       </div>
    //       <div className="mb-3">
    //         <label htmlFor="address" className="form-label">
    //           Address
    //         </label>
    //         <input
    //           type="address"
    //           className="form-control"
    //           id="address"
    //           name="address"
    //           value={farmer.address}
    //           onChange={handleChange}
    //         />
    //       </div>
    //       <div className="mb-3">
    //         <label className="form-label">
    //           Phone Number
    //         </label>
    //         <input
    //           type="number"
    //           className="form-control"
    //           id="phoneNo"
    //           name="phoneNo"
    //           value={farmer.phoneNo}
    //           onChange={handleChange}
    //         />
    //       </div>

    //       <div className="d-grid gap-2 mt-3">
    //         <button type="submit" className="btn btn-secondary">
    //           Submit
    //         </button>
    //       </div>
    //     </form>
    //   </div>
    // </div>
  );
};

export default FarmerRegister;
