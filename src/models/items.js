const db = require("../helpers/database");

exports.getItems = (cb) => {
  db.query(`SELECT name, price FROM items`, cb);
};

exports.getItemById = (id, cb) => {
  db.query(`SELECT name, price FROM items WHERE id=${id}`, cb);
};

exports.insertItems = (data, cb) => {
  db.query(`INSERT INTO items (name, price) VALUES('${data.name}', ${data.price})`, cb);
};

exports.updateItemPartial = (data, cb) => {
  const key = Object.keys(data);
  const keyLength = key.length;
  const columnItem = key[keyLength - 1];
  db.query(`UPDATE items SET ${columnItem}=? WHERE id=?`, [data[columnItem], data.id], cb);
};

exports.updateItem = (data, cb) => {
  db.query(`UPDATE items SET name=?, price=? WHERE id=?`, [data.name, data.price, data.id], cb);
};

exports.deleteItem = (data, cb) => {
  db.query(`DELETE FROM items WHERE id=?`, [data], cb);
};
