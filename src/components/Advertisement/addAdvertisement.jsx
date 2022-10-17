// Functional component
import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Cookies from "universal-cookie";
import Navigation from "../Navigation/SupplierNav";

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

const AddAdvertisement = () => {
  // value, name, handleOnChange(), handleSubmit()
  // react hook methods - useState() - define state of component
  // useEffect() - called at the time of page loading and when there is change in state

  // Define state using useState
  let navigate = useNavigate();
  const cookies = new Cookies();

  const [adv, setAdv] = useState({
    cropType: "",
    quantity: "",
    weight: "",
    price: "",
    name:""
  });

  const handleChange = (event) => {
    console.log(event.target.name); // returns field name
    console.log(event.target.value); // retruns filed value

    // copy adv details to newEmp obj
    const newAdv = { ...adv };

    //update newEmp object
    newAdv[event.target.name] = event.target.value;

    // update emp obj with newEmp obj details
    setAdv(newAdv);
  };

  const handleSubmit = (event) => {
    console.log(cookies.get("name"));
    
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
      name:cookies.get("name")
    };
    console.log(newAdv);
    axios
      .post("http://localhost:8080/supplier/addAdvertisement", newAdv)
      .then((res) => {
        console.log(res);
        alert("New Advertisement added successfully!");
        navigate("/supplier/dashboard");
      })
      .catch((error) => console.log(error));
  };
  console.log(adv);
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
              <h5>Add Advertisement</h5>
            </div>
          </CardHeader>
          <CardBody className="pt-0 pt-md-4">
            <div className="text-center">
              <FormGroup>
                <Input
                  className="form-control-alternative"
                  id="croptype"
                  type="text"
                  placeholder="CropType"
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
                  onChange={handleChange}
                  required
                />
              </FormGroup>
              <Button type="submit" value="Submit" color="primary">
                Add Advertisement
              </Button>
            </div>
          </CardBody>
        </Card>
      </form>
    </div>
    
  );
};

export default AddAdvertisement;
