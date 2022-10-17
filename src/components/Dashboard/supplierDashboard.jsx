import React from "react";
import { Jumbotron, Button } from "react-bootstrap";
import axios from "axios";
import Cookies from "universal-cookie";
import "./Dashboard.css";
import Navigation from "../Navigation/SupplierNav";
import ViewAdvByUsername from "../Advertisement/ViewAdvByUsername";

class SupplierDashboard extends React.Component {
  state = {
    name: [],
  };

  componentDidMount() {
    const cookies = new Cookies();

    axios
      .get(`http://localhost:8080/supplier/viewSupplier/${cookies.get("username")}`)
      .then((response) => {
        console.log(response.data.name);
        this.setState({ name: response.data.name });
      });
  }
  render() {
    return (
      <div>
        <Navigation/>
      
      <div className="jumbotron welcome">     
        <h1 className="display-4 welcome-text">Hello, {this.state.name}!</h1>
        <hr class="my-4"/>
      </div>
      <ViewAdvByUsername/>
      </div>
    );
  }
}

export default SupplierDashboard;