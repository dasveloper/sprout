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

class Dashboard extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  componentDidMount() {
    this.props.fetchForms();
  }
  renderEmptyList() {
    return (
      <div className="card-inner">
        <div className="card-header-wrapper">

          <span className="card-subheader">No contact lists found</span>
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
      </div>
    );
  }
  renderFormList() {
    const { dashboard } = this.props;
    const { forms } = dashboard;
    return (
      <div className="card-inner center">
              <div className="card-header-wrapper">
          <span className="card-header">Your contact lists</span>

        </div>
        <List className="form-list" divided verticalAlign="middle">
          {forms.map(function(form, i) {
            return (
              <List.Item key={form._id}>
                <List.Content>
                  <div className="list-left-wrapper">
                    <h4 className="list-name">{form.listName}</h4>

                    <div className="list-type-wrapper">
                      <Label
                        className={`type-badge ${
                          form.showEmail ? "enabled" : ""
                        }`}
                        size="small"
                      >
                        <Icon className="type-badge-icon" name="mail" />
                        email
                      </Label>
                      <Label
                        className={`type-badge ${
                          form.showPhone ? "enabled" : ""
                        }`}
                        size="small"
                      >
                        <Icon className="type-badge-icon" name="phone" />
                        phone
                      </Label>
                      <Label
                        className={`type-badge ${
                          form.showAddress ? "enabled" : ""
                        }`}
                        size="small"
                      >
                        <Icon className="type-badge-icon" name="home" />
                        address
                      </Label>
                    </div>
                  </div>
                </List.Content>
                <List.Content>
                  <Label className="form-list-label">
                    {form.responses.length}
                  </Label>

                  <Button
                    as={Link}
                    to={`/responses/${form._id}`}
                    className="form-list-button"
                  >
                    View Contacts
                  </Button>
                </List.Content>
              </List.Item>
            );
          })}
        </List>
      </div>
    );
  }
  render() {
    const { dashboard } = this.props;
    const { forms } = dashboard;
    return (
      <div class="container-inner ">
        <Card fluid className="card-wrapper" raised>
          {forms.length === 0 ? this.renderEmptyList() : this.renderFormList()}
        </Card>
      </div>
    );
  }
}

function mapStateToProps({ user, dashboard }) {
  return {
    user,
    dashboard
  };
}
const mapDispatchToProps = {
  fetchForms
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Dashboard);
