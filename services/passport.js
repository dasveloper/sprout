const passport = require("passport");
const GoogleStrategy = require("passport-google-oauth20").Strategy;
const keys = require("../config/keys.js");
const mongoose = require("mongoose");
const User = mongoose.model("users");

//Put user in token
passport.serializeUser((user, done) => {
  done(null, user.id);
});

//Get user from token
passport.deserializeUser((id, done) => {
  User.findById(id).then(user => {
    done(null, user);
  });
});

passport.use(
  new GoogleStrategy(
    {
      clientID: keys.googleClientID,
      clientSecret: keys.googleClientSecret,
      callbackURL: "/auth/google/callback"
    },
    (accessToken, refreshToken, profile, done) => {
      User.findOne({ googleId: profile.id }).then(existingUser => {
        if (existingUser) {
          //user exists already
          done(null, existingUser);
        } else {
          //create new user
          new User({
            googleId: profile.id
          })
            .save()
            .then(user => done(null, user));
        }
      });
    }
  )
);