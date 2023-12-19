// Este archivo proporciona una lista de utilidaes para trabajar fácilmente los archivos JSON (Emula una base de datos)
const fs = require("fs");
const path = require("path");

const loadData = function (name) {
  try {
    const data = fs.readFileSync(path.join(__dirname, name + ".json"));
    return JSON.parse(data);
  } catch (error) {
    console.error(error);
  }
};

// const saveData = function (name, data) {};

module.exports = {
  readAll: (name) => {
    return loadData(name);
  },
  create: (name, data) => {},
  readOne: (name, id) => {},
  update: (name, id) => {},
  delete: (name, id) => {},
  find: (name, id) => {},
};
