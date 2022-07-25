const express = require("express");
const bcrypt = require("bcryptjs");
const router = express.Router();

const User = require("../models/userModel");

router.post("/users/register", (req, res) => {
  //User details are saved to database
  res.send("Success");
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
});

// router.post("/users/login", (req, res) => {
//   //User details are saved to database
// });

module.exports = router;
