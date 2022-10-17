import React, { useState, useEffect } from "react";
import { Jumbotron, Button, Row, Col, Card, CardTitle } from "reactstrap";
import axios from "axios";
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import { Link } from "react-router-dom";

function ViewComplaint() {
  const [allData, setAllData] = useState([]);
  const [message, setMessage] = useState("Complaint :");

  useEffect(() => {
    (async () => {
      const complaint = await axios("http://localhost:8080/admin/getAllComplaint");
      console.log(complaint.data.length);
      setAllData(complaint.data.filter((comp)=>comp.status==false));
    })();
  }, []);

  const renderHeader = () => {
    if (message.localeCompare("Complaint :")) {
      return setMessage("");
} else {
      let headerElement = ["complaint","Posted by"];

      return headerElement.map((key, index) => {
        return <th key={index}>{key.toUpperCase()}</th>;
      });
    }
  };

  const renderBody = () => {
    console.log(allData);
    return (
        <>
{
      allData.map(({complaint,username,id}) => {
        console.log("noraml"+"ab"+id);
        return (
          <tr >
            <td>{complaint}</td>
            <td>{username}</td>
            <td className="operation">
              <button className="button" onClick={() => resolveComplaint(id)}>             
                Resolve
              </button>
            </td>
          </tr>
        );
        
      })
    }
      </>
    );  
  };

    const resolveComplaint = (ID) => {
    axios.post(`http://localhost:8080/admin/resolveComplaint/${ID}`).then((res) => {
      window.location.reload(false);
    });
  };

  return (
    <>
    <Row className="mx-auto">
    <Col>
           { allData.length>0 && 
      <Row>
      <div  className=" Jumbotron user-exam">
        <h1 className="display-3 user-text2 ">{message}</h1>
      </div>
      <Row className="row-all">
        <Col lg-6 className="col-table">
          <table id="user-exam">
            <thead>
              <tr>{renderHeader()}</tr>
            </thead>
            <tbody>{renderBody()}</tbody>
          </table>
        </Col>
        </Row>
        </Row>
           }
            { allData.length==0 && 
            <h3 className="display-5" style={{paddingRight:"30px"}}>No Complaint Available!</h3>}
           </Col>
           <Col>
            
        <Col lg-6>
          <Card body className="create-exam" style={{width:"300px"}}>
            <CardTitle tag="h4" className="exam-card-title" >
              Resolved Complaint
              <Link to="/resolvedComplaint">
                {" "}
                <ArrowForwardIosIcon className="arrow-icn" />
              </Link>
            </CardTitle>
          </Card>
        </Col>
      </Col>
      </Row>
    </>
  );
}

export default ViewComplaint;