import React from "react";
import { Field, reduxForm } from "redux-form";
import validate from "./validate";
import renderField from "./renderField";
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

const SuccessPage = props => {
  const { contactListId } = props;

  return (
    <Card className="first-card" raised>
      <Card.Description>
        <div className="row success-header">
          <h1 style={{ color: "#3ecf8e", textAlign: "center" }}>Success!</h1>
          <p>Share the link below to begin collecting responses.</p>
        </div>

        <div className="row success-url">
          <Segment
            style={{ justifyContent: "center" }}
            compact
            className="type-toggle-wrapper"
          >
            <p
              style={{ textAlign: "center" }}
            >{`https://deetz.io/respond/${contactListId}`}</p>
          </Segment>
        </div>
        <div className="row">
          <Button href={`/responses/${contactListId}`} primary>View Responses</Button>
        </div>
      </Card.Description>

    </Card>
  );
};

export default SuccessPage;
