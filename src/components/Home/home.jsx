import React, { Component } from "react";
import Button from "react-bootstrap/Button";
import Navbar from "../Navbar/Navbar";
import { images } from "../constants/index";
import "./home.css";

class Home extends Component {
  render() {
    return (
      <div style={{ backgroundColor: "#032208", height: "vh", width: "wh" }}>
        <Navbar />
        <div className="section">
          <div className="text">
            <h1>Farm Assist System</h1>
            <p>
              Agriculture is our wisest pursuit, because it will in the end
              contribute most to real wealth, good morals, and happiness.
            </p>
          </div>
          <div className="image">
            <img src={images.main} alt="" />
          </div>
        </div>
        <div className="footer">
          <p>All rights. reserved. Farm Assist System &copy;</p>
        </div>
      </div>
    );
  }
}

export default Home;
