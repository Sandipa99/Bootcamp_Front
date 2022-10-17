import React, { useState } from "react";
import { useDispatch,useSelector } from "react-redux";
import { registerAction } from "../../actions/supplierloginactions.js";
import { useNavigate } from "react-router-dom";
import "./Register.css";

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
  Container,
  Row,
  Col,
} from "reactstrap";

const SupplierRegister = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [supplier, setSupplier] = useState({
    username: "",
    password: "",
    address: "",
    phoneNo: "",
    name: "",
  });

  const handleChange = (event) => {
    const newSupplier = { ...supplier };
    newSupplier[event.target.name] = event.target.value;
    setSupplier(newSupplier);
  };
  
  const lgn = useSelector((state) => state.supplierlogin);

  const handleSubmit = (event) => {
    event.preventDefault();
    let name = document.getElementById("name").value;
    let username = document.getElementById("username").value;
    let password = document.getElementById("password").value;
    let address = document.getElementById("address").value;
    let phoneNo = document.getElementById("phoneNo").value;

    let body = {
      name: name,
      username: username,
      password: password,
      address: address,
      phoneNo: phoneNo,
    };
    dispatch(registerAction(body));
    
  };
  console.log(lgn);

  return (
    <>
      <div className="registerpage">
        <Col className="registercontainer" lg="6" md="8">
          <Card className="bg-secondary-register shadow border-0-register">
            <CardHeader className="bg-transparent-register pb-5-register">
              <div className="text-center-register text-muted-register mb-4-register">
                <medium>Sign up with credentials</medium>
              </div>
            </CardHeader>
            <CardBody className="px-lg-5 py-lg-5">
              <Form role="form" onSubmit={handleSubmit}>
                <FormGroup>
                  <InputGroup className="input-group-alternative-register mb-3-register">
                    <Input
                      type="username"
                      className="form-control"
                      placeholder="Username"
                      id="username"
                      aria-describedby="usernameHelp"
                      name="username"
                      onChange={handleChange}
                      required
                    />
                  </InputGroup>
                </FormGroup>
                <FormGroup>
                  <InputGroup className="input-group-alternative-register mb-3-register">
                    <input
                      type="name"
                      className="form-control"
                      placeholder="Name"
                      id="name"
                      aria-describedby="nameHelp"
                      name="name"
                      onChange={handleChange}
                    />
                  </InputGroup>
                </FormGroup>
                <FormGroup>
                  <InputGroup className="input-group-alternative-register mb-3-register">
                    <Input
                      placeholder="Address"
                      type="address"
                      className="form-control"
                      id="address"
                      name="address"
                      onChange={handleChange}
                      required
                    />
                  </InputGroup>
                </FormGroup>
                <FormGroup>
                  <InputGroup className="input-group-alternative-register mb-3-register">
                    <input
                      type="number"
                      placeholder="PhoneNo"
                      className="form-control"
                      id="phoneNo"
                      name="phoneNo"
                      onChange={handleChange}
                    />
                  </InputGroup>
                </FormGroup>
                <FormGroup>
                  <InputGroup className="input-group-alternative-register">
                    <Input
                      placeholder="Password"
                      type="password"
                      id="password"
                      autoComplete="off"
                      className="form-control"
                      onChange={handleChange}
                      required
                    />
                  </InputGroup>
                </FormGroup>

                <Button type="submit" value="Submit" color="primary">
                  Create Account
                </Button>
              </Form>
            </CardBody>
          </Card>
        </Col>
      </div>
    </>
  );
};

export default SupplierRegister;
