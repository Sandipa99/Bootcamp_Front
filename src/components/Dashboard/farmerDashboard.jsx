import React from "react";
import { Jumbotron, Button } from "react-bootstrap";
import axios from "axios";
import Cookies from "universal-cookie";
import "./Dashboard.css";
import Navigation from "../Navigation/Navigation";
import ViewAdvertisement from "../Advertisement/viewAdvertisement";

class FarmerDashboard extends React.Component {
  state = {
    name: [],
  };

  componentDidMount() {
    const cookies = new Cookies();

    axios
      .get(`http://localhost:8080/farmer/viewFarmer/${cookies.get("username")}`)
      .then((response) => {
        // if (response.data.student.name == null) {
        //   response.data.student.name = " ";
        // }
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
      <ViewAdvertisement/>
      </div>
    );
  }
}

export default FarmerDashboard;
