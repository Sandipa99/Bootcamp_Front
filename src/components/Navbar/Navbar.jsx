import React from "react";
import "./navbar.css";
import Button from "react-bootstrap/Button";
import { images } from "../constants";

const Navbar = () => {
  return (
    <>
      <div className="navbar">
        <a className="logo">
          <img src={images.logo} />
          <span className="span">FarmAssist</span>
        </a>
        <div></div>

        <div className=" signup-links btn">
          <Button outline className="btn-get-started scrollto" href="/supplier">Supplier</Button>{" "}
          <Button outline className="get-started-btn scrollto" href="/farmer">Farmer</Button>{" "}
          <Button outline className="get-started-btn scrollto" href="/admin">Admin</Button>{" "}
        </div>
      </div>
    </>
  );
};

export default Navbar;
