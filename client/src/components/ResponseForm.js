import React, { Fragment } from "react";
import { Field, reduxForm } from "redux-form";
import validate from "./validate";
import renderField from "./RenderField";
import { connect } from "react-redux";
import {
  Card,
  Input,
  Icon,
  Segment,
  Header,
  Dropdown,
  Form
} from "semantic-ui-react";
import { fetchFormDetails } from "../actions/responseForm";

const options = [
  { key: "is", text: "is", value: false },
  { key: "are", text: "are", value: true }
];

const NameInput = props => (
  <Input
    {...props.input}
    icon='user' iconPosition='left' 
    size="large"
    value={props.input.value}
    className="response-input"
    placeholder="Name"
  />
);
const EmailField = props => (
  <Input
    {...props.input}
    icon='envelope' iconPosition='left' 

    size="large"
    value={props.input.value}
    className="response-input"
    placeholder="Email"
  />
);
const PhoneField = props => (
  <Input
    {...props.input}
    icon='phone' iconPosition='left' 
    size="large"
    value={props.input.value}
    className="response-input"
    placeholder="Phone"
  />
);
const AddressField = props => (
  <Input
    {...props.input}
    icon='home' iconPosition='left' 
    size="large"
    value={props.input.value}
    className="response-input"
    placeholder="Address"
  />
);
const ResponseForm = props => {
  const { handleSubmit, formDetails,onSubmit} = props;
  const {
    listName, 
    name,
    isPlural,
    reason,
    showName,
    showEmail,
    showPhone,
    showAddress
  } = formDetails;

  return (
    <form className="create-form" onSubmit={handleSubmit}>
      <Card className="first-card" raised>
        <Card.Description>
          <div className="row">
            <p className="response-header">{`${name} ${
              isPlural ? "are" : "is"
            } collecting contacts for ${reason}`}</p>
          </div>
          {showName && (
            <div className="row">
              <Field  component={NameInput} name="name" />
            </div>
          )}
          {showEmail && (
            <div className="row">
              <Field component={EmailField} name="email" />
            </div>
          )}
          {showPhone && (
            <div className="row">
              <Field component={PhoneField} name="phone" />
            </div>
          )}
          {showAddress && (
            <div className="row">
              <Field component={AddressField} name="address" />
            </div>
          )}
        </Card.Description>
        <Card.Content extra>
          <button type="submit" className="next">
            Submit
          </button>
        </Card.Content>
      </Card>
    </form>
  );
};

export default reduxForm({
  form: "response", //                 <------ same form name
  destroyOnUnmount: false, //        <------ preserve form data
  forceUnregisterOnUnmount: true, // <------ unregister fields on unmount
  validate
 
})(ResponseForm);
