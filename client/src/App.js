import React, { Component } from "react";
import { connect } from "react-redux";
import "normalize.css";
import "./assets/App.scss";
import Listing from "./pages/Listing";


import Landing from "./pages/Landing";

import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Switch>
            <Route path="/" exact component={Landing} />
            <Route path="/listing" component={Listing} />

          </Switch>
        </div>
      </Router>
    );
  }
}
export default App;
