import React, { useState, useEffect, useMemo } from "react";
import Cookies from "universal-cookie";
import axios from "axios";
import "./resolvedComplaint.css";
import Navigation from "../Navigation/AdminNavigation";

function ResolvedComplaint() {
  const [allData, setAllData] = useState([]);
  const [message, setMessage] = useState("Resolved Complaint");

  useEffect(() => {
    (async () => {
      const complaint = await axios(
        `http://localhost:8080/admin/getAllComplaint`
      );
      if(complaint.data.filter((comp)=>comp.status==true).length==0)
      {
        setMessage("No Resolved Complaint");
      }else{
        setAllData(complaint.data.filter((comp)=>comp.status==true));
      }   
    })();
  }, []);

  const renderHeader = () => {
    if (message.localeCompare("Resolved Complaint")) {
      return "";
    } else {
      let headerElement = ["complaint", "posted by"];

      return headerElement.map((key, index) => {
        return (
          <th className="check-attd" key={index}>
            {key.toUpperCase()}
          </th>
        );
      });
    }
  };

  const renderBody = () => {
    return (
      allData &&
      allData.map(({ id, complaint, username }) => {
        return (
          <tr key={id}>
            <td>{complaint}</td>
            <td>{username}</td>
          </tr>
        );
      })
    );
  };

  return (
    <>
      <Navigation />
      <div  className="heading-leave Jumbotron">
        <h1 className="display-3 ">{message}</h1>
      </div>
      <table id="resolved-complaint">
        <thead>
          <tr>{renderHeader()}</tr>
        </thead>
        <tbody>{renderBody()}</tbody>
      </table>
    </>
  );
}

export default ResolvedComplaint;