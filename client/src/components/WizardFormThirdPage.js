import React from 'react';
import { Field, reduxForm } from 'redux-form';
import validate from './validate';

const WizardFormThirdPage = props => {
  const { handleSubmit, pristine, previousPage, submitting } = props;
  return (
    <form onSubmit={handleSubmit}>


      <div>
        <label>Let your invitees know why you're collecting contact information</label>
        <div>
          <Field name="notes" component="textarea" placeholder="I'm collecting everyone's email addresses to send out Christmas cards!" />
        </div>
      </div>
      <div>


      </div>
    </form>
  );
};
export default reduxForm({
  form: 'wizard', //                 <------ same form name
  destroyOnUnmount: false, //        <------ preserve form data
  forceUnregisterOnUnmount: true, // <------ unregister fields on unmount
  validate,
})(WizardFormThirdPage);
