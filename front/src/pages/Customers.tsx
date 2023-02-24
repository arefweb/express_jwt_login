import React, {useEffect, useState} from 'react';
import { useHistory } from "react-router-dom"
import {CustomersService} from "../services";

const Customers = () => {
  const [customers, setCustomers] = useState([]);
  const history = useHistory();

  useEffect(() => {
    CustomersService.getCustomers().then((resp) => {
      setCustomers(resp.data);
    }).catch((error) => {
      setCustomers([]);
      history.push("/login");
    })
  }, [history]);

  type TextAlign = "left" | "right" | "center";
  const tdStyle = {
    border: "1px solid silver",
    padding: "5px",
    textAlign: "left" as TextAlign
  }


  return (
    <div>
      <h3>Customers Page</h3>
      <table style={{borderCollapse: "collapse"}}>
        <thead>
        <tr>
          <th style={tdStyle}>Full Name</th>
          <th style={tdStyle}>City</th>
          <th style={tdStyle}>Phone Number</th>
        </tr>
        </thead>
        <tbody>
        {customers.map((customer: any) => {
          return (
            <tr>
              <td style={tdStyle}>{customer.fullName}</td>
              <td style={tdStyle}>{customer.city}</td>
              <td style={tdStyle}>{customer.phone}</td>
            </tr>
          )
        })}
        </tbody>
      </table>
    </div>
  )
};

export default Customers;