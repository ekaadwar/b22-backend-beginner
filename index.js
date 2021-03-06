require("dotenv").config();

const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();

app.use(bodyParser.urlencoded({ extended: false }));

const whiteList = ["http://localhost:3000", "http://localhost:3001"];
app.use(cors(whiteList));

app.get("/", (req, res) => {
  const data = {
    success: true,
    message: "halo World",
  };
  return res.json(data);
});

const routeItems = require("./src/routes/items");
const routeCate = require("./src/routes/categories");
const routeVari = require("./src/routes/variants");
const routeUsers = require("./src/routes/users");

app.use("/items", routeItems);
app.use("/categories", routeCate);
app.use("/variants", routeVari);
app.use("/users", routeUsers);

app.listen(8080, () => {
  console.log("App running ini port 8080");
});
