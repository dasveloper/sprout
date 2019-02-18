import React from 'react';

const renderField = ({ input, label, type, meta: { touched, error } }) => (
  <div className="form-field">
    <label>{label}</label>
    <div>
      <input class="form-input" {...input} placeholder={label} type={type} />
      {touched && error && <span>{error}</span>}
    </div>
  </div>
);

export default renderField;
