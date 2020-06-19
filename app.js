const express = require("express");
var path = require("path");
var userRoutes = require("./routes/routes.index");
const bodyParser = require("body-parser");

const app = express();

app.set("views", path.resolve(__dirname, "views"));
app.set("view engine", "ejs");
app.use(bodyParser.urlencoded({ extended: false }));
app.use("/", userRoutes);

app.listen("3000");

module.exports = app;
