import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { registerAction } from "../../actions/farmerloginactions.js";
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
    alert("Farmer  added successfully!");
    navigate("/");
  };
  console.log(farmer);
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
                      // value={farmer.username}
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
                      // value={farmer.name}
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
                      // value={farmer.address}
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
                      // value={farmer.phoneNo}
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
                      // value={farmer.password}
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
    //         <label className="form-label">Phone Number</label>
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
