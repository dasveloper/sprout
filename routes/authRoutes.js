const passport = require("passport");

module.exports = app => {
  //Request Google Auth
  app.get(
    "/auth/google",
    passport.authenticate("google", {
      scope: ["profile", "email"]
    })
  );
  //Callback Google Auth
  app.get(
    "/auth/google/callback",
    passport.authenticate("google", {
      successRedirect: "/",
      failureRedirect: "/login"
    })
  ); //Check user status
  app.get("/api/current_user", (req, res) => {
    res.send(req.user);
  });
  //Logout User
  app.get("/auth/logout", (req, res) => {
    req.logout();
    res.redirect("/");

  });
};
