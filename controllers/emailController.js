const passport = require("passport");
const keys = require("../config/keys.js");
const mongoose = require("mongoose");
const validate = require("../helpers/validation");

const Email = mongoose.model("Email");

exports.subscribe_email = function(req, res, next) {
  const { email } = req.body;
  if (!validate(email, "email")) {
    return res.status(400).json({
      success: false,
      message: "Please provide a valid email address"
    });
  }

  var newEmail = new Email({
    email
  });

  // we create our new subscription in our database
  Email.create(newEmail, (err, response) => {
    if (err) {
      if (err.name === "MongoError" && err.code === 11000) {
        return res.status(400).json({
          success: false,
          message: "This email is already subscribed"
        });
      } else {
        return res.status(400).json({
          success: false,
          message: "Oh no! Something went wrong."
        });
      }
    }
    return res.status(200).json({
      success: true,
      message: "Email saved successfully"
    });
  });
};
