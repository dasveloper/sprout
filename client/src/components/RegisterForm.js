import React from "react";
import { Field, reduxForm } from "redux-form";
import { Button, Card, Input } from "semantic-ui-react";
import validate from "./validate";
import renderField from "./RenderField";

const RegisterForm = props => {
  const { handleSubmit, pristine, previousPage, submitting, error } = props;
  return (
    <Card fluid className="card-wrapper" raised>
      <form className="card-inner" onSubmit={handleSubmit}>
        <div className="card-row two-col">
          <Field
            icon="user"
            iconPosition="left"
            size="big"
            component={renderField}
            name="registerFirstName"
            placeholder="First name"
          />
          <Field
            size="big"
            component={renderField}
            name="registerLastName"
            placeholder="Last name"
          />
        </div>
        <div className="card-row">
          <Field
            icon="envelope"
            iconPosition="left"
            size="big"
            component={renderField}
            name="registerEmail"
            placeholder="Email"
            type="email"
          />
        </div>
        <div className="card-row">
          <Field
            icon="lock"
            iconPosition="left"
            size="big"
            component={renderField}
            name="registerPassword"
            placeholder="Password"
            type="password"
          />
        </div>
        <div className="card-row">
          <Field
            icon="lock"
            iconPosition="left"
            size="big"
            component={renderField}
            name="registerConfirmPassword"
            placeholder="Confirm password"
            type="password"
          />
        </div>
        {error && (
          <div className="card-row">
            <p className="form-error">{error.message}</p>
          </div>
        )}
        <div className="card-row">
          <Button className="card-button" type="submit" fluid size="large">
            Register
          </Button>
        </div>
        {false && <div className="card-row content-center">
          <p className="or">or</p>
        </div>}
        {false && <div className="card-row">
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
  form: "register", //                 <------ same form name
  forceUnregisterOnUnmount: true, // <------ unregister fields on unmount
  validate
})(RegisterForm);
