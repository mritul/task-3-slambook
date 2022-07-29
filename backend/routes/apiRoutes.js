const express = require("express");
const router = express.Router();

//POST /users/:id/slambook - Updating the empty fields (the comments object) of the mongoose model "User" with the form fields of the slambook page
router.post("/:id/slambook", (req, res) => {
  res.send("Hi");
});

module.exports = router;
