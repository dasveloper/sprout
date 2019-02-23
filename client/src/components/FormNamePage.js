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

const NameInput = props => (
  <Input
    value={props.input.value}
    onChange={(param, data) => props.input.onChange(data.value)}
    size="massive"
    transparent
    className="name-input"
    placeholder="List name"
  />
);

const FormNamePage = props => {
  const { handleSubmit } = props;
  return (
    <Card fluid className="card-wrapper" raised>
      <form className="card-inner" onSubmit={handleSubmit}>
        <div className="card-header-wrapper">
          <span className="card-header">
            Give your contact list a name
          </span>
          <span className="card-subheader">
            Make it unique so you can find it later
          </span>
        </div>
        <div className="card-row row-spacing">

          <Field
            size="big"
            component={renderField}
            name="listName"
            placeholder="List name"
          />
        </div>

        <div className="card-row">
          <Button
            type="submit"
            fluid
            className="card-button start"
            size="large"
          >
            Begin
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
  validate,
  initialValues: {
    listName:"",
    isPlural: false,
    showName: true,
    showEmail: true,
    showPhone: true,
    showAddress: true
  }
})(FormNamePage);
