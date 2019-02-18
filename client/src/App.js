import React, { Component } from "react";
//import logo from './logo.svg';
import "./assets/App.scss";
//import CreateContactList from './components/CreateContactList';
import CreateContactWizard from "./pages/CreateContactWizard";
import Homepage from "./pages/Homepage";
import Login from "./pages/Login";
import Respond from "./pages/Respond";
import Responses from "./pages/Responses";
import Nav from "./components/Nav";

import { connect } from "react-redux";
import * as actions from "./actions";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Dashboard from "./pages/Dashboard";

class App extends Component {
  componentDidMount() {
    this.props.fetchUser();
  }
  render() {
    return (
      <Router>
        <div className="container">
          <div className="nav-wrapper">
            <Nav />
          </div>
          <div className="container-inner">
            <Route path="/" exact component={Homepage} />
            <Route path="/login" component={Login} />
            <Route path="/create" component={CreateContactWizard} />
            <Route path="/respond/:formId" component={Respond} />
            <Route path="/responses/:formId" component={Responses} />
            <Route path="/dashboard" component={Dashboard} />

          </div>
        </div>
      </Router>
    );
  }
}
export default connect(
  null,
  actions
)(App);
