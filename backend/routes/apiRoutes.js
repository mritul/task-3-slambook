const express = require("express");
const bcrypt = require("bcryptjs");
const router = express.Router();

const User = require("../models/userModel");

router.post("/users/register", (req, res) => {
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
            var tempFn = "";
            var tempLn = "";
            // Capitalizing first name
            for (let i = 0; i < fn.length; i++) {
              if (i == 0) {
                tempFn += fn[i].toUpperCase();
              } else {
                tempFn += fn[i].toLowerCase();
              }
            }
            // Capitalizing last name only if it exists(as it is not a mandatory field)
            if (ln) {
              for (let i = 0; i < ln.length; i++) {
                if (i == 0) {
                  tempLn += ln[i].toUpperCase();
                } else {
                  tempLn += ln[i].toLowerCase();
                }
              }
            }
            req.body.firstName = tempFn;
            req.body.lastName = tempLn;
            const user = new User(req.body);
            user
              .save()
              .then(() => console.log("Data saved"))
              .catch((err) => console.log(err));
          });
        });
      }
    }
  });
});

module.exports = router;
