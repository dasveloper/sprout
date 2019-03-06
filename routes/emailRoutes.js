const passport = require("passport");
var email_controller = require("../controllers/emailController");

module.exports = app => {

  //Signup with local auth (email/password)
  app.post("/email/subscribe", email_controller.subscribe_email);

};
