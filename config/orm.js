
// ==== orm.js ====

// Import MySQL connection.
var connection = require("../config/connection.js");

// Object for all our SQL statement functions.
const orm = {
  all: (tableInput, cb) => {
    let queryString = `SELECT * FROM ${tableInput};`;

    connection.query(queryString, (err, result) => {
      if (err) throw err;
      cb(result);
    });
  },

  create: (table, cols, vals, cb) => {
    let queryString = `INSERT INTO ${table} (${cols}) VALUES ("${vals}");`;

      connection.query(queryString, (err, result) => {
      if (err) throw err;
      cb(result);
    });
  },

  update: (table, objColVals, condition, cb) => {
    let queryString = `UPDATE ${table} SET ${objColVals} WHERE ${condition};`;

    connection.query(queryString, (err, result) => {
      if (err) throw err;
      cb(result);
    });
  }
};

// Export the orm object for the model (burger.js).
module.exports = orm;
