import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { loginAction } from "../../actions/adminloginactions";

import "./Login.css";
import {
  Button,
  Card,
  CardHeader,
  CardBody,
  FormGroup,
  Form,
  Input,
  InputGroup,
  Row,
  Col,
} from "reactstrap";

const AdminLogin = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [login, setLogin] = useState({
    username: "",
    password: "",
  });


  // connect store to get login and errMsg info

  const lgn = useSelector((state) => state.adminlogin);
  const handleChange = (event) => {
    const newLogin = { ...login };
    newLogin[event.target.name] = event.target.value;
    setLogin(newLogin);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    dispatch(loginAction(login));
    // Based on loggedIn state redirect user to home or any other page
    setTimeout(() => {
      if (lgn.isLoggedIn) {
        alert("Admin logged in successfully!");
        navigate("/admin/dashboard");
      }
    }, 500);
  };

  return (
    <>
      <div className="loginpage">
        <Col className="logincontainer" lg="5" md="7">
          <Card className="bg-secondary-login shadow border-0-login">
            <CardHeader className="bg-transparent-login pb-5-login">
              <div className="text-muted-login text-center-login mt-2 mb-3">
                <div className="text-center-login text-muted-login mb-4-login">
                  <small style={{ color: "black" }}>
                    Sign in with credentials
                  </small>
                </div>
              </div>
            </CardHeader>
            <CardBody className="px-lg-5 py-lg-5">
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
                      value={login.username}
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
                      value={login.password}
                      onChange={handleChange}
                      required
                    />
                  </InputGroup>
                </FormGroup>
                <Button type="submit" value="Submit" color="primary">
                  Login
                </Button>
              </Form>
            </CardBody>
          </Card>
        </Col>
      </div>
    </>

  );
};

export default AdminLogin;
