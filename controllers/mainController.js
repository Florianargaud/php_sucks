var charModel = require("../models/characters");

// On récupére nos données avec le controller
var usersController = {
  userHome(req, res) {
    charModel.getUser((data, err) => {
      try {
        if (err) {
          console.log("ERRORS OK");
          console.log(err);
        } else if (data) {
          console.log("DATAS OK");
          // Si pas d'erreurs, on sert notre fichier
          // home.ejs avec les données
          res.render("home", { data: data });
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
