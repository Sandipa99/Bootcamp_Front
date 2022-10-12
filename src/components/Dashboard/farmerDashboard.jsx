import React from "react";
import { Jumbotron, Button } from "react-bootstrap";
import axios from "axios";
import Cookies from "universal-cookie";
import "./Dashboard.css";

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
      //   <div>
      //     <h1>{this.state.name}</h1>
      //   </div>
      //   <div className="student">
      //     {/* <Navigation /> */}
      //     <Jumbotron className="welcome">
      //       <h1 className="display-3 welcome-text">
      //         {/* Hello, {this.state.user.name}! */}
      //       </h1>
      //     </Jumbotron>
      //     {/* <ShowExam /> */}
      //   </div>
      <Jumbotron>
        <h1>Hello, world!</h1>
        <p>
          This is a simple hero unit, a simple jumbotron-style component for
          calling extra attention to featured content or information.abcd
        </p>
        <p>
          <Button bsStyle="primary">Learn more</Button>
        </p>
      </Jumbotron>
    );
  }
}

export default FarmerDashboard;
