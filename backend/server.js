const express = require("express");
const dotenv = require("dotenv");
const mongoose = require("mongoose");
const cors = require("cors");
dotenv.config();
const port = process.env.PORT || 5000;
const app = express();

//<-------------------MIDDLEWARE STARTS----------------->
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(
  cors({
    origin: "http://localhost:3000",
  })
);

//<-------------------MIDDLEWARE ENDS----------------->
app.use("/api", require("./routes/apiRoutes"));

mongoose
  .connect(process.env.MONGODB_URI)
  .then(() => {
    console.log("Database successfully connected");
    app.listen(port, () => {
      console.log(`Server up and running at port ${port}`);
    });
  })
  .catch((err) => console.log(err));
