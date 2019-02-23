//const validate = require("../helpers/validation");
const mongoose = require("mongoose");
const Form = mongoose.model("Form");
const User = mongoose.model("User");
const Response = mongoose.model("Response");

exports.submit_response = function(req, res) {
  const { name, phone, email, address, formId } = req.body;
  Form.findById(formId, (err, form) => {
    if (err) throw new Error(err);
    var newResponse = new Response({
      name: name,
      phone: phone,
      email: email,
      address: address,
      form: formId
    });

    // we create our new post in our database
    Response.create(newResponse, (err, response) => {
      if (err) {
        res.redirect("/");
        throw new Error(err);
      }

      // we insert our newpost in our posts field corresponding to the user we found in our database call
      form.responses.push(newResponse);
      // we save our user with our new data (our new post).
      form.save(err => {
        return res.status(200).json({
          success: true,
          message: response.id
        });
      });
    });
  });
};
exports.create_form = function(req, res) {
  const {
    listName,
    name,
    showAddress,
    showEmail,
    showPhone,
    reason,
    isPlural,
    showName
  } = req.body;

  User.findById(req.user.id, (err, user) => {
    if (err) throw new Error(err);

    var newForm = new Form({
      listName: listName,
      name: name,
      showEmail: showEmail,
      showName: showName,
      showPhone: showPhone,
      showAddress: showAddress,
      isPlural: isPlural,
      reason: reason,
      creator: req.user._id
    });

    // we create our new post in our database
    Form.create(newForm, (err, form) => {
      if (err) {
        res.redirect("/");
        throw new Error(err);
      }

      // we insert our newpost in our posts field corresponding to the user we found in our database call
      user.forms.push(newForm);
      // we save our user with our new data (our new post).
      user.save(err => {
        return res.status(200).json({
          success: true,
          message: form.id
        });
      });
    });
  });
};

exports.get_form = function(req, res) {
  const { formId } = req.query;

  Form.findById(formId, (err, form) => {
    if (err) throw new Error(err);
    return res.status(200).json({
      success: true,
      message: form
    });
  });
};

exports.fetch_responses = function(req, res) {
  const { formId } = req.query;

  Form.findById(formId)
    .populate("responses")
    .exec((err, form) => {
      if (err) throw new Error(err);
      return res.status(200).json({
        success: true,
        form: form
      });
    });
};

exports.fetch_forms = function(req, res) {
  const { formId } = req.query;

  User.findById(req.user.id)
    .populate("forms")
    .exec((err, user) => {
      if (err) throw new Error(err);
      return res.status(200).json({
        success: true,
        forms: user.forms
      });
    });
};
