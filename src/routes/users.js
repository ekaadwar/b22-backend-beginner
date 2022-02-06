const route = require("express").Router();

const method = require("../controllers/users");

route.get("/", method.getUsers);
route.get("/:id", method.getUserById);
route.post("/", method.addUser);
route.delete("/:id", method.deleteUser);

module.exports = route;
