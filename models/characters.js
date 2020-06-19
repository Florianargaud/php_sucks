const mysql = require("mysql");

const connection = mysql.createConnection({
  host: "localhost",
  user: "sonic_db",
  password: "sonic_db",
  database: "sonic_db",
});

connection.connect(function (err) {
  if (err) throw err;
  console.log("Connected to the DB!");
});

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
