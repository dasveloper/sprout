import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { Card } from "semantic-ui-react";
import LoggedIn from "../components/LoggedIn";
import LoginForm from "../components/LoginForm";
import { login } from "../actions/account";

class Register extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    const { user, login } = this.props;
    const { account } = user;
    return (
      <div className="container-inner center">
        {account ? <LoggedIn /> : <LoginForm onSubmit={login} />}
        {account ? undefined : <Card fluid raised>
          <div className="register-toggle">
            <span className="register-toggle-prompt">
              Don't have an account?
              <Link className="register-toggle-link" to="/register">
                Sign up
              </Link>
            </span>
          </div>
        </Card>}
      </div>
    );
  }
}

function mapStateToProps({ form, contactList, user }) {
  return {
    user,
    form
  };
}
const mapDispatchToProps = {
  login
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Register);
