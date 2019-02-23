import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { Card } from "semantic-ui-react";
import LoggedIn from "../components/LoggedIn";
import RegisterForm from "../components/RegisterForm";
import { register } from "../actions/account";

class Register extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    const { user, register } = this.props;
    const { account } = user;
    return (
      <div class="container-inner center">
        {account ? <LoggedIn /> : <RegisterForm onSubmit={register} />}
        {account ? undefined : <Card fluid raised>
          <div className="register-toggle">
            <span className="register-toggle-prompt">
              Already have an account?
              <Link className="register-toggle-link" to="/login">
                Login
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
    form,
    contactList
  };
}
const mapDispatchToProps = {
  register
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Register);
