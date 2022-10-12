import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { loginAction } from "../../actions/farmerloginactions";
import Joi from "joi-browser";

import "./Login.css";
import {
  Button,
  Card,
  CardHeader,
  CardBody,
  FormGroup,
  Form,
  Input,
  InputGroupAddon,
  InputGroupText,
  InputGroup,
  Row,
  Col,
} from "reactstrap";

const FarmerLogin = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [login, setLogin] = useState({
    username: "",
    password: "",
  });

  const [errors, setErrors] = useState({});
  const [errRes, setErrRes] = useState("");

  //Step1:  Define schema to validate email and password
  const schema = {
    username: Joi.string().min(1).required(),
    password: Joi.string().min(1).max(30).required(),
  };

  // Step 2: Validate
  const validate = () => {
    const errors = {}; //object type local variable
    const result = Joi.validate(login, schema, {
      abortEarly: false,
    });
    // console.log(result.data);
    // setting error messages to error properties
    // ex: errors[username] = "username is required";
    // ex: errors[password] = "password is required";
    if (result.error != null)
      for (let item of result.error.details) {
        errors[item.path[0]] = item.message;
      }
    return Object.keys(errors).length === 0 ? null : errors;
  };

  // connect store to get login and errMsg info

  const lgn = useSelector((state) => state.farmerlogin);

  //setErrRes(useSelector((state) => state.login.errMsg));

  const handleChange = (event) => {
    const newLogin = { ...login };
    newLogin[event.target.name] = event.target.value;
    setLogin(newLogin);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    // Step3: Call validate function
    // validate login details with schema
    setErrors(validate());

    if (errors) return;

    // dispatch login action to rest api
    dispatch(loginAction(login));

    // Based on loggedIn state redirect user to home or any other page
    setTimeout(() => {
      console.log(lgn);
      if (lgn.isLoggedIn) {
        alert("Farmer logged in successfully!");
        navigate("/farmerDashboard");
      }
    }, 500);
  };

  return (
    <>
      <div className="loginpage">
        <Col className="logincontainer" lg="5" md="7">
          <Card className="bg-secondary-login shadow border-0-login">
            <CardHeader className="bg-transparent-login pb-5-login">
              {/* <div className="text-muted-login text-center-login mt-2 mb-3">
                <small>Sign in with</small>
              </div> */}
              <div className="text-muted-login text-center-login mt-2 mb-3">
                <div className="text-center-login text-muted-login mb-4-login">
                  <small style={{ color: "black" }}>
                    Sign in with credentials
                  </small>
                </div>
              </div>
              {/* <GoogleLogin /> */}
            </CardHeader>
            {/* {this.state.errorMessage && (
              <p className="error"> {this.state.errorMessage} </p>
            )} */}
            <CardBody className="px-lg-5 py-lg-5">
              {/* <div className="text-center-login text-muted-login mb-4-login">
                <h3 style={{ color: "black" }}>Sign in with credentials</h3>
              </div> */}

              <Form role="form" onSubmit={handleSubmit}>
                <FormGroup className="mb-3-login">
                  <InputGroup className="input-group-alternative-login">
                    <Input
                      type="username"
                      className="form-control"
                      placeholder="Username"
                      id="username"
                      aria-describedby="usernameHelp"
                      name="username"
                      //value={login.username}
                      onChange={handleChange}
                      required
                    />
                  </InputGroup>
                </FormGroup>
                <FormGroup>
                  <InputGroup className="input-group-alternative-login">
                    <Input
                      placeholder="Password"
                      type="password"
                      className="form-control"
                      id="password"
                      name="password"
                      //value={login.password}
                      onChange={handleChange}
                      required
                    />
                  </InputGroup>
                </FormGroup>
                <Button type="submit" value="Submit" color="primary">
                  Login
                </Button>

                {/* <div className="text-center-login">
                      <Button
                        className="my-4"
                        color="primary"
                        type="button"
                        onClick={this.handleSubmit}
                      >
                        Sign in
                      </Button>
                    </div> */}
              </Form>
            </CardBody>
          </Card>
          <Row className="mt-3">
            <Col className="text-right" xs="8">
              <a className="text-light" href="/registerfarmer">
                <h6>Create new account</h6>
              </a>
            </Col>
          </Row>
        </Col>
      </div>
    </>

    // <div className="w-50 mx-auto mt-4">
    //   {errRes && <p className="alert alert-danger">{errRes}</p>}
    //   <form
    //     onSubmit={handleSubmit}
    //     className="border border-secondary rounded mt-4 p-2 shadow p-3 mb-5 bg-body rounded"
    //   >
    //     <p className="text-center fs-4 bg-secondary text-white">Login Form</p>
    //     <div className="mb-3">
    //       <label htmlFor="username" className="form-label">
    //         Username
    //       </label>
    //       <input
    //         type="username"
    //         className="form-control"
    //         id="username"
    //         aria-describedby="usernameHelp"
    //         name="username"
    //         value={login.username}
    //         onChange={handleChange}
    //       />
    //       {errors && <small className="text-danger">{errors.email}</small>}
    //     </div>
    //     <div className="mb-3">
    //       <label htmlFor="password" className="form-label">
    //         Password
    //       </label>
    //       <input
    //         type="password"
    //         className="form-control"
    //         id="password"
    //         name="password"
    //         value={login.password}
    //         onChange={handleChange}
    //       />
    //       {errors && <small className="text-danger">{errors.password}</small>}
    //     </div>
    //     <div className="d-grid gap-2 mt-3">
    //       <button type="submit" className="btn btn-secondary">
    //         Submit
    //       </button>
    //     </div>
    //   </form>
    // </div>
  );
};

export default FarmerLogin;
