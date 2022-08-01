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
  User.find({
    $or: [{ firstName: titleCasedName }, { username: name.toLowerCase() }],
  })
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
      res.json({ profiles: array_to_send });
    })
    .catch((err) => {
      throw err;
    });
});

// GET /api/get-user-details with query parameter id - To give details of a user for a given id
router.get("/get-user-details", (req, res) => {
  const id = req.query.id;
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
  const id = req.params.id;
  const data_to_update = req.body;
  User.findOne({ _id: id })
    .then((user) => {
      const answers = user.slambookAnswers;
      // MongoDB for some reason creates an empty object initially inside the array on first user creation hence when making anew entry into slambook answers, we use an if else to either push to or replace the array elements
      if (JSON.stringify(answers[0]) == "{}") {
        answers[0] = data_to_update;
      } else {
        answers.push(data_to_update);
      }
      User.findByIdAndUpdate(id, { slambookAnswers: answers }).then(() => {
        res.send("Update successful");
      });
    })
    .catch((err) => {
      throw err;
    });
});

// DELETE /api/slambook/:id - To delete the comment from the array in database and the comment to delete can be found out using the unique id it holds(which is passed in url params)
router.delete("/delete-slambook/:commentId", (req, res) => {
  const comment_id = req.params.commentId;
  const user_id = req.user._id;
  User.findOne({ _id: user_id })
    .then((user) => {
      const answers = user.slambookAnswers;
      for (let i = 0; i < answers.length; i++) {
        console.log(answers[i].id, comment_id);
        if (answers[i].id === comment_id) {
          answers.splice(i, 1);
          break;
        }
      }
      // Now updating the DB with the newly updated array
      User.findByIdAndUpdate(user_id, { slambookAnswers: answers }).then(
        (doc) => {
          console.log("Deleted successfully");
          res.send(doc.slambookAnswers);
        }
      );
    })
    .catch((err) => {
      throw err;
    });
});

module.exports = router;
