import React from "react";
import Customer from "./Customers";
import Button from "react-bootstrap/Button";
import * as customerService from "../services/customerServices";
import ReactTable from "react-table";

class Home extends React.Component {
  state = {
    mapCustomers: [],
    customers: [],
    customer: {},
    formData: {
      name: "",
      email: "",
      gender: "",
      dateRegistered: "",
      selectDays: "",
      additionalRequest: "",
      day1: false,
      day2: false,
      day3: false
    }
  };
  componentDidMount() {
    this.getAllCustomers();
  }

  addCustom = () => {
    this.props.history.push("/add");
  };

  err = err => {
    console.log(err);
  };
  getAllCustomers = () => {
    customerService
      .getAllCustomers()
      .then(this.customerSucc)
      .catch();
  };
  customerSucc = data => {
    console.log(data);
    this.setState(() => ({
      customers: data.item
    }));
  };
  mapCustomers = customers => (
    <Customer
      key={customers.id}
      deleteCust={this.deleteCust}
      update={this.update}
      customers={customers}
    />
  );
  columns = [
    {
      Header: "Number",
      accessor: "id",
      Cell: props => <span className="number">{props.value}</span>
    },
    {
      Header: "Name",
      accessor: "name" // String-based value accessors!
    },
    {
      Header: "Gender",
      accessor: "gender",
      Cell: props => <span className="number">{props.value}</span>
    },
    {
      Header: "Email",
      accessor: "email",
      Cell: props => <span className="number">{props.value}</span>
    },
    {
      Header: "Date Registered",
      accessor: "dateRegistered",
      Cell: props => <span className="number">{props.value}</span>
    },
    {
      Header: "Additional Requests",
      accessor: "additionalRequest",
      Cell: props => <span className="number">{props.value}</span>
    },
    {
      Header: "Selected Days",
      columns: [
        {
          accessor: "day1",
          Header: "Day 1",
          Cell: props => (
            <span className="number">
              {props.value ? <span>Yes</span> : <span>No</span>}
            </span>
          )
        },
        {
          accessor: "day2",
          Header: "Day 2",
          Cell: props => (
            <span className="number">
              {props.value ? <span>Yes</span> : <span>No</span>}
            </span>
          )
        },
        {
          accessor: "day3",
          Header: "Day 3",
          Cell: props => (
            <span className="number">
              {props.value ? <span>Yes</span> : <span>No</span>}
            </span>
          )
        }
      ]
    }
  ];

  render() {
    return (
      <React.Fragment>
        <div style={{ padding: 200 }}>
          <div className="row">
            <div className="col">
              <div className="col">
                <Button
                  variant="primary"
                  onClick={this.addCustom}
                  style={{ float: "right" }}
                >
                  Add Customer
                </Button>
                <h1>Registered Customer's Information</h1>
              </div>
              <ReactTable
                data={this.state.customers}
                columns={this.columns}
                defaultPageSize={5}
              />
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}
export default Home;
