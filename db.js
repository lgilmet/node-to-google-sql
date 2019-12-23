let mysql = require("mysql");

// connection info at https://cloud.google.com/sql/docs/mysql/connect-run
let connection = mysql.createConnection({
  // this works in local
  //host: "34.68.36.210",

  // tutorial is name of google project as well as db user and pw
  socketPath: "/cloudsql/restapi-262619:us-central1:tutorial",
  user: "tutorial",
  password: "tutorial",
  database: "todos"
});

connection.connect();
// connection.connect(function(err) {
//   // this is the where shit hits the fan/console
//   if (err) throw err;
// });

module.exports = connection;
