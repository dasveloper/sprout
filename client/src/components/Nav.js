import PropTypes from "prop-types";
import React, { Fragment, Component } from "react";
import { withRouter, Link } from "react-router-dom";

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

class Nav extends Component {
  state = {};

  hideFixedMenu = () => this.setState({ fixed: false });
  showFixedMenu = () => this.setState({ fixed: true });
  renderHeaderContent() {
    const { fixed } = this.state;
    const { user } = this.props;
    switch (user.account) {
      case null:
        return (
          <Menu.Item position="right">
            <p>null</p>
          </Menu.Item>
        );
      case false:
        return (
          <Menu.Item position="right">
      
            <Button className="login-button" compact as={Link} to="/login">
              Login
            </Button>
   
          </Menu.Item>
        );
      default:
        return (
          <Menu.Item position="right">
            <Button
              compact
              href="/auth/logout"
              as="a"
              style={{ marginLeft: "0.5em" }}
              color='red'
            >
              Logout
            </Button>
          </Menu.Item>
        );
    }
  }
  render() {
    const { fixed } = this.state;
    const {pathname} = this.props.location;
    const { user } = this.props;


    return (
      <Visibility
        once={false}
        onBottomPassed={this.showFixedMenu}
        onBottomPassedReverse={this.hideFixedMenu}
      >
        <Segment
          textAlign="center"
          style={{
            padding: "0em",
            backgroundColor: "#1BAFA9",
            paddingBottom: 0
          }}
          vertical
        >
          <Menu
            fixed={fixed ? "top" : null}
            pointing={!fixed}
            secondary={!fixed}
            size="large"
          >
              <div className="logo-wrapper">
              <Link  to={`/`}  className="logo">deetz</Link>
              </div>
              <Menu.Item as={ Link } to={`/create`} active={pathname === "/create"}>
                Creator
              </Menu.Item>
              <Menu.Item   as={ Link } to={`/dashboard`} active={pathname === "/dashboard"} >Dashboard</Menu.Item>

              {this.renderHeaderContent()}
          </Menu>
        </Segment>
      </Visibility>
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
  )(Nav)
);
