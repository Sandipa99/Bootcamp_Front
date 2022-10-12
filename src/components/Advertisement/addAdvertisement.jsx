// Functional component
import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

import "./Advertisement.css";
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

const AddAdvertisement = () => {
  // value, name, handleOnChange(), handleSubmit()
  // react hook methods - useState() - define state of component
  // useEffect() - called at the time of page loading and when there is change in state

  // Define state using useState
  let navigate = useNavigate();

  const [adv, setAdv] = useState({
    cropType: "",
    quantity: "",
    weight: "",
    price: "",
  });

  const handleChange = (event) => {
    console.log(event.target.name); // returns field name
    console.log(event.target.value); // retruns filed value

    // copy emp details to newEmp obj
    const newAdv = { ...adv };

    //newEmp.empId =10;
    //newEmp["empId"] = 10;
    //update newEmp object
    newAdv[event.target.name] = event.target.value;

    // update emp obj with newEmp obj details
    setAdv(newAdv);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    //axios.post(url, emp);
    let crop = document.getElementById("croptype").value;
    let quantity = document.getElementById("quantity").value;
    let weight = document.getElementById("weight").value;
    let price = document.getElementById("price").value;

    const newAdv = {
      cropType: crop,
      quantity: quantity,
      weight: weight,
      price: price,
    };
    // validate form data using validate method
    //const result = validate();
    //console.log(result);

    axios
      .post("http://localhost:8080/supplier/addAdvertisement", newAdv)
      .then((res) => {
        console.log(res);
        alert("New Advertisement added successfully!");
        navigate("/compalint");
      })
      .catch((error) => console.log(error));
  };
  console.log(adv);
  return (
    <div style={{ align: "center" }}>
      {/* <Navigation /> */}
      <form onSubmit={handleSubmit}>
        <Card className="card-profile shadow attendance">
          <Row className="justify-content-center">
            <Col className="order-lg-2" lg="3"></Col>
          </Row>
          <CardHeader className="text-center border-0 pt-8 pt-md-4 pb-0 pb-md-4">
            <div className="d-flex justify-content-between font-attend">
              <h5>Add Advertisement</h5>
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
                  id="croptype"
                  type="text"
                  placeholder="CropType"
                  // value={comp.complaint}
                  onChange={handleChange}
                  required
                />
              </FormGroup>
              <FormGroup>
                <Input
                  className="form-control-alternative"
                  id="quantity"
                  type="text"
                  placeholder="Quantity"
                  // value={comp.complaint}
                  onChange={handleChange}
                  required
                />
              </FormGroup>
              <FormGroup>
                <Input
                  className="form-control-alternative"
                  id="weight"
                  type="text"
                  placeholder="Weight"
                  // value={comp.complaint}
                  onChange={handleChange}
                  required
                />
              </FormGroup>
              <FormGroup>
                <Input
                  className="form-control-alternative"
                  id="price"
                  type="text"
                  placeholder="Price"
                  // value={comp.complaint}
                  onChange={handleChange}
                  required
                />
              </FormGroup>
              <Button type="submit" value="Submit" color="primary">
                Add Advertisement
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

export default AddAdvertisement;
