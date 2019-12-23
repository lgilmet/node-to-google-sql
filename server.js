// adapted from tutorial from
// https://www.codementor.io/@julieisip/learn-rest-api-using-express-js-and-mysql-db-ldflyx8g2

// to build and host
// gcloud run deploy

const express = require("express"),
  app = express(),
  bodyParser = require("body-parser"),
  port = process.env.PORT || 8080;

app.listen(port);

console.log("API server started on: ", port);

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

let routes = require("./app/routes/appRoutes");
routes(app);
