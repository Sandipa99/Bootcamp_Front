// Functional component
import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Navigation from "../Navigation/Navigation";
import Cookies from "universal-cookie";
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

const AddComplaint = () => {
  // value, name, handleOnChange(), handleSubmit()
  // react hook methods - useState() - define state of component
  // useEffect() - called at the time of page loading and when there is change in state

  // Define state using useState
  let navigate = useNavigate();
  const cookies = new Cookies();

  const [comp, setComp] = useState({
    complaint: "",
    username:""
  });

  const handleChange = (event) => {
    console.log(event.target.name); // returns field name
    console.log(event.target.value); // retruns filed value

    // copy comp details to newComp obj
    const newComp = { ...comp };

    //newComp.compId =10;
    //newComp["compId"] = 10;
    //update newComp object
    newComp[event.target.name] = event.target.value;

    // update comp obj with newComp obj details
    setComp(newComp);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    let coe = document.getElementById("input-subject").value;
    const newComp = {
      complaint: coe,
      username:cookies.get("username")
    };
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
       <Navigation /> 
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
              <FormGroup>
                <Input
                  className="form-control-alternative"
                  id="input-subject"
                  type="text"
                  placeholder="Write your Complaint Here"
                  onChange={handleChange}
                  required
                />
              </FormGroup>
              <Button type="submit" value="Submit" color="primary">
                Add Complaint
              </Button>
            </div>
          </CardBody>
        </Card>
      </form>
    </div>
  );
};

export default AddComplaint;
