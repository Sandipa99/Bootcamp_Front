import React from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Cookies from "universal-cookie";
import "./SupplierNav.css";
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
    import NavDropdown from "react-bootstrap/NavDropdown";



function Navigation()
{
  const cookies = new Cookies();
const navigate = useNavigate();

const deleteAccount=()=>{axios.delete(`http://localhost:8080/user/deleteUser/${cookies.get("username")}`).then((res) => {
  alert("Account Deleted");
  navigate("/");
})};

const logout=()=>{
  axios.get("http://localhost:8080/supplier/logout")
    .then(()=>{
      cookies.remove("username");
      cookies.remove("role");
      alert("Logged Out Successfully");
      navigate("/");
    })
  }

  return (
    <div className="navbar_manual">
    <Navbar color="light" light expand="md">
      <NavbarBrand href="/supplier/dashboard">SUPPLIER</NavbarBrand>
        <Nav className="ml-auto" navbar>
        <NavItem>
            <NavDropdown title="Settings" id="basic-nav-dropdown">
              <NavDropdown.Item href="/viewSupplier">
                My profile
              </NavDropdown.Item>

              <NavDropdown.Divider />
              <NavDropdown.Item onClick={deleteAccount}>
                Delete account
              </NavDropdown.Item>
            </NavDropdown>

          </NavItem>
          <NavItem>
            <NavLink onClick={logout}>Logout</NavLink>
          </NavItem>
        </Nav>
    </Navbar>
  </div>
  );
}

export default Navigation;