const db = require("../helpers/database");

exports.getItems = (cb) => {
  db.query(`SELECT name, price FROM items`, cb);
};

exports.getItemById = (id, cb) => {
  db.query(`SELECT name, price FROM items WHERE id=${id}`, cb);
};

exports.insertItems = (data, cb) => {
  db.query(
    `INSERT INTO items (name, price) VALUES('${data.name}', ${data.price})`,
    cb
  );
};
