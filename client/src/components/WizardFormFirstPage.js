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
  Form,
  Button
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
  const { handleSubmit, previousPage } = props;

  return (
    <Card fluid className="form-card" raised>
      <form className="form" onSubmit={handleSubmit}>
        <div className="form-row">
          <Field
            className="dotted form-field"
            size="massive"
            component={Input}
            name="name-input"
            placeholder="Your name"
            transparent
          />
        </div>
        <div className="form-row">
          <Field
            className="plural-dropdown"
            component={DropdownFormField}
            name="isPlural"
          />
          <span className="text-row">collecting contacts for</span>
        </div>
        <div className="form-row">
          <Field
            className="dotted form-field"
            size="massive"
            component={Input}
            name="reason-input"
            placeholder="a good reason"
            transparent
          />
        </div>

        <div className="form-row">
          <Button
            type="button"
            className="previous"
            onClick={previousPage}
            basic
            size="large"
          >
            Previous
          </Button>
          <Button type="submit" className="next" size="large">
            Next
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
})(WizardFormFirstPage);
