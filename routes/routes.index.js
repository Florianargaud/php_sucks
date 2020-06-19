//on importe les modules nécessaires, express et notre controller
var express = require("express");
var userControler = require("../controllers/mainController");

var router = express.Router();
// On définis nos routes
router.get("/", userControler.userHome);
// Si la route est /author, on sert directement le fichier
// authors.ejs
router.get("/authors", (req, res) => {
  res.render("authors");
});

module.exports = router;
