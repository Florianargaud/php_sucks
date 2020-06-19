// ici, c'est notre point d'entrée
// on importe d'abord les modules nécessaires
const express = require("express");
var path = require("path");
var userRoutes = require("./routes/routes.index");
const bodyParser = require("body-parser");

// On défini notre variable app
const app = express();

// On donne le chemin de nos views à notre app
app.set("views", path.resolve(__dirname, "views"));
// On définis le moteur utilisé pour les view (ejs dans ce cas)
app.set("view engine", "ejs");
app.use(bodyParser.urlencoded({ extended: false }));
app.use("/", userRoutes);
// On écoute le serveur sur le port 3000
app.listen("3000");

module.exports = app;
