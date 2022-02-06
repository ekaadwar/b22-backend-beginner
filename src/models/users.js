const db = require("../helpers/database");
const table = "users";

exports.getUsers = (cb) => {
  db.query(
    `
    SELECT id, display_name, email, mobile_number, address, first_name, last_name, gender, birth
    FROM ${table}
  `,
    cb
  );
};

exports.getUserById = (id, cb) => {
  db.query(
    `
    SELECT display_name, email, password, mobile_number, address, first_name, last_name, gender, birth
    FROM ${table}
    WHERE id=${id}
  `,
    cb
  );
};

exports.addUser = (data, cb) => {
  db.query(
    `
    INSERT INTO ${table} (email, password, mobile_number)
    VALUE (?,?,?)
  `,
    [data.email, data.password, data.mobileNumber],
    cb
  );
};

exports.countData = (id, cb) => {
  db.query(
    `
  SELECT COUNT(id) FROM ${table} WHERE id=${id}
`,
    cb
  );
};

exports.deleteUser = (id, cb) => {
  db.query(`DELETE FROM ${table} WHERE id=?`, [id], cb);
};
