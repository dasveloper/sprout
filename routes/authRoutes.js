const passport = require("passport");
var auth_controller = require("../controllers/authController");

module.exports = app => {

  //Signup with local auth (email/password)
  app.post("/auth/register", auth_controller.register_local);

  //Login with local auth (email/password)
  app.post("/auth/login", auth_controller.login_local);


  //Forgot password
  app.post("/auth/forgotPassword", auth_controller.forgot_password);


  //Request Google Auth
  ///app.get(
    //"/auth/google",
    //passport.authenticate("google", {
     // scope: ["profile", "email"]
    //})
  //);
  //Callback Google Auth
  //app.get(
   // "/auth/google/callback",
    //passport.authenticate("google", {
      //successRedirect: "/",
      //failureRedirect: "/login"
    //})
  //); //Check user status
  app.get("/api/current_user", (req, res) => {
    res.send(req.user);
  });
  //Logout User
  app.get("/auth/logout", (req, res) => {
    req.logout();
    res.redirect("/");
  });
};
