import React, { Fragment, Component } from "react";
import PropTypes from "prop-types";
import FormNamePage from "../components/FormNamePage";
import WizardFormFirstPage from "../components/WizardFormFirstPage";
import WizardFormSecondPage from "../components/WizardFormSecondPage";
import WizardFormThirdPage from "../components/WizardFormThirdPage";
import SuccessPage from "../components/SuccessPage";

import { connect } from "react-redux";
import { reduxForm } from "redux-form";
import validate from "../components/validate";
import { createContactList } from "../actions/contactList";

import {
  Icon,
  Image,
  Segment,
  Step,
  Card,
  Input,
  Dropdown
} from "semantic-ui-react";
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
        {page === 1 && <FormNamePage  onSubmit={this.nextPage} />}
        {page === 2 && (
          <WizardFormSecondPage
            previousPage={this.previousPage}
            onSubmit={createContactList}
          />
        )}
        {/** page === 2 && (
          <WizardFormFirstPage
            previousPage={this.previousPage}
            onSubmit={this.nextPage}
          />
        )}/
   
        {page === 4 && (
          <WizardFormThirdPage
            previousPage={this.previousPage}
            onSubmit={createContactList}
          />
        )**/}
      </Fragment>
    );
  }
  render() {
    const { contactList } = this.props;

    const { contactListSubmitted, contactListId } = contactList;
    return (
      <div class="container-inner center">
        {!contactListSubmitted && this.renderWizardPages()}
        {contactListSubmitted && <SuccessPage contactListId={contactListId} />}
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
