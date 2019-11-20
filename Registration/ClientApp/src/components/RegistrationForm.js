import React from "react";
import { Formik, FastField, Field } from "formik";
import { Row, Button } from "react-bootstrap";
import DatePicker from "react-datepicker";
import * as customerService from "../services/customerServices";
import * as Yup from "yup";

import "react-datepicker/dist/react-datepicker.css";

class CustomerForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      startDate: new Date(),
      formData: { email: "", name: "", gender: "", additionalRequest: "" }
    };
  }

  back = () => {
    this.props.history.push("/");
  };
  handleChange = date => {
    this.setState({
      startDate: date
    });
  };
  submit = values => {
    const date = this.state.startDate;
    const getFormattedDate = date => {
      let year = date.getFullYear();
      let month = (1 + date.getMonth()).toString().padStart(2, "0");
      let day = date
        .getDate()
        .toString()
        .padStart(2, "0");

      return month + "/" + day + "/" + year;
    };
    console.log();
    debugger;
    if (
      values.day1 === undefined &&
      values.day2 === undefined &&
      values.day3 === undefined
    ) {
      alert("Please select at least 1 day");
    } else {
      values.dateRegistered = getFormattedDate(date);
      customerService
        .addCustomer(values)
        .then(window.location.assign("/"))
        .catch(this.err);
    }
  };
  err = err => {
    console.log(err);
  };
  schema = Yup.object().shape({
    name: Yup.string()
      .max(30, "Please enter no more than 30 characters")
      .required("Please enter name"),
    gender: Yup.string()
      .max(40, "Please enter no more than 40 characters")
      .required("Please select gender"),
    email: Yup.string()
      .email("Please enter a valid email")
      .required("Please enter an email"),
    additionalRequest: Yup.string()
      .min(10, "Minimum of 10 characters")
      .max(100, "No more than 100")
  });

  render() {
    return (
      /* Form for adding and updating customer information */
      <div
        style={{
          paddingRight: 500,
          paddingLeft: 500,
          paddingBottom: 100,
          paddingTop: 100
        }}
      >
        <h1>Add Customers Info</h1>
        <Formik
          initialValues={this.state.formData}
          enableReinitialize={true}
          onSubmit={this.submit}
          validateOnChange={true}
          validationSchema={this.schema}
          render={formikProps => (
            <form onSubmit={formikProps.handleSubmit}>
              <Row>
                <label className="col-form-label">Email:</label>
                <FastField
                  type="email"
                  name="email"
                  placeholder="Email"
                  component="input"
                  className="form-control"
                />
                {formikProps.errors.email && (
                  <div id="feedback">{formikProps.errors.email}</div>
                )}
              </Row>
              <Row>
                <label className="col-form-label">Name</label>
                <FastField
                  name="name"
                  placeholder="Name"
                  className="form-control"
                />
                {formikProps.errors.name && (
                  <div id="feedback">{formikProps.errors.name}</div>
                )}
              </Row>
              <hr />
              <Row>
                <Field component="radio">
                  <label className="col-form-label">Gender: </label>
                  <label
                    htmlFor="male"
                    className="radio-inline"
                    style={{ padding: 10 }}
                  >
                    Male
                  </label>
                  <input
                    name="gender"
                    type="radio"
                    className="form-control"
                    value="male"
                    style={{
                      width: 15,
                      display: "inline",
                      height: 15
                    }}
                  />

                  <label
                    htmlFor="female"
                    className="radio-inline"
                    style={{ padding: 10 }}
                  >
                    Female
                  </label>
                  <input
                    style={{
                      width: 15,
                      display: "inline",
                      height: 15,
                      padding: 10
                    }}
                    name="gender"
                    type="radio"
                    className="form-control"
                    value="female"
                  />
                  {formikProps.errors.gender && (
                    <div id="feedback">{formikProps.errors.gender}</div>
                  )}
                </Field>
              </Row>
              <hr />
              <Row>
                <label className="col-form-label" style={{ paddingRight: 10 }}>
                  Date Registered:{" "}
                </label>
                <DatePicker
                  selected={this.state.startDate}
                  onChange={this.handleChange}
                  // selected={startDate}
                  // onChange={date => setStartDate(date)}
                  // minDate={subDays(new Date(), 365)}
                  // maxDate={addDays(new Date(), 365)}
                  placeholderText="Select a date"
                />
              </Row>
              <hr />
              <Row>
                <Field component="checkbox">
                  <label className="col-form-label">Selected Days: </label>
                  <label htmlFor="day1" style={{ padding: 10 }} value={true}>
                    Day 1
                  </label>
                  <input type="checkbox" id="day1" name="day1" value={true} />
                  <label htmlFor="day2" style={{ padding: 10 }}>
                    Day 2
                  </label>
                  <input type="checkbox" id="day2" name="day2" value={true} />
                  <label htmlFor="day3" style={{ padding: 10 }}>
                    Day 3
                  </label>
                  <input type="checkbox" id="day3" name="day3" value={true} />
                </Field>
              </Row>
              <hr />
              <Row>
                <label className="col-form-label">Additional Requests: </label>
                <Field
                  rows="4"
                  cols="50"
                  component="textarea"
                  name="additionalRequest"
                  placeholder="Additional Requests"
                  className="form-control"
                ></Field>
                {formikProps.errors.additionalRequest && (
                  <div id="feedback">
                    {formikProps.errors.additionalRequest}
                  </div>
                )}
              </Row>
              <hr />
              <div style={{ padding: 25 }}>
                <Button variant="danger" onClick={this.back}>
                  Back
                </Button>
                {formikProps.isSubmitting}
                <Button
                  variant="success"
                  type="submit"
                  style={{ float: "right" }}
                >
                  Submit New Customer
                </Button>
              </div>
            </form>
          )}
        />
      </div>
    );
  }
}
export default CustomerForm;
