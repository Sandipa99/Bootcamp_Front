import React, { useState, useEffect } from "react";
import { Jumbotron, Button, Row, Col, Card, CardTitle } from "reactstrap";
import Cookies from "universal-cookie";
import axios from "axios";
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import { Link } from "react-router-dom";
import "./ViewAdvertisement.css";

function ViewAdvertisement() {
  const [allData, setAllData] = useState([]);
  const [message, setMessage] = useState("Advertisement :");
  const cookies = new Cookies();
  

  useEffect(() => {
    (async () => {
      const ads = await axios("http://localhost:8080/farmer/getAllAdvertisement");
      console.log(ads.data.length);
      setAllData(ads.data.filter((abc)=>abc.name==cookies.get("name")));
    })();
  }, []);

 

  const renderHeader = () => {
    if (message.localeCompare("Advertisement :")) {
      return setMessage("");
} else {
      let headerElement = ["cropType", "quantity", "weight", "price", "status"];

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
      allData.map(({cropType, quantity, weight, price, status,advid}) => {
        console.log("noraml"+"ab"+status);
        return (
          <tr >
            <td className="live-code">{cropType}</td>
            <td>{quantity}</td>
            <td>{weight}</td>
            <td>{price}</td>
            <td>{status.toString()}</td>
            <td>
              <Link
                to={{
                  pathname: `/editAdvertisement/${advid}`,
                }}
              >
                <Button className="details-btn" color="default" size="sm">
                   <EditIcon  /> 
                </Button>
              </Link>
            
                <Button className="details-btn" onClick={() => deleteAdvertisement(advid)} color="default" size="sm">
                   <DeleteIcon  /> 
                </Button>
              
              </td>
          </tr>
        );
        
      })
    }
      </>
    );  
  };

  const deleteAdvertisement=(id)=>{axios.delete(`http://localhost:8080/supplier/deleteAdvertisement/${id}`).then((res) => {
    alert("Advertisement Deleted");
    window.location.reload(false);
  })};

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
            <h3 className="display-5" style={{paddingRight:"30px"}}>No Advertisement Available!</h3>}
           </Col>
           <Col>
            
        <Col lg-6>
          <Card body className="create-exam" style={{width:"300px"}}>
            <CardTitle tag="h4" className="exam-card-title" >
              Add Advertisement
              <Link to="/supplier/addAdvertisement">
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

export default ViewAdvertisement;