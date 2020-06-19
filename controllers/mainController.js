var charModel = require("../models/characters");

var usersController = {
  userHome(req, res) {
    charModel.getUser((data, err) => {
      try {
        if (err) {
          console.log("ERRORS OK");
          console.log(err);
        } else if (data) {
          console.log("DATAS OK");
          res.render("home", { data: data });
          // res.send("Holle")
        } else {
          res.render("home", { data: {} });
        }
      } catch (error) {
        console.log(error);
      }
    });
  },
};

module.exports = usersController;
