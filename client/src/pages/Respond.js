import React, { Fragment, Component } from "react";
import PropTypes from "prop-types";
import ResponseForm from "../components/ResponseForm";

import SuccessPage from "../components/SuccessPage";

import { connect } from "react-redux";
import { reduxForm } from "redux-form";
import validate from "../components/validate";
import { fetchFormDetails, submitResponse } from "../actions/responseForm";
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
      page: 1,
      formId: null
    };
  }

  componentDidMount() {
    let formId = this.props.match.params.formId;
    if (formId) {
      this.props.fetchFormDetails(formId);
    }
  }
  componentDidUpdate(prevProps) {
    if (prevProps.match.params.formId !== this.props.match.params.formId) {
      let formId = this.props.match.params.formId;
      alert(formId);

      // this.props.fetchFormDetails(formId);
    }
  }
  renderResponseForm() {
    const { contactList, respond, onSubmit, submitResponse } = this.props;

    const { form } = respond;
    switch (form) {
      case null:
        return (
          <div className="loader-wrapper">
            <p className="loader-text">Loading dashboard...</p>
          </div>
        );
      case false:
        return (
          <div >
            <p>
              Sorry, we could not find this form.
            </p>
          </div>
        );
      default:
        return (
            <ResponseForm formDetails={form}  initialValues={{formId: form._id} } onSubmit={submitResponse} />

        );
    }
  }
  nextPage() {
    this.setState({ page: this.state.page + 1 });
  }

  previousPage() {
    this.setState({ page: this.state.page - 1 });
  }
  renderWizardPages() {
    const { onSubmit, submitResponse } = this.props;

    const { page } = this.state;
    return (
      <Fragment>
        {page === 1 && <ResponseForm onSubmit={this} />}
      </Fragment>
    );
  }
  render() {


    return (
      <div class="create-container">
        {this.renderResponseForm()}
      </div>
    );
  }
}

function mapStateToProps({ form, contactList, respond }) {
  return {
    form,
    contactList,
    respond
  };
}
const mapDispatchToProps = {
  fetchFormDetails,
  submitResponse,
  createContactList

};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CreateContactWizard);
