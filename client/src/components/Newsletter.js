import React from "react";
import { Field, reduxForm } from "redux-form";
import { connect } from "react-redux";

let Newsletter = props => {
  const {
    handleSubmit,
    pristine,
    previousPage,
    submitting,
    error,
    email
  } = props;
  const { message } = email;
  return (
    <form className="newsletter-wrapper" onSubmit={handleSubmit}>
      <h4 className="newsletter-cta">
        Sprout is <span className="coming-soon">coming soon</span>, follow us to
        be notified when we're ready.
      </h4>

      <div className="input-group">
        <Field
          className="newsletter-input"
          name="email"
          placeholder="Email address"
          type="email"
          component="input"
        />
        <input
          className="newsletter-subscribe"
          type="submit"
          value="Subscribe"
        />
      </div>
      {message && (
          <p className="newsletter-success">{message}</p>
      )}
      {error && !message && (
        <div className="card-row">
          <p className="newsletter-error">{error.message}</p>
        </div>
      )}
    </form>
  );
};

function mapStateToProps({ form, email }) {
  return {
    form,
    email
  };
}

Newsletter = connect(mapStateToProps)(Newsletter);

export default reduxForm({
  form: "email", //                 <------ same form name
  forceUnregisterOnUnmount: true // <------ unregister fields on unmount
})(Newsletter);
