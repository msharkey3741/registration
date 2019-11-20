import React, { Component } from "react";
import { Route } from "react-router";
import Home from "./components/Home";
import RegistrationForm from "./components/RegistrationForm";
import "./custom.css";

export default class App extends Component {
  static displayName = App.name;

  render() {
    return (
      <React.Fragment>
        <Route exact path="/" component={Home} />
        <Route exact path="/add" component={RegistrationForm} />
      </React.Fragment>
    );
  }
}
