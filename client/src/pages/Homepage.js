import PropTypes from "prop-types";
import React, { Fragment, Component } from "react";
import { withRouter, Link } from "react-router-dom";
import explainer from "../assets/explainer.png";

import {
  Button,
  Container,
  Divider,
  Grid,
  Header,
  Icon,
  Image,
  List,
  Menu,
  Responsive,
  Segment,
  Sidebar,
  Visibility
} from "semantic-ui-react";
import { connect } from "react-redux";
import { reduxForm } from "redux-form";
import * as actions from "../actions";

class Homepage extends Component {
  state = {};

  render() {
    return (
      <div className="container-inner homepage-hero-wrapper">
        <div className="homepage-left">
          <div className="hero">
            <h1 className="hero-logo">deetz</h1>
            <h3 className="hero-subheader">All of your contacts in one place</h3>
            <div className="cta">
              <Button
                as={Link}
                to={"/dashboard"}
                className="btn-primary"
                size="large"
              >
                Get started
              </Button>
            </div>
          </div>

          {false && (
            <div className="features">
              <Icon
                className="feature"
                circular
                size="huge"
                inverted
                name="envelope"
              />
              <Icon
                className="feature"
                circular
                size="huge"
                inverted
                name="phone"
              />
              <Icon
                className="feature"
                circular
                size="huge"
                inverted
                name="home"
              />
            </div>
          )}
        </div>
        <div className="homepage-right">
          <img
            className="explainer-img"
            src={explainer}
            alt="Deetz allows you to collect contacts from your computer"
          />
        </div>
      </div>
    );
  }
}

function mapStateToProps({ user }) {
  return { user };
}
export default withRouter(
  connect(
    mapStateToProps,
    actions
  )(Homepage)
);
