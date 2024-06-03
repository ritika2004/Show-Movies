const express = require("express");
const app = express();
const ejsMate = require("ejs-mate");
const path = require("path");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const userRoutes = require("./routes/user.routes.js");
const homeroutes = require("./routes/home.routes.js");
const movieroutes = require("./routes/movie.routes.js");
const User = require("./models/User");

// middleware
app.engine("ejs", ejsMate);
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));
app.use(bodyParser.json());
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));
app.use(express.urlencoded({ extended: true }));
app.use(userRoutes);
app.use(homeroutes);
app.use(movieroutes);
mongoose
  .connect("mongodb://127.0.0.1:27017/Movies")
  .then(() => {
    console.log("Connected to MongoDB");
  })
  .catch((err) => {
    console.error("Error connecting to MongoDB:", err);
  });

app.listen(8080, () => {
  console.log("Server is running at port 8080");
});
