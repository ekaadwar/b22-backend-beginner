const route = require("express").Router();

const {
  getItems,
  insertItems,
  detailItems,
  // updatePartial,
} = require("../controllers/items");

route.get("/", getItems);
route.get("/:id", detailItems);
route.post("/", insertItems);
// route.patch("/:id", updatePartial);

module.exports = route;
