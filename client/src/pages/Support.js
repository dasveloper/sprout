import React from "react";
import { Link } from "react-router-dom";
import { Button, Card } from "semantic-ui-react";

const PageNotFound = props => {
  return (
    <div className="container-inner center">
      <Card fluid className="card-wrapper" raised>
        <div className="card-inner">
          <div className="card-header-wrapper">
            <span className="card-header">Contact us</span>
            <span className="card-subheader">
              Send us an email and we'll be happy to help
            </span>
          </div>
          <div className="card-row row-spacing">
            <h1>me@justinharr.com</h1>
          </div>
        </div>
      </Card>
    </div>
  );
};

export default PageNotFound;
