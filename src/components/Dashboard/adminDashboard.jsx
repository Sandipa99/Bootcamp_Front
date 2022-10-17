import React from "react";
import { Jumbotron, Button } from "react-bootstrap";
import axios from "axios";
import Cookies from "universal-cookie";
import "./Dashboard.css";
import AdminNavigation from "../Navigation/AdminNavigation";
import ViewAdvertisement from "../Advertisement/viewAdvertisement";
import ViewComplaint from "../Complaint/viewComplaint";

class AdminDashboard extends React.Component {
  render() {
    return (
      <div>
        <AdminNavigation/>
      
      <div className="jumbotron welcome">     
        <h1 className="display-4 welcome-text">Hello, Admin!</h1>
        <hr class="my-4"/>
      </div>
      <ViewComplaint/>
      </div>
    );
  }
}

export default AdminDashboard;
