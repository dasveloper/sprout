import React from "react";
import { Message, Card, Button } from "semantic-ui-react";
import { Link } from "react-router-dom";
const PermissionDenied = props => {
  return (
    <div class="container-inner center">
      <Card fluid className="card-wrapper" raised>
        <div className="card-inner">
          <Message
            negative
            icon="remove circle"
            header="Sorry, you don't have permission to view this page"
            content={
              <p>
                If you believe this is an error please{" "}
                <Link to="/support">contact support</Link>
              </p>
            }
          />

          <div className="card-row">
            <Button
              as={Link}
              to={"/dashboard"}
              className="card-button"
              fluid
              size="large"
            >
              Return to your dashboard
            </Button>
          </div>
        </div>
      </Card>
    </div>
  );
};

export default PermissionDenied;
