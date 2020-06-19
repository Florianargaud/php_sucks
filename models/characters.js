const mysql = require("mysql");

// Ici, on s'occupe de la BDD SQL
const connection = mysql.createConnection({
  host: "localhost",
  user: "sonic_db",
  password: "sonic_db",
  database: "sonic_db",
});

// On tente de se connecter à la BDD
connection.connect(function (err) {
  if (err) throw err;
  console.log("Connected to the DB!");
});

// Lorsque que getUser est appelé, on envoie une requéte
// puis on envoie les données (results)
module.exports.getUser = (cb) => {
  connection.query("SELECT * FROM `character`", function (
    error,
    results,
    fields
  ) {
    if (error) throw error;
    cb(results);
  });
};
