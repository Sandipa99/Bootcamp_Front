import React, { useState, useEffect } from "react";
import { Jumbotron, Button, Row, Col, Card, CardTitle } from "reactstrap";
import axios from "axios";
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import { Link } from "react-router-dom";
import "./ViewAdvertisement.css";
//import FiberManualRecordIcon from "@material-ui/icons/FiberManualRecord";
//import { green } from "@material-ui/core/colors";

function ViewAdvertisement() {
  const [allData, setAllData] = useState([]);
  const [message, setMessage] = useState("Advertisement :");

  useEffect(() => {
    (async () => {
      const ads = await axios("http://localhost:8080/farmer/getAllAdvertisement");
      console.log(ads.data.length);
      setAllData(ads.data.filter((abc)=>abc.status==false));

    //   console.log(result.data.testDetails);
    })();
  }, []);

  const renderHeader = () => {
    if (message.localeCompare("Advertisement :")) {
      return setMessage("");
} else {
      let headerElement = ["cropType", "quantity", "weight", "price"];

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
      allData.map(({cropType, quantity, weight, price,advid}) => {
        console.log("noraml"+"ab"+advid);
        return (
          <tr >
            <td className="live-code">{cropType}</td>
            <td>{quantity}</td>
            <td>{weight}</td>
            <td>{price}</td>
            
            <td className="operation">
              <button className="button" onClick={() => sellCrop(advid)}>             
                Sell
              </button>
            </td>
            {/* <td className="live-name">
              <FiberManualRecordIcon
                className="live-icon"
                style={{ color: green[600] }}
              />
              {status.toUpperCase()}
            </td> */}

            {/* <td>
              <Link
                to={{
                  pathname: `/user_test/${testID}`,
                }}
              >
                <Button className="details-btn" color="default" size="sm">
                  Sell
                   <ArrowForwardIosIcon className="arrow-icon" /> 
                </Button>
              </Link>
            </td> */}
          </tr>
        );
        
      })
    }
      </>
    );  
  };

    const sellCrop = (ID) => {
    axios.post(`http://localhost:8080/farmer/statusAdvertisement/${ID}`).then((res) => {
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
            <h3 className="display-5" style={{paddingRight:"30px"}}>No Advertisement Available!</h3>}
           </Col>
           <Col>
            
        <Col lg-6>
          <Card body className="create-exam" style={{width:"300px"}}>
            <CardTitle tag="h4" className="exam-card-title" >
              Add Complaint
              <Link to="/farmer/addcomplaint">
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