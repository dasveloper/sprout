import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import CreateListName from "../components/CreateListName";
import CreateSuccessPage from "../components/CreateSuccessPage";
import CreateContactTypes from "../components/CreateContactTypes";
import { createContactList } from "../actions/contactList";


const options = [
  { key: "is", text: "is", value: "is" },
  { key: "are", text: "are", value: "are" }
];

class CreateContactWizard extends Component {
  constructor(props) {
    super(props);
    this.nextPage = this.nextPage.bind(this);
    this.previousPage = this.previousPage.bind(this);
    this.state = {
      page: 1
    };
  }
  nextPage() {
    this.setState({ page: this.state.page + 1 });
  }

  previousPage() {
    this.setState({ page: this.state.page - 1 });
  }
  renderWizardPages() {
    const { onSubmit, createContactList, form } = this.props;
    const { page } = this.state;
    return (
      <Fragment>
        {page === 1 && <CreateListName  onSubmit={this.nextPage} />}
        {page === 2 && (
          <CreateContactTypes
            previousPage={this.previousPage}
            onSubmit={createContactList}
          />
        )}
      </Fragment>
    );
  }
  render() {
    const { contactList } = this.props;

    const { contactListSubmitted, contactListId } = contactList;
    return (
      <div className="container-inner center">
        {!contactListSubmitted && this.renderWizardPages()}
        {contactListSubmitted && <CreateSuccessPage contactListId={contactListId} />}
      </div>
    );
  }
}

function mapStateToProps({ form, contactList }) {
  return {
    form,
    contactList
  };
}
const mapDispatchToProps = {
  createContactList
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CreateContactWizard);
