import React from "react";
import { Field, reduxForm } from "redux-form";
import validate from "./validate";
import renderField from "./RenderField";
import {
  Card,
  Input,
  Icon,
  Segment,
  Header,
  Dropdown,
  Form,
  Checkbox,
  Button
} from "semantic-ui-react";

const renderError = ({ meta: { touched, error } }) =>
  touched && error ? <span>{error}</span> : false;
const ToggleFormField = props => (
  <div>
    <Checkbox
      onChange={(param, data) => props.input.onChange(data.checked)}
      toggle
      fitted
      checked={props.input.checked}
    />
  </div>
);
const WizardFormSecondPage = props => {
  const { handleSubmit, pristine, previousPage, submitting } = props;

  return (
    <Card fluid className="card-wrapper" raised>
        <form className="card-inner" onSubmit={handleSubmit}>

        <div className="card-row">
            <Segment compact className="type-toggle-wrapper">
              <div class="type-toggle-left-wrapper">
                <Icon
                  circular
                  inverted
                  size="large"
                  className="email-toggle"
                  name="user"
                />
                <span className="type-toggle-label">Name</span>
              </div>
              <Field
                name="showName"
                type="checkbox"
                component={ToggleFormField}
              />
            </Segment>
          </div>
          <div className="card-row">
            <Segment compact className="type-toggle-wrapper">
              <div class="type-toggle-left-wrapper">
                <Icon
                  circular
                  inverted
                  size="large"
                  className="email-toggle"
                  name="envelope"
                />
                <span className="type-toggle-label">Email</span>
              </div>
              <Field
                name="showEmail"
                type="checkbox"
                component={ToggleFormField}
              />
            </Segment>
          </div>
          <div className="card-row">
            <Segment compact className="type-toggle-wrapper">
              <div class="type-toggle-left-wrapper">
                <Icon
                  circular
                  inverted
                  size="large"
                  className="email-phone"
                  name="phone"
                />
                <span className="type-toggle-label">Phone</span>
              </div>
              <Field
                name="showPhone"
                type="checkbox"
                component={ToggleFormField}
              />
            </Segment>
          </div>
          <div className="card-row">
            <Segment compact className="type-toggle-wrapper">
              <div class="type-toggle-left-wrapper">
                <Icon
                  circular
                  inverted
                  size="large"
                  className="email-toggle"
                  name="home"
                />
                <span className="type-toggle-label">Address</span>
              </div>
              <Field
                name="showAddress"
                type="checkbox"
                component={ToggleFormField}
              />
            </Segment>
          </div>
          <div className="card-row content-spaced">

        <Button type="button"  className="previous" onClick={previousPage} basic>
          Previous
          </Button>
          <Button type="submit"  className="submit-form" disabled={pristine || submitting}>
            Submit
          </Button>
          </div>
        </form>

      </Card>
  );
};

export default reduxForm({
  form: "wizard", //                 <------ same form name
  destroyOnUnmount: false, //        <------ preserve form data
  forceUnregisterOnUnmount: true, // <------ unregister fields on unmount
  validate
})(WizardFormSecondPage);