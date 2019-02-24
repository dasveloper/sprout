import React from "react";
import { connect } from "react-redux";
import { Link, withRouter } from "react-router-dom";
import { Button, Card } from "semantic-ui-react";


const LoggedIn = props => {
  const { user } = props;
  const { account } = user;
  const { firstName } = account;
  return (
    <Card fluid className="card-wrapper" raised>
      <div className="card-inner">
        <div className="card-row">
          <h2 className="logged-in-greeting">{`Hello, ${firstName}!`}</h2>
        </div>
        <div className="card-row">
          <Button
            as={Link}
            to={"/create"}
            className="card-button btn-primary"
            fluid
            size="large"
          >
            Create a contact list
          </Button>
        </div>
        <div className="card-row">
          <Button
            as={Link}
            to={"/dashboard"}
            className="card-button btn-primary"
            fluid
            size="large"
          >
            Go to your dashboard
          </Button>
        </div>
        <div className="card-row content-center">
          <p className="or">or</p>
        </div>
        <div className="card-row">
          <Button
            className="card-button btn-secondary"
            as="a"
            href="auth/google"
            fluid
            size="large"
          >
            Sign in with a different account
          </Button>
        </div>
      </div>
    </Card>
  );
};

function mapStateToProps({ user }) {
  return { user };
}
export default withRouter(connect(mapStateToProps)(LoggedIn));
