const express = require("express");
const dotenv = require("dotenv");
const mongoose = require("mongoose");
const cors = require("cors");
const session = require("express-session");
const cookieParser = require("cookie-parser");
const passport = require("passport");

dotenv.config();
const port = process.env.PORT || 5000;
const app = express();

//<-------------------MIDDLEWARE STARTS----------------->
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(
  cors({
    origin: "http://localhost:3000",
    credentials: true,
  })
);
app.use(
  session({
    secret: `${process.env.SESSION_SECRET}`,
    saveUninitialized: false,
    resave: false,
  })
);
app.use(cookieParser(`${process.env.SESSION_SECRET}`));
app.use(passport.initialize());
app.use(passport.session());
require("./config/passportConfig")(passport);

//<-------------------MIDDLEWARE ENDS----------------->

app.use("/api", require("./routes/apiRoutes"));
// For login and logout
app.use("/", require("./routes/baseRoutes"));

mongoose
  .connect(process.env.MONGODB_URI)
  .then(() => {
    console.log("Database successfully connected");
    app.listen(port, () => {
      console.log(`Server up and running at port ${port}`);
    });
  })
  .catch((err) => console.log(err));
