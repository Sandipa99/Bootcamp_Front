import React from "react";
// //import Navbar from "react-bootstrap/Navbar";
// import NavDropdown from "react-bootstrap/NavDropdown";
// import Form from "react-bootstrap/Form";
// import FormControl from "react-bootstrap/FormControl";
// import Button from "react-bootstrap/Button";
// import { Nav, Container } from "react-bootstrap";
import "./Navigation.css";
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
    UncontrolledDropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem } from 'reactstrap';

function Navigation() {
  return (
    <div className="navbar_manual">
    <Navbar color="light" light expand="md">
      <NavbarBrand href="/farmer/dashboard">FARMER</NavbarBrand>
      {/* <NavbarToggler onClick={this.toggle} /> */}
      {/* <Collapse isOpen={this.state.isOpen} navbar> */}
        <Nav className="ml-auto" navbar>
        <NavItem>
            <NavLink href="/viewFarmer">Settings</NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="/components/">Logout</NavLink>
          </NavItem>
        </Nav>
      {/* </Collapse> */}
    </Navbar>
  </div>
  );
}

export default Navigation;