import _ from "lodash";
import React, { Component } from "react";
import { connect } from "react-redux";
import {
  Card,
  Confirm,
  Dropdown,
  Input,
  Menu,
  Table,
  Segment
} from "semantic-ui-react";
import { fetchResponses } from "../actions/responses";
import { deleteContactList } from "../actions/contactList";

class Responses extends Component {
  constructor(props) {
    super(props);

    this.state = {
      deleteConfirmationOpen: false,
      column: null,
      // data: tableData,
      direction: null
    };
  }
  deleteList(formId) {
    this.props.deleteContactList(formId);
    this.closeDeleteConfirmation();
  }
  openDeleteConfirmation = () =>
    this.setState({ deleteConfirmationOpen: true });
  closeDeleteConfirmation = () =>
    this.setState({ deleteConfirmationOpen: false });
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
    const { listName, _id, responses } = form;
    const { column, data, direction, deleteConfirmationOpen } = this.state;
    const options = [
      {
        key: "delete",
        icon: "delete",
        text: "Delete List",
        value: "delete",
        onClick: this.openDeleteConfirmation
      }
    ];
    return (
      <Card fluid className="card-wrapper" raised>
        <Confirm
          cancelButton="Cancel"
          confirmButton="Delete"
          header="Delete contact list"
          content="Are you sure you would like to delete this contact list, the action cannot be undone?"
          open={deleteConfirmationOpen}
          onCancel={this.closeDeleteConfirmation}
          onConfirm={() => this.deleteList(_id)}
        />

        <Menu className="responses-menu">
          <Menu.Item className="responses-menu-name">{listName} </Menu.Item>
          {false && (
            <Menu.Item>
              <Input className="icon" icon="search" placeholder="Search..." />
            </Menu.Item>
          )}
          <Segment
            style={{ justifyContent: "center" }}
            compact
            className="share-wrapper"

          >
            <p
              style={{ textAlign: "center" }}
            >{`https://deetz.io/respond/${_id}`}</p>
          </Segment>
          <Menu.Item >
            <Dropdown text="Options" options={options} />
          </Menu.Item>
        </Menu>

        <Table className="responses-table" sortable celled fixed>
          <Table.Header>
            <Table.Row>
              <Table.HeaderCell
                sorted={column === "name" ? direction : null}
                //onClick={this.handleSort("name")}
              >
                Name
              </Table.HeaderCell>
              <Table.HeaderCell
                sorted={column === "email" ? direction : null}
                // onClick={this.handleSort("email")}
              >
                Email
              </Table.HeaderCell>
              <Table.HeaderCell
                sorted={column === "phone" ? direction : null}
                // onClick={this.handleSort("phone")}
              >
                Phone
              </Table.HeaderCell>
              <Table.HeaderCell
                sorted={column === "address" ? direction : null}
                //onClick={this.handleSort("address")}
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
                <Table.HeaderCell colSpan="4">
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

function mapStateToProps({ user, dashboard }) {
  return {
    user,
    dashboard
  };
}
const mapDispatchToProps = {
  deleteContactList
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Responses);
