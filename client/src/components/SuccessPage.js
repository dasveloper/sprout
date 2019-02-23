import React from "react";
import { Field, reduxForm } from "redux-form";
import validate from "./validate";
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
    <Card fluid className="card-wrapper" raised>
      <div className="card-inner">
        <div className="card-header-wrapper">
          <span className="card-header">Success!</span>
          <span className="card-subheader">
            Share the link below to begin collecting responses
          </span>
        </div>
        <div className="card-row row-spacing">
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
        <div className="card-row">
          <Button href={`/responses/${contactListId}`} primary>
            View Responses
          </Button>
        </div>
      </div>
    </Card>
  );
};

export default SuccessPage;
