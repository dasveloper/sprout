import React, { Fragment, Component } from "react";
import PropTypes from "prop-types";
import WizardFormFirstPage from "../components/WizardFormFirstPage";
import WizardFormSecondPage from "../components/WizardFormSecondPage";
import WizardFormThirdPage from "../components/WizardFormThirdPage";
import SuccessPage from "../components/SuccessPage";
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
];    const options = [
  { key: "delete", icon: "delete", text: "Delete List", value: "delete" }
];

class Responses extends Component {
  constructor(props) {
    super(props);
    this.state = { column: null, data: tableData, direction: null };
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

  render() {
    const { form } = this.props;
    const {listName, responses} = form;
    const { column, data, direction } = this.state;

    return (
      <Card fluid className="card-wrapper" raised>
      <Menu className="responses-menu">
        <Menu.Item className="responses-menu-name">{listName} </Menu.Item>
        <Menu.Item>
          <Input className="icon" icon="search" placeholder="Search..." />
        </Menu.Item>
        <Menu.Item position="right">
          <Dropdown item text="Options" options={options} />
        </Menu.Item>
      </Menu>
 
      <Table className="responses-table" sortable celled fixed>
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell
              sorted={column === "name" ? direction : null}
              onClick={this.handleSort("name")}
            >
              Name
            </Table.HeaderCell>
            <Table.HeaderCell
              sorted={column === "email" ? direction : null}
              onClick={this.handleSort("email")}
            >
              Email
            </Table.HeaderCell>
            <Table.HeaderCell
              sorted={column === "phone" ? direction : null}
              onClick={this.handleSort("phone")}
            >
              Phone
            </Table.HeaderCell>
            <Table.HeaderCell
              sorted={column === "address" ? direction : null}
              onClick={this.handleSort("address")}
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

        {responses.length === 0 && (
          <Table.Footer fullWidth>
            <Table.Row>
              <Table.HeaderCell colSpan="4" >
              <div className="no-responses-wrapper">
              <span className="no-responses">No contacts</span>
            </div>
              </Table.HeaderCell>
            </Table.Row>
      
          </Table.Footer>
        )}
      </Table>
      </Card>
    );
  }
}

export default Responses;
