var express = require("express");
var userControler = require("../controllers/mainController");

var router = express.Router();

router.get("/", userControler.userHome);
router.get("/authors", (req, res) => {
  res.render("authors");
});

module.exports = router;
