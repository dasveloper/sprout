import React from "react";
import { Field, reduxForm } from "redux-form";
import { Button, Card, Input } from "semantic-ui-react";
import renderField from "./RenderField";
import validate from "../helpers/validate";

const ResponseForm = props => {
  const { handleSubmit, formDetails, onSubmit } = props;
  const {
    listName,
    creator,
    creatorName,
    showName,
    showEmail,
    showPhone,
    showAddress
  } = formDetails;

  return (
    <Card fluid className="card-wrapper" raised>
      <form className="card-inner" onSubmit={handleSubmit}>
        <div className="card-header-wrapper">
          <span className="card-header">
            {`${creatorName} is collecting contacts`}
          </span>
          <span className="card-subheader">
            Please enter your contact information below
          </span>
        </div>
        {showName && (
          <div className="card-row">
            <Field
              icon="user"
              iconPosition="left"
              size="big"
              component={renderField}
              name="responseName"
              placeholder="Name"
            />
          </div>
        )}
        {showEmail && (
          <div className="card-row">
            <Field
              icon="envelope"
              iconPosition="left"
              size="big"
              component={renderField}
              name="responseEmail"
              placeholder="Email"
            />
          </div>
        )}
        {showPhone && (
          <div className="card-row">
            <Field
              icon="phone"
              iconPosition="left"
              size="big"
              component={renderField}
              name="responsePhone"
              placeholder="Phone"
            />
          </div>
        )}
        {showAddress && (
          <div className="card-row">
            <Field
              icon="home"
              iconPosition="left"
              size="big"
              component={renderField}
              name="responseAddress"
              placeholder="Address"
            />
          </div>
        )}
        <div className="card-row">
          <Button
            type="submit"
            fluid
            className="card-button btn-primary"
            size="large"
          >
            Submit
          </Button>
        </div>
      </form>
    </Card>
  );
};

export default reduxForm({
  form: "response", //                 <------ same form name
  destroyOnUnmount: false, //        <------ preserve form data
  forceUnregisterOnUnmount: true, // <------ unregister fields on unmount
  validate
})(ResponseForm);
