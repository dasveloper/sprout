import React from "react";
import { Input } from "semantic-ui-react";

const renderField = ({
  input,
  className,
  size,
  placeholder,
  type,
  icon,
  iconPosition,
  meta: { touched, error }
}) => (
    <div className="card-field">
      <Input
        {...input}
        placeholder={placeholder}
        type={type}
        className={`card-field-input ${className}`}
        size={size}
        icon={icon}
        iconPosition ={iconPosition}
      />

      {touched && error && <span className="card-field-error">{error}</span>}
    </div>
);

export default renderField;