import React, { Component } from "react";

import axios from "axios";
import "./Userprofile.css";
import Cookies from "universal-cookie";

import Navigation from "../Navigation/Navigation";
import Showprofile from "./Showprofile";

class Userprofile extends Component {
  state = {
    user: [],
    username:[]
  };

  componentDidMount() {
    const cookies = new Cookies();

    axios
      .get(`http://localhost:8080/farmer/viewFarmer/${cookies.get("username")}`)
      .then((response) => {
        console.log(response.data.user);
        this.setState({ user: response.data });
        this.setState({username:response.data.user})
      });
    }

  render() {
    return (
      <div>
        <Navigation />
        <Showprofile
          name={this.state.user.name}
          phone={this.state.user.phoneNo}
          address={this.state.user.address}
          username={this.state.username.username}
        />
      </div>
    );
  }
}

export default Userprofile;