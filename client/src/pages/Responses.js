import _ from "lodash";
import React, { Component } from "react";
import { connect } from "react-redux";
import PermissionDenied from "../components/PermissionDenied";
import ResponsesTable from "../components/ResponsesTable";
import Loader from "../components/Loader";

import { fetchResponses, resetResponses } from "../actions/responses";

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
  componentWillUnmount(){
    this.props.resetResponses();

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
    if (this.props.match.params.formId !== prevProps.match.params.formId) {
      this.props.fetchResponses(this.props.match.params.formId);
    }
  }
  renderResponsePage() {
    const { responsesPage } = this.props;
    const { column, data, direction } = this.state;
    const { form, error,loading } = responsesPage;
    if (error) return <PermissionDenied />;
    else if (loading) return <Loader />;
    else return <ResponsesTable form={form} />;
  }
  render() {
    return <div className="container-inner">{this.renderResponsePage()}</div>;
  }
}

function mapStateToProps({ responsesPage }) {
  return {
    responsesPage
  };
}
const mapDispatchToProps = {
  fetchResponses,
  resetResponses
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Responses);
