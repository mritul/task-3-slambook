const express = require("express");
const bcrypt = require("bcryptjs");
const router = express.Router();
const User = require("../models/userModel");
const passport = require("passport");

// POST /register - Creation of a user in the database
router.post("/register", (req, res) => {
  //Checking if username is already taken and then proceeding
  User.findOne({ username: req.body.username }, (err, user) => {
    if (err) {
      console.log(err);
    } else {
      if (user) {
        res.send({ msg: "Username already taken" });
      } else {
        //Saving user details to database if it is found that the username is not taken
        res.send({ msg: "Username available" });
        bcrypt.genSalt(10, (err, salt) => {
          bcrypt.hash(req.body.password, salt, (err, hash) => {
            req.body.password = hash;
            // Capitalizing first and last names before saving to DB
            const fn = req.body.firstName;
            const ln = req.body.lastName;
            var titleCasedFn = "";
            var titleCasedLn = "";
            // Capitalizing first name
            for (let i = 0; i < fn.length; i++) {
              if (i == 0) {
                titleCasedFn += fn[i].toUpperCase();
              } else {
                titleCasedFn += fn[i].toLowerCase();
              }
            }
            // Capitalizing last name only if it exists(as it is not a mandatory field)
            if (ln) {
              for (let i = 0; i < ln.length; i++) {
                if (i == 0) {
                  titleCasedLn += ln[i].toUpperCase();
                } else {
                  titleCasedLn += ln[i].toLowerCase();
                }
              }
            }
            req.body.firstName = titleCasedFn;
            req.body.lastName = titleCasedLn;
            const user = new User(req.body);
            user
              .save()
              .then(() => console.log("Data saved"))
              .catch((err) => {
                throw err;
              });
          });
        });
      }
    }
  });
});

//POST - /login - For logging the user in
router.post("/login", (req, res, next) => {
  // 'info' parameter holds the message we send in the done() function in passportConfig.js (in our case "Incorrect username or password")
  passport.authenticate("local", (err, user, info) => {
    if (err) {
      throw err;
    }
    if (!user) {
      res.send({ info }); // info is wrapped inside an object because in frontend res.data.info.message is called not simpy res.data.message
    } else {
      // !IMPORTANT:- user is the argument passed into login() not the parameter of the callback function (i.e along with err)
      req.login(user, (err) => {
        if (err) {
          throw err;
        }
        // This object is made to filter all fields of user object except password to prevent it from being sent as response to frontend as it would be exposed
        const object_to_send = {
          info: info,
          _id: user._id,
          firstName: user.firstName,
          lastName: user.lastName,
          username: user.username,
          slambookAnswers: user.slambookAnswers,
          department: user.department,
          about: user.about,
          batch: user.batch,
          isAuthenticated: true, // Note that we send this to the frontend for protected routes for dashboard, search, etc
        };
        res.send(object_to_send);
      });
    }
    // AFTER THE AUTHENTICATION, NOW THE req.user HAS ALL THE DETAILS ABOUT THE USER WE NEED THAT WE CAN SEND TO THE FRONTEND
    console.log(req.user); // Gives the entire user object in our mongoDB
  })(req, res, next);
});

module.exports = router;
