const User = require("../models/userModel");
const bcrypt = require("bcryptjs");
const passport = require("passport");
const LocalStrategy = require("passport-local");

module.exports = function (passport) {
  passport.use(
    new LocalStrategy((username, password, done) => {
      User.findOne({ username: username }, (err, user) => {
        if (err) {
          throw err;
        }
        // If user not found return with the callback
        if (!user) {
          return done(null, false, {
            message: "Incorrect username or password",
          });
        }
        // If user is found then below code is executed
        //Comparing password entered by user and the hashed password in the database
        bcrypt.compare(password, user.password, (err, result) => {
          if (err) {
            throw err;
          }
          // result is a boolean returned based on comparing the two passwords
          if (result == true) {
            return done(null, user, { message: "Login successful" });
          }
          //If passwords dont match return with the callback
          else {
            return done(null, false, {
              message: "Incorrect username or password",
            });
          }
        });
      });
    })
  );

  //Setting up cookies (serializing and deserializing) for accessing the various members of the request object like id, etc
  passport.serializeUser((user, cb) => {
    cb(null, user.id);
  });

  passport.deserializeUser((id, cb) => {
    User.findOne({ _id: id }, (err, user) => {
      cb(err, user);
    });
  });
};
