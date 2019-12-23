// adapted from tutorial from
// https://www.codementor.io/@julieisip/learn-rest-api-using-express-js-and-mysql-db-ldflyx8g2

// to build and host
// gcloud run deploy

const express = require("express"),
  app = express(),
  bodyParser = require("body-parser"),
  port = process.env.PORT || 8080;

app.listen(port);

let mysql = require("mysql");

// connection info at https://cloud.google.com/sql/docs/mysql/connect-run
let connection = mysql.createConnection({
  // this works in local
  host: "34.68.36.210",

  // tutorial is name of google project as well as db user and pw
  //socketPath: "/cloudsql/restapi-262619:us-central1:tutorial",
  user: "tutorial",
  password: "tutorial",
  database: "todos"
});

//connection.connect();
connection.connect(function(err) {
  // this is the where shit hits the fan/console
  if (err) throw err;
});

console.log("CLICK HERE -> ", `http://localhost:${port}/todos`);

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

let routes = require("./app/routes/appRoutes");
routes(app);
