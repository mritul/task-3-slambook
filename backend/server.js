const express = require("express");
const dotenv = require("dotenv");
const mongoose = require("mongoose");
dotenv.config();
const port = process.env.PORT || 5000;
const app = express();

app.get("/", (req, res) => {
  res.status(200).send("Success");
});

mongoose.connect(process.env.MONGODB_URI).then(() => {
  console.log("Database successfully connected");
  app.listen(port, () => {
    console.log(`Server up and running at port ${port}`);
  });
});
