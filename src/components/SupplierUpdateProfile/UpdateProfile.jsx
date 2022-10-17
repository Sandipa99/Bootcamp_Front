import React, { Component } from "react";
import axios from "axios";
import Cookies from "universal-cookie";

import {
  Button,
  Card,
  CardHeader,
  CardBody,
  FormGroup,
  Form,
  Input,
  Container,
  Row,
  Col,
} from "reactstrap";
import Navigation from "../Navigation/SupplierNav";

class UpdateProfile extends Component {
  state = {
    name: "",
    phone: "",
    address: "",
    message: "",
    user: []
  };

  componentDidMount() {
    const cookies = new Cookies();

    axios
      .get(`http://localhost:8080/supplier/viewSupplier/${cookies.get("username")}`)
      .then((response) => {
        console.log(response.data.user);
        this.setState({ user: response.data });
      });
  }

  postDataHandler = (event) => {
    event.preventDefault();
    if (!this.state.name) {
      this.state.name = this.state.user.name;
    }
    if (!this.state.phone) {
      this.state.phone = this.state.user.phoneNo;
    }
    if (!this.state.address) {
      this.state.address = this.state.user.address;
    }
    const details = {
      name: this.state.name,
      phoneNo: this.state.phone,
      address: this.state.address
    };

    const cookies = new Cookies();

    axios.patch(
        `http://localhost:8080/user/updateSupplier/${cookies.get("username")}`,
        details
      )
      .catch((err)=>console.log(err.response.data));
        
    console.log(details);
    this.setState({ message: "Updated Successfully" });
    alert("Updated Successfully");
  };

  render() {
    return (
      <>
        <Navigation />
        <Container className="mt--7 header-update">
          <Col className="order-update">
            <Card className="bg-update shadow">
              <CardHeader className="bg-white-update border-0">
                <Row className="align-items-center-update">
                  <Col xl="8">
                    <h6 className="heading-small-update text-muted-update mb-4">
                      Update information
                    </h6>
                  </Col>
                </Row>
              </CardHeader>
              <CardBody>
                <Form onSubmit={this.postDataHandler}>
                  <div className="pl-lg-4">
                    <Row>
                      <Col lg="4">
                        <FormGroup>
                          <label
                            className="form-control-label"
                            htmlFor="input-username"
                          >
                            Name
                          </label>
                          <Input
                            className="form-control-alternative"
                            id="input-username"
                            type="text"
                            defaultValue={this.state.user.name}
                            onChange={(event) =>
                              this.setState({ name: event.target.value })
                            }
                            required
                          />
                        </FormGroup>
                      </Col>
                      <Col lg="4">
                        <FormGroup>
                          <label className="form-control-label">
                            Phone Number
                          </label>
                          <Input
                            className="form-control-alternative"
                            id="input-number"
                            type="number"
                            defaultValue={this.state.user.phoneNo}
                            onChange={(event) =>
                              this.setState({ phone: event.target.value })
                            }
                            required
                          />
                        </FormGroup>
                      </Col>
                      <Col lg="4">
                        <FormGroup>
                          <label
                            className="form-control-label"
                            htmlFor="input-stream"
                          >
                            Address
                          </label>
                          <Input
                            className="form-control-alternative"
                            id="input-stream"
                            type="text"
                            defaultValue={this.state.user.address}
                            onChange={(event) =>
                              this.setState({ address: event.target.value })
                            }
                            required
                          />
                        </FormGroup>
                      </Col>
                    </Row>
                  </div>
             

                  <div className="pl-lg-4">
                    <hr className="my-4" />
                    <Col className="text-right-update" xs="6">
                      <Button type="submit" value="Submit" color="primary">
                        Save
                      </Button>
                    </Col>
                  </div>
                </Form>
              </CardBody>
            </Card>
          </Col>
        </Container>
      </>
    );
  }
}

export default UpdateProfile;