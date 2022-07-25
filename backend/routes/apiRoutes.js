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
  // res.send("Success");
});

module.exports = router;
