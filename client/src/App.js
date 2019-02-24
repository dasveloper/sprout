import React, { Component } from "react";
import { connect } from "react-redux";
import * as actions from "./actions";
import "./assets/App.scss";
import Nav from "./components/Nav";
import PrivateRoute from "./components/PrivateRoute";
import Dashboard from "./pages/Dashboard";
import ForgotPassword from "./pages/ForgotPassword";
import Homepage from "./pages/Homepage";
import Login from "./pages/Login";
import PageNotFound from "./pages/PageNotFound";
import Register from "./pages/Register";
import Respond from "./pages/Respond";
import Responses from "./pages/Responses";
import Support from "./pages/Support";

import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import CreateList from "./pages/CreateList";




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
          <div className="container-wrapper" >
            <Switch>
              <Route path="/" exact component={Homepage} />
              <Route path="/login" component={Login} />
              <Route path="/register" component={Register} />
              <Route path="/forgotPassword" component={ForgotPassword} />

              <Route path="/respond/:formId" component={Respond} />
              <Route path="/support" component={Support} />

              <PrivateRoute path="/create" component={CreateList} />
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
