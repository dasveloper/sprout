import React, { Fragment, Component } from "react";
import PropTypes from "prop-types";
import WizardFormFirstPage from "../components/WizardFormFirstPage";
import WizardFormSecondPage from "../components/WizardFormSecondPage";
import WizardFormThirdPage from "../components/WizardFormThirdPage";
import SuccessPage from "../components/SuccessPage";
import ResponsesTable from "../components/ResponsesTable";
import PermissionDenied from "../components/PermissionDenied";
import _ from "lodash";

import { connect } from "react-redux";
import { reduxForm } from "redux-form";
import validate from "../components/validate";
import { fetchResponses } from "../actions/responses";
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
  Menu
} from "semantic-ui-react";

const tableData = [
  { name: "John", age: 15, gender: "Male" },
  { name: "Amber", age: 40, gender: "Female" },
  { name: "Leslie", age: 25, gender: "Female" },
  { name: "Ben", age: 70, gender: "Male" }
];

class Responses extends Component {
  constructor(props) {
    super(props);
    this.state = { column: null, data: tableData, direction: null };
  }
  async componentDidMount() {
    let formId = this.props.match.params.formId;
    if (formId) {
      this.props.fetchResponses(formId);
    }
  }

  handleSort = clickedColumn => () => {
    const { column, data, direction } = this.state;

    if (column !== clickedColumn) {
      this.setState({
        column: clickedColumn,
        data: _.sortBy(data, [clickedColumn]),
        direction: "ascending"
      });

      return;
    }

    this.setState({
      data: data.reverse(),
      direction: direction === "ascending" ? "descending" : "ascending"
    });
  };

  componentDidUpdate(prevProps) {
    // Typical usage (don't forget to compare props):
    console.log(this.props.match.params)
    if (this.props.match.params.formId !== prevProps.match.params.formId) {
      this.props.fetchResponses(this.props.match.params.formId);
    }
  }
  renderResponsePage() {
    const { responsesPage } = this.props;
    const { column, data, direction } = this.state;
    const { form, error } = responsesPage;

    if (error) return <PermissionDenied />;
    else if (form === null)
    return <p>"loading"</p>;
    else if (form === false)
    return <p>form not found</p>;
  
    else
      return (
<ResponsesTable form={form}/>
      );
  }
  render() {

    return <div class="container-inner">{this.renderResponsePage()}</div>;
  }
}

function mapStateToProps({ responsesPage }) {
  return {
    responsesPage
  };
}
const mapDispatchToProps = {
  fetchResponses
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Responses);
