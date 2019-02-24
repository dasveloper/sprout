import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import ResponseForm from "../components/ResponseForm";
import RespondSuccess from "../components/RespondSuccess";

import { fetchFormDetails, submitResponse } from "../actions/responseForm";
import { createContactList } from "../actions/contactList";
import Loader from "../components/Loader";
class CreateContactWizard extends Component {
  constructor(props) {
    super(props);
   
  }

  componentDidMount() {
    let formId = this.props.match.params.formId;
    if (formId) {
      this.props.fetchFormDetails(formId);
    }
  }
  componentDidUpdate(prevProps) {
    if (prevProps.match.params.formId !== this.props.match.params.formId) {
      this.props.fetchFormDetails(this.props.match.params.formId);
    }
  }
  renderResponseForm() {
    const { contactList, respond, onSubmit, submitResponse } = this.props;

    const { form, loading, respondSuccess } = respond;
    console.log(form);
    if (loading) {
      return <Loader />;
    } else if (respondSuccess) {
      return <RespondSuccess />;
    } else
      return (
        <ResponseForm
          formDetails={form}
          initialValues={{ formId: form._id }}
          onSubmit={submitResponse}
        />
      );
  }

  renderWizardPages() {
    const { onSubmit, submitResponse } = this.props;

    const { page } = this.state;
    return (
      <Fragment>{page === 1 && <ResponseForm onSubmit={this} />}</Fragment>
    );
  }
  render() {
    return (
      <div className="container-inner center">{this.renderResponseForm()}</div>
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
