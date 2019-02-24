//const validate = require("../helpers/validation");
const mongoose = require("mongoose");
const Form = mongoose.model("Form");
const User = mongoose.model("User");
const Response = mongoose.model("Response");
const validate = require("../helpers/validation");

exports.submit_response = function(req, res) {
  const { responseName, responsePhone, responseEmail, responseAddress, formId } = req.body;



  Form.findById(formId, (err, form) => {
    if (err) throw new Error(err);
    var newResponse = new Response({
      name: responseName,
      phone: responsePhone,
      email: responseEmail,
      address: responseAddress,
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
      creatorName: req.user.firstName,

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

exports.delete_form = function(req, res) {
  const { formId } = req.body;

  User.findById(req.user.id, (err, user) => {
    if (err) throw new Error(err);
    Form.findByIdAndRemove(formId, function(err, form) {
      if (err) {
        res.redirect("/");
        throw new Error(err);
      }
      // we insert our newpost in our posts field corresponding to the user we found in our database call
      user.update(
        { _id: req.user._id }, // you not need to use ObjectId here
        { $pull: { forms: { _id: formId } } },
        function(err, result) {
          // can you give here the output of console.log(result);
        }
      );
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
        lists: user.forms
      });
    });
};
