import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { Button, Card, Icon, Label, List } from "semantic-ui-react";
import { fetchLists } from "../actions/dashboard";
import Loader from "../components/Loader";
class Dashboard extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  componentDidMount() {
    this.props.fetchLists();
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
  renderLists() {
    const { dashboard } = this.props;
    const { lists } = dashboard;
    return (
      <div className="card-inner">
        <div className="card-header-wrapper">
          <span className="card-header">Your contact lists</span>
        </div>
        <List className="form-list" divided verticalAlign="middle">
          {lists.map(function(list, i) {
            return (
              <List.Item key={list._id}>
                <List.Content>
                  <div className="list-left-wrapper">
                    <h4 className="list-name">{list.listName}</h4>

                    <div className="list-type-wrapper">
                      <Label
                        className={`type-badge ${
                          list.showEmail ? "enabled" : ""
                        }`}
                        size="small"
                      >
                        <Icon className="type-badge-icon" name="mail" />
                        email
                      </Label>
                      <Label
                        className={`type-badge ${
                          list.showPhone ? "enabled" : ""
                        }`}
                        size="small"
                      >
                        <Icon className="type-badge-icon" name="phone" />
                        phone
                      </Label>
                      <Label
                        className={`type-badge ${
                          list.showAddress ? "enabled" : ""
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
                    {list.responses.length}
                  </Label>

                  <Button
                    as={Link}
                    to={`/responses/${list._id}`}
                    className="form-list-button btn-primary"
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

  renderDashBoard() {
    const { dashboard } = this.props;
    const { lists, loading, error } = dashboard;
    if (loading) {
      return <Loader />;
    } else if (error) {
      return "Something went wrong";
    } else {
      return (
        <Card fluid className="card-wrapper" raised>
          {lists.length === 0 ? this.renderEmptyList() : this.renderLists()}
        </Card>
      );
    }
  }
  render() {
    const { dashboard } = this.props;
    const { lists } = dashboard;
    return <div className="container-inner center">{this.renderDashBoard()}</div>;
  }
}

function mapStateToProps({ dashboard }) {
  return {
    dashboard
  };
}
const mapDispatchToProps = {
  fetchLists
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Dashboard);
