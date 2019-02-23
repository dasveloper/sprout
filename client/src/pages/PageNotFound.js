import React, { Fragment, Component } from "react";
import PropTypes from "prop-types";
import WizardFormFirstPage from "../components/WizardFormFirstPage";
import WizardFormSecondPage from "../components/WizardFormSecondPage";
import WizardFormThirdPage from "../components/WizardFormThirdPage";
import SuccessPage from "../components/SuccessPage";
import _ from "lodash";
import { Link } from "react-router-dom";
import Moment from "react-moment";
import moment from "moment";
import { connect } from "react-redux";
import { reduxForm } from "redux-form";
import validate from "../components/validate";
import { fetchResponses } from "../actions/responses";
import { fetchForms } from "../actions/form";

import {
  Icon,
  Image,
  Segment,
  Step,
  Card,
  Input,
  Dropdown,
  Container,
  Table,
  List,
  Button,
  Statistic,
  Label
} from "semantic-ui-react";

const PageNotFound = props => {
  return (
    <div class="container-inner center">
      <Card fluid className="card-wrapper" raised>
      <div className="card-inner">

        <div class="card-row row-spacing">
          <h2>
            <span>404</span> page not found
          </h2>
        </div>
        <div className="card-row">
          <Button
            as={Link}
            to={"/create"}
            className="card-button"
            fluid
            size="large"
          >
            Create a contact list
          </Button>
        </div>
        <div className="card-row">
          <Button
            as={Link}
            to={"/dashboard"}
            className="card-button"
            fluid
            size="large"
          >
            Go to your dashboard
          </Button>
        </div>
        </div>
      </Card>
    </div>
  );
};

export default PageNotFound;
