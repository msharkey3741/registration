import React from "react";
import { Button } from "react-bootstrap";
import "react-table/react-table.css";

const Customer = props => {
  console.log(props);
  const deleteCust = () => {
    props.deleteCust(props.customers.id);
  };
  // const update = () => {
  //   props.update(props.customers);
  // };
  return (
    /* Card for mapping through customer information */
    <div>
      <div className="card" style={{ paddingBottom: 20 }}>
        <div className="card-body">
          <h6 className="card-subtitle mb-2 text-muted">
            {props.customers.name}
          </h6>
          <h6 className="card-subtitle mb-2 text-muted">
            {props.customers.email}
          </h6>
          <h6 className="card-subtitle mb-2 text-muted">
            {props.customers.additionalRequest}
          </h6>
          {props.customers.day1 ? <h1>true</h1> : <h2>false</h2>}
          {props.customers.day2 ? <h1>true</h1> : <h2>false</h2>}
          {props.customers.day3 ? <h1>true</h1> : <h2>false</h2>}
          <p>{props.customers.gender}</p>
          <p>{props.customers.dateRegistered}</p>
        </div>
        <br />
        <div className="row">
          <div className="col-md-4">
            <Button variant="danger" onClick={deleteCust}>
              Delete Customer
            </Button>
          </div>
        
        </div>
      </div>
    </div>
  );
};
export default Customer;
