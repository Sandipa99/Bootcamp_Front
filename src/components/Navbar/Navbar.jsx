import React from "react";
// import Button from "../Button";
import "./navbar.css";
import Button from "react-bootstrap/Button";
import { images } from "../constants";

const Navbar = () => {
  return (
    <>
      <div className="navbar">
        <a className="logo" to="/">
          <img src={images.logo} />
          <span className="span">FarmAssist</span>
        </a>
        <div></div>

        <div className=" signup-links btn">
          {/* <Button value="Admin" href="/admin" />
          <Button href="/farmer">Farmer</Button>
          <Button value="Supplier" href="/supplier" /> */}
          <Button href="/supplier">Supplier</Button>{" "}
          <Button href="/farmer">Farmer</Button>{" "}
        </div>
      </div>
    </>
  );
};

export default Navbar;
