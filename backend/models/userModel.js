const mongoose = require("mongoose");
const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  firstName: {
    type: String,
    required: true,
  },
  lastName: {
    type: String,
    required: false,
    default: "",
  },
  department: {
    type: String,
    required: true,
  },
  batch: {
    type: Number,
    required: true,
  },
  about: {
    type: String,
    required: true,
  },
  slamBookAnswers: [
    {
      by: {
        type: String,
        default: "",
      },
      answers: {
        answer1: {
          type: String,
          default: "",
        },
        answer2: {
          type: String,
          default: "",
        },
        answer3: {
          type: String,
          default: "",
        },
      },
    },
  ],
});

module.exports = mongoose.model("User", userSchema);
