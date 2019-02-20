import React, { Fragment, Component } from "react";
import PropTypes from "prop-types";
import WizardFormFirstPage from "../components/WizardFormFirstPage";
import WizardFormSecondPage from "../components/WizardFormSecondPage";
import WizardFormThirdPage from "../components/WizardFormThirdPage";
import SuccessPage from "../components/SuccessPage";
import _ from "lodash";
import {Link} from 'react-router-dom';


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

  render() {

    const { dashboard } = this.props;
   const { forms } = dashboard;
   console.log(forms);
    return (
      <Container className="create-container" style={{ paddingTop: 100 }}>
        <Card
          style={{
            width: "100%",
            maxWidth: 500,
            margin: "auto",
            padding: ".5rem"
          }}
          raised
        >
          <List className="form-list" divided verticalAlign="middle">
            {forms.map(function(form, i) {
              return (
                <List.Item key={form._id} style={{ padding: ".5rem" }}>
                  <List.Content style={{ padding: ".5rem" }}>
                    <h4>{form.listName}</h4>
                  </List.Content>
                  <List.Content>
                    <Label className="form-list-label">{form.responses.length}</Label>
                    
                    <Button  as={ Link } to={`/responses/${form._id}`} className="form-list-button">View Responses</Button>
                  </List.Content>
                </List.Item>
              );
            })}
          </List>
        </Card>
      </Container>
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
