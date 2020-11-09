
// ==== burger.js ====

// Import the ORM to create functions that will interact with the database.
const orm = require("../config/orm.js");

var burger = {
  all: (cb) => {
    orm.all("burgers", (res) => {
      cb(res);
    });
  },
  
  create: function (vals, cb) {
      orm.create("burgers", "burger_name", vals, (res) => {
      cb(res);
    });
  },

  update: (objColVals, condition, cb) => {
    orm.update("burgers", objColVals, condition, (res) => {
      cb(res);
    });
  }
};

// Export the database functions for the controller (burgersController.js).
module.exports = burger;
