const mysql = require("mysql");

const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "coffee",
});

connection.connect();

module.exports = connection;
