import React, { Component } from "react";
//import logo from './logo.svg';
import "./assets/App.scss";
//import CreateContactList from './components/CreateContactList';
import CreateContactWizard from "./pages/CreateContactWizard";
import Homepage from "./pages/Homepage";
import Login from "./pages/Login";
import Register from "./pages/Register";

import ForgotPassword from "./pages/ForgotPassword";

import Respond from "./pages/Respond";
import Responses from "./pages/Responses";
import Nav from "./components/Nav";
import PageNotFound from "./pages/PageNotFound";

import { connect } from "react-redux";
import * as actions from "./actions";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import PrivateRoute from "./components/PrivateRoute";

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
          <div className="container-wrapper">
            <Switch>
              <Route path="/" exact component={Homepage} />
              <Route path="/login" component={Login} />
              <Route path="/register" component={Register} />
              <Route path="/forgotPassword" component={ForgotPassword} />

              <Route path="/respond/:formId" component={Respond} />

              <PrivateRoute path="/create" component={CreateContactWizard} />
              <PrivateRoute path="/responses/:formId" component={Responses} />
              <PrivateRoute path="/dashboard" component={Dashboard} />
              <Route component={PageNotFound} />
            </Switch>
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
