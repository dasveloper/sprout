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
    <form className="create-form" onSubmit={handleSubmit}>
      <Card className="first-card" raised>
        <Card.Description>
          <div className="header-row">
            <span className="list-name-header">Give your contact list a name</span> 
            <span className="list-name-subheader">Make it unique so you can find it later</span>
          </div>
          <div className="row">
          <Field component={NameInput} name="listName" />
          </div>
        </Card.Description>
        <Card.Content extra>
          <Button type="submit" fluid className="start">Begin</Button>

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
})(FormNamePage);
