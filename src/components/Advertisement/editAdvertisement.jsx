// Functional component
import axios from "axios";
import React,{ Component } from "react";
import { Navigate, useNavigate, useParams, withRouter  } from "react-router-dom";
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

class EditAdvertisement extends Component {
  state = {
    cropType: "",
    quantity: "",
    weight: "",
    price: "",
    adv: []
  };
  
  componentDidMount() {
   
    const id = window.location.href.split('/')[4]
   // let {id} = this.props.match.params;
    console.log(id);

    axios
      .get(`http://localhost:8080/farmer/getAllAdvertisement`)
      .then((response) => {
        
        // if (response.data.student.name == null) {
        //   response.data.student.name = " ";
        // }
        console.log(response.data.filter(abc=>abc.advid==id)[0]);
        this.setState({ adv: response.data.filter(abc=>abc.advid==id)[0] });
      });
  }
  postDataHandler = (event) => {
    event.preventDefault();
    if (!this.state.cropType) {
      this.state.cropType = this.state.adv.cropType;
    }
    if (!this.state.quantity) {
      this.state.quantity = this.state.adv.quantity;
    }
    if (!this.state.weight) {
      this.state.weight = this.state.adv.weight;
    }
    if (!this.state.price) {
      this.state.price = this.state.adv.price;
    }
    const cookies = new Cookies();
    const details = {
      cropType: this.state.cropType,
      quantity: this.state.quantity,
      weight: this.state.weight,
      price: this.state.price,
      name:cookies.get("name")
    };
   
    
    const id = window.location.href.split('/')[4]
    axios.put(
        `http://localhost:8080/supplier/updateAdvertisement/${id}`,
        details
      )
      .catch((err)=>console.log(err.response.data));
        
    console.log(details);

    //console.log(details);
    this.setState({ message: "Updated Successfully" });
    alert("Updated Successfully");
  };
  render(){
    return (
      <div>
         <Navigation /> 
        <form onSubmit={this.postDataHandler}>
          <Card className="card-profile shadow attendance">
            <Row className="justify-content-center">
              <Col className="order-lg-2" lg="3"></Col>
            </Row>
            <CardHeader className="text-center border-0 pt-8 pt-md-4 pb-0 pb-md-4">
              <div className="d-flex justify-content-between font-attend">
                <h5>Edit Advertisement</h5>
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
                    defaultValue={this.state.adv.cropType}
               onChange={(event) =>
                this.setState({ cropType: event.target.value })
              }
                    required
                  />
                </FormGroup>
                <FormGroup>
                  <Input
                    className="form-control-alternative"
                    id="quantity"
                    type="text"
                    placeholder="Quantity"
                    defaultValue={this.state.adv.quantity}
               onChange={(event) =>
                this.setState({ quantity: event.target.value })
              }
                    required
                  />
                </FormGroup>
                <FormGroup>
                  <Input
                    className="form-control-alternative"
                    id="weight"
                    type="text"
                    placeholder="Weight"
                    defaultValue={this.state.adv.weight}
                onChange={(event) =>
                  this.setState({ weight: event.target.value })
                }
                    required
                  />
                </FormGroup>
                <FormGroup>
                  <Input
                    className="form-control-alternative"
                    id="price"
                    type="text"
                    placeholder="Price"
                    defaultValue={this.state.adv.price}
                onChange={(event) =>
                  this.setState({ price: event.target.value })
                }
                    required
                  />
                </FormGroup>
                <Button type="submit" value="Submit" color="primary">
                  Save
                </Button>
              </div>
  
              
            </CardBody>
          </Card>
        </form>
      </div>
      
    );
  }
  
};

export default EditAdvertisement;
