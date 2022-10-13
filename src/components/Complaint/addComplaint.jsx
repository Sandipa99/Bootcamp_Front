// Functional component
import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

import "./Complaint.css";
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
// step1:
//import Joi from "joi-browser";

const AddComplaint = () => {
  // value, name, handleOnChange(), handleSubmit()
  // react hook methods - useState() - define state of component
  // useEffect() - called at the time of page loading and when there is change in state

  // Define state using useState
  let navigate = useNavigate();

  const [comp, setComp] = useState({
    complaint: "",
  });

  //Step 2:  Create schema obj for validating form data
  // const schema = {
  //   empName: Joi.string().alphanum().min(3).max(30).required(),
  //   salary: Joi.number().integer().min(5000).max(200000).required(),
  //   dob: Joi.date().iso().required(),
  //   email: Joi.string()
  //     .email({
  //       minDomainSegments: 2,
  //       tlds: { allow: ["com", "net"] },
  //     })
  //     .required(),
  //   password: Joi.string().required(),
  // };

  // // Step 3: Validate
  // const validate = () => {
  //   const errors = {}; //object type local variable
  //   const result = Joi.validate(emp, schema, {
  //     abortEarly: false,
  //   });
  //   console.log(result);
  //   // setting error messages to error properties
  //   // ex: errors[username] = "username is required";
  //   // ex: errors[password] = "password is required";
  //   if (result.error != null)
  //     for (let item of result.error.details) {
  //       errors[item.path[0]] = item.message;
  //     }
  //   return Object.keys(errors).length === 0 ? null : errors;
  // };

  const handleChange = (event) => {
    console.log(event.target.name); // returns field name
    console.log(event.target.value); // retruns filed value

    // copy emp details to newEmp obj
    const newComp = { ...comp };

    //newEmp.empId =10;
    //newEmp["empId"] = 10;
    //update newEmp object
    newComp[event.target.name] = event.target.value;

    // update emp obj with newEmp obj details
    setComp(newComp);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    //axios.post(url, emp);
    let coe = document.getElementById("input-subject").value;
    const newComp = {
      complaint: coe,
    };
    // validate form data using validate method
    //const result = validate();
    //console.log(result);

    axios
      .post("http://localhost:8080/farmer/addComplaint", newComp)
      .then((res) => {
        console.log(res);
        alert("Added new complaint " + res.data.complaint + " successfully!");
        navigate("/farmer/dashboard");
      })
      .catch((error) => console.log(error));
  };
  console.log(comp);
  return (
    <div>
      {/* <Navigation /> */}
      <form onSubmit={handleSubmit}>
        <Card className="card-profile shadow attendance">
          <Row className="justify-content-center">
            <Col className="order-lg-2" lg="3"></Col>
          </Row>
          <CardHeader className="text-center border-0 pt-8 pt-md-4 pb-0 pb-md-4">
            <div className="d-flex justify-content-between font-attend">
              <h5>Register Complaint</h5>
            </div>
          </CardHeader>
          <CardBody className="pt-0 pt-md-4">
            <div className="text-center">
              {/* {this.state.message && (
                  <p className="message"> {this.state.message} </p>
                )} */}
              <FormGroup>
                <Input
                  className="form-control-alternative"
                  id="input-subject"
                  type="text"
                  placeholder="Write your Complaint Here"
                  // value={comp.complaint}
                  onChange={handleChange}
                  required
                />
              </FormGroup>
              <Button type="submit" value="Submit" color="primary">
                Add Complaint
              </Button>
            </div>

            {/* <Button
              className="float-center"
              color="default"
              size="sm"
              onClick={this.postDataHandler}
            >
              Submit
            </Button> */}
            {/* 
            <div className="attendance-link">
              <Button
                className="float-center"
                color="default"
                size="sm"
                href="/checkattendance"
              >
                Check Your Attendance
              </Button>
            </div> */}
          </CardBody>
        </Card>
      </form>
    </div>
    // <div className="ComplaintPage">
    //   <div className="w-50 mx-auto mt-3">
    //     <p className="display-6">Add New Complaint</p>
    //     <form className="border p-3" onSubmit={handleSubmit}>
    //       <div className="mb-3">
    //         <label htmlFor="complaint" className="form-label float-start">
    //           Complaint
    //         </label>
    //         <input
    //           type="complaint"
    //           className="form-control"
    //           id="complaint"
    //           aria-describedby="complaintHelp"
    //           value={comp.complaint}
    //           name="complaint"
    //           onChange={handleChange}
    //         />
    //       </div>
    //       <div className="d-grid gap-2">
    //         <button type="submit" className="btn btn-primary">
    //           Add
    //         </button>
    //       </div>
    //     </form>
    //   </div>
    // </div>
  );
};

export default AddComplaint;
