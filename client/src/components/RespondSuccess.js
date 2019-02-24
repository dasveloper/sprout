import React from "react";
import { Link } from "react-router-dom";
import { Button, Card, Segment } from "semantic-ui-react";

const RespondSuccess = props => {
  const { contactListId } = props;

  return (
    <Card fluid className="card-wrapper" raised>
      <div className="card-inner">
        <div className="card-header-wrapper">
          <span className="card-header">Thanks!</span>
          <span className="card-subheader">
           Your contact information was successfully submitted
          </span>
        </div>

        <div className="card-row">
       
          <Button
          as= {Link}
          to={`/create`}
           
            fluid
            className="card-button start"
            size="large"
          >
           Create your own contact list
          </Button>
        </div>
      </div>
    </Card>
  );
};

export default RespondSuccess;
