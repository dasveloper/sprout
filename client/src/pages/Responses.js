import React, { Fragment, Component } from "react";
import PropTypes from "prop-types";
import WizardFormFirstPage from "../components/WizardFormFirstPage";
import WizardFormSecondPage from "../components/WizardFormSecondPage";
import WizardFormThirdPage from "../components/WizardFormThirdPage";
import SuccessPage from "../components/SuccessPage";
import _ from 'lodash'

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
  Table } from 'semantic-ui-react'

const tableData = [
  { name: 'John', age: 15, gender: 'Male' },
  { name: 'Amber', age: 40, gender: 'Female' },
  { name: 'Leslie', age: 25, gender: 'Female' },
  { name: 'Ben', age: 70, gender: 'Male' },
]

class Responses extends Component {
  constructor(props) {
    super(props);
    this.state = {    column: null,
        data: tableData,
        direction: null};
  }
  async componentDidMount() {
    let formId = this.props.match.params.formId;
    if (formId) {
      this.props.fetchResponses(formId);
    }
  }

  handleSort = clickedColumn => () => {
    const { column, data, direction } = this.state

    if (column !== clickedColumn) {
      this.setState({
        column: clickedColumn,
        data: _.sortBy(data, [clickedColumn]),
        direction: 'ascending',
      })

      return
    }

    this.setState({
      data: data.reverse(),
      direction: direction === 'ascending' ? 'descending' : 'ascending',
    })
  }

  componentDidUpdate(prevProps) {
    // Typical usage (don't forget to compare props):
    if (this.props.match.params.formId !== prevProps.match.params.formId) {
      this.props.fetchResponses(this.props.match.params.formId);
    }
  }

  render() {
    const { responsesPage } = this.props;
    const { column, data, direction } = this.state
    const {responses } = responsesPage;
    return   <Container className="create-container" style={{paddingTop: 100}}>
      <Card style={{width: '100%'}} raised>
         <Table sortable celled fixed>
    <Table.Header>
      <Table.Row>
        <Table.HeaderCell
          sorted={column === 'name' ? direction : null}
          onClick={this.handleSort('name')}
        >
        Name
        </Table.HeaderCell>
        <Table.HeaderCell
          sorted={column === 'email' ? direction : null}
          onClick={this.handleSort('email')}
        >
          Email
        </Table.HeaderCell>
        <Table.HeaderCell
          sorted={column === 'phone' ? direction : null}
          onClick={this.handleSort('phone')}
        >
          Phone
        </Table.HeaderCell>
        <Table.HeaderCell
          sorted={column === 'address' ? direction : null}
          onClick={this.handleSort('address')}
        >
          Address
        </Table.HeaderCell>

      </Table.Row>
    </Table.Header>
    <Table.Body>
      {_.map(responses, ({ name, email, phone, address }) => (
        <Table.Row key={name}>
          <Table.Cell>{name}</Table.Cell>
          <Table.Cell>{email}</Table.Cell>
          <Table.Cell>{phone}</Table.Cell>
          <Table.Cell>{address}</Table.Cell>

        </Table.Row>
      ))}
    </Table.Body>
  </Table>
  </Card>
  </Container>
  }
}

function mapStateToProps({ responsesPage }) {
  console.log(responsesPage);
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
