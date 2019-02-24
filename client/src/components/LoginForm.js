import React from "react";
import { Field, reduxForm } from "redux-form";
import { Button, Card, Input } from "semantic-ui-react";
import {Link} from "react-router-dom";
import validate from "../helpers/validate";
import renderField from "./RenderField";

const LoginForm = props => {
  const { handleSubmit, pristine, previousPage, submitting ,error} = props;
  return (
    <Card fluid className="card-wrapper" raised>
      <form className="card-inner" onSubmit={handleSubmit}>
        <div className="card-row">
          <Field
            className="card-field"
            icon="envelope"
            iconPosition="left"
            size="big"
            component={renderField}
            name="loginEmail"
            placeholder="Email"
            type="email"
          />
        </div>
        <div className="card-row">
          <Field
            className="card-field"
            icon="lock"
            iconPosition="left"
            size="big"
            component={renderField}
            name="loginPassword"
            placeholder="Password"
            type="password"
          />
        </div>
        <div className="card-row content-right">
          <Link to="/forgotPassword" className="forgot-password">Forgot password?</Link>
        </div>
        {error && (
          <div className="card-row">
            <p className="form-error">{error.message}</p>
          </div>
        )}
        <div className="card-row">
          <Button className="card-button btn-primary" type="submit" fluid size="large">
            Login
          </Button>
        </div>
       {false &&  <div className="card-row content-center">
          <p className="or">or</p>
        </div>}
       {false &&  <div className="card-row">
          <Button
            className="card-button"
            as="a"
            href="auth/google"
            fluid
            size="large"
          >
            Sign in with Google
          </Button>
        </div>}
      </form>
    </Card>
  );
};

export default reduxForm({
  form: "login", //                 <------ same form name
  forceUnregisterOnUnmount: true, // <------ unregister fields on unmount
  validate
})(LoginForm);
