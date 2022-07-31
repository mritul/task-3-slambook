const express = require("express");
const User = require("../models/userModel");
const router = express.Router();

//GET /api/get-profiles with query parameter "name" - To provide profiles with first name containing "name"
router.get("/get-profiles", (req, res) => {
  const name = req.query.name;
  // Title casing the name before comparing with the DB as that's how first and last names are stored in the DB
  let titleCasedName = "";
  for (let i = 0; i < name.length; i++) {
    if (i == 0) {
      titleCasedName += name[i].toUpperCase();
    } else {
      titleCasedName += name[i].toLowerCase();
    }
  }
  User.find({ firstName: titleCasedName })
    .then((profiles) => {
      let array_to_send = [];
      profiles.forEach((profile) => {
        // Filtering out password and slambookAnswers before sending
        const object_to_send = {
          _id: profile._id,
          firstName: profile.firstName,
          lastName: profile.lastName,
          username: profile.username,
          department: profile.department,
          about: profile.about,
          batch: profile.batch,
        };
        array_to_send.push(object_to_send);
      });
      console.log(array_to_send, titleCasedName);
      res.json({ profiles: array_to_send });
    })
    .catch((err) => {
      throw err;
    });
});

// GET /api/get-user-details with query parameter id - To give details of a user for a given id
router.get("/get-user-details", (req, res) => {
  const id = req.query.id;
  console.log(id);
  User.findOne({ _id: id })
    .then((user) => {
      const object_to_send = {
        _id: user._id,
        firstName: user.firstName,
        lastName: user.lastName,
        username: user.username,
        department: user.department,
        about: user.about,
        batch: user.batch,
      };
      res.send(object_to_send);
    })
    .catch((err) => {
      throw err;
    });
});

//POST /api/slambook/:id - Updating the empty fields (the comments object) of the mongoose model "User" with the form fields of the slambook page

router.post("/slambook/:id", (req, res) => {
  res.send("Hi");
});

module.exports = router;
