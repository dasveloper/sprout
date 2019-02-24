import React from "react";
import { Link } from "react-router-dom";
import { Button, Card, Segment } from "semantic-ui-react";

const CreateSuccessPage = props => {
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
              >{`https://www.deetz.io/respond/${contactListId}`}</p>
            </Segment>
        </div>
        <div className="card-row">
       
          <Button
          as= {Link}
          to={`/responses/${contactListId}`}
           
            fluid
            className="card-button btn-primary"
            size="large"
          >
            View Responses
          </Button>
        </div>
      </div>
    </Card>
  );
};

export default CreateSuccessPage;
