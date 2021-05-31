const route = require("express").Router();

const { getItems, insertItems, detailItems, updatePartial, updateItem } = require("../controllers/items");

route.get("/", getItems);
route.get("/:id", detailItems);
route.post("/", insertItems);
route.patch("/:id", updatePartial);
route.put("/:id", updateItem);

module.exports = route;
