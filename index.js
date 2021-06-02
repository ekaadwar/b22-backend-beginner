const express = require("express");
const bodyParser = require("body-parser");

const app = express();

app.use(bodyParser.urlencoded({ extended: false }));

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

app.use("/items", routeItems);
app.use("/categories", routeCate);
app.use("/variants", routeVari);

app.listen(8080, () => {
  console.log("App running ini port 8080");
});
