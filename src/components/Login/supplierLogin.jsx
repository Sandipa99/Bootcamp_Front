import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { loginAction } from "../../actions/supplierloginactions";
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

const SupplierLogin = () => {
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

  const lgn = useSelector((state) => state.supplierlogin);

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
        alert("Supplier logged in successfully!");
        navigate("/supplier/dashboard");
      }
    }, 500);
  };


  return (
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
                    placeholder="Username"
                    className="form-control"
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
              <Button
                type="submit"
                value="Submit"
                color="primary"
              >
                Login
              </Button>
            </Form>
          </CardBody>
        </Card>
        <Row className="mt-3">
          <Col className="text-right" xs="8">
            <a className="text-light" href="/registersupplier">
              <h6>Create new account</h6>
            </a>
          </Col>
        </Row>
      </Col>
    </div>

  );
};

export default SupplierLogin;
