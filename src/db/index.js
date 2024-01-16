// Este archivo proporciona una lista de utilidaes para trabajar fácilmente los archivos JSON (Emula una base de datos)
const fs = require("fs");
const path = require("path");

const dataPath = (name) => {
  return path.join(__dirname, name + ".json");
};

const loadData = function (name) {
  try {
    const data = fs.readFileSync(dataPath(name));
    return JSON.parse(data);
  } catch (error) {
    console.error(error);
  }
};

const saveData = function (name, data) {
  fs.writeFileSync(dataPath(name), JSON.stringify(data, null, 2));
};

module.exports = {
  readAll: (name) => {
    return loadData(name);
  },
  create: (name, data) => {
    const oldData = loadData(name);
    oldData.push(data);
    saveData(name, oldData);
  },
  readOne: (name, id) => {
    return loadData(name).find((el) => el.id === id);
  },
  update: (name, id, newData) => {
    const data = loadData(name);
    const index = data.findIndex((el) => el.id === id);
    data.splice(index, 1, newData);
    saveData(name, data);
  },
  delete: (name, id) => {
    const data = loadData(name);
    const index = data.findIndex(el => el.id === id)
    data.splice(index, 1);
    console.log(data)
    saveData(name, data);
  },
};
