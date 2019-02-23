var validator = require("validator");

module.exports = function validate(value, type) {
  switch (type) {
    case "string":
      return value && !validator.isEmpty(value, { ignore_whitespace: true });

    case "email":
    
      return value && validator.isEmail(value);

    case "url":
      return;
      value ||
        validator.isURL(value, {
          protocols: ["http", "https"],
          require_protocol: true
        });

    default:
      return value && !validator.isEmpty(value, { ignore_whitespace: true });
  }
};
