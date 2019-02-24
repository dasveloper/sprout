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
        return undefined;
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
              color="red"
            >
              Logout
            </Button>
          </Menu.Item>
        );
    }
  }
  renderDesktopMenu() {
    const { fixed } = this.state;
    const { pathname } = this.props.location;
    const { user } = this.props;

    return (
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
            <Link to={`/`} className="logo">
              deetz
            </Link>
          </div>
          <Menu.Item as={Link} to={`/create`} active={pathname === "/create"}>
            Create
          </Menu.Item>
          <Menu.Item
            as={Link}
            to={`/dashboard`}
            active={pathname === "/dashboard"}
          >
            Dashboard
          </Menu.Item>
          <Menu.Item as={Link} to={`/support`} active={pathname === "/support"}>
            Support
          </Menu.Item>
          {this.renderHeaderContent()}
        </Menu>
      </Segment>
    );
  }
  renderMobileMenu() {
    const { fixed } = this.state;
    const { pathname } = this.props.location;
    const { user } = this.props;

    return (
      <Segment

        className="mobile-submenu-wrapper"
        vertical
      >
        <Menu
          fixed={fixed ? "top" : null}
          pointing={!fixed}
          secondary={!fixed}
          size="large"
        >
          <div className="logo-wrapper">
            <Link to={`/`} className="logo">
              deetz
            </Link>
          </div>

          {this.renderHeaderContent()}
        </Menu>
        <Menu
          fixed={fixed ? "top" : null}
          pointing={!fixed}
          secondary={!fixed}
          size="large"
        >
          <Menu.Item as={Link} to={`/create`} active={pathname === "/create"}>
            Create
          </Menu.Item>
          <Menu.Item
            as={Link}
            to={`/dashboard`}
            active={pathname === "/dashboard"}
          >
            Dashboard
          </Menu.Item>
          <Menu.Item as={Link} to={`/support`} active={pathname === "/support"}>
            Support
          </Menu.Item>
        </Menu>
      </Segment>
    );
  }
  render() {

    return (
      <Visibility
        once={false}
        onBottomPassed={this.showFixedMenu}
        onBottomPassedReverse={this.hideFixedMenu}
      >
      {this.renderMobileMenu()}
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
