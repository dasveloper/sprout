import React, { Fragment } from "react";
import { Field, reduxForm } from "redux-form";
import validate from "./validate";
import renderField from "./renderField";
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

const options = [
  { key: "is", text: "is", value: false },
  { key: "are", text: "are", value: true }
];
const DropdownFormField = props => (
  <div>
    <Dropdown
      {...props.input}
      onChange={(param, data) => props.input.onChange(data.value)}
      size="massive"
      button
      basic
      options={options}
      value={props.input.value}
      className="plural-input"
    />
  </div>
);
const NameInput = props => (
  <Input
    value={props.input.value}
    onChange={(param, data) => props.input.onChange(data.value)}
    size="massive"
    transparent
    className="name-input"
    placeholder="Your name"
  />
);
const ReasonField = props => (
  <Input
    {...props.input}
    value={props.input.value}
    //onChange={(param, data) => props.input.onChange(data.value)}
    size="massive"
    transparent
    className="reason-input"
    placeholder="a good reason"
  />
);
const WizardFormFirstPage = props => {
  const { handleSubmit } = props;

  return (
    <form className="create-form" onSubmit={handleSubmit}>
      <Card className="first-card" raised>
        <Card.Description>
          <div className="row">
            <Field component={NameInput} name="name" />
          </div>
          <div className="row">
            <Field
              className="plural-dropdown"
              component={DropdownFormField}
              name="isPlural"
            />
            <span className="text-row">collecting contacts for</span>
          </div>
          <div className="row">
            <Field component={ReasonField} name="reason" />
          </div>
        </Card.Description>
        <Card.Content extra>
          <button type="submit" className="next">
            Next
          </button>
        </Card.Content>
      </Card>
    </form>
  );
};

export default reduxForm({
  form: "wizard", //                 <------ same form name
  destroyOnUnmount: false, //        <------ preserve form data
  forceUnregisterOnUnmount: true, // <------ unregister fields on unmount
  validate,
  initialValues: {
    isPlural: false,
    showName: true,
    showEmail: true,
    showPhone: true,
    showAddress: true
  }
})(WizardFormFirstPage);
