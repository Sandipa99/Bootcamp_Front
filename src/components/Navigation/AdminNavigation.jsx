import React from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Cookies from "universal-cookie";
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
    import NavDropdown from "react-bootstrap/NavDropdown";



function AdminNavigation()
{
  const cookies = new Cookies();
const navigate = useNavigate();

const logout=()=>{
  axios.get("http://localhost:8080/admin/logout")
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
      <NavbarBrand href="/admin/dashboard">ADMIN</NavbarBrand>
        <Nav className="ml-auto" navbar>
        <NavItem>

          </NavItem>
          <NavItem>
            <NavLink onClick={logout}>Logout</NavLink>
          </NavItem>
        </Nav>
    </Navbar>
  </div>
  );
}

export default AdminNavigation;