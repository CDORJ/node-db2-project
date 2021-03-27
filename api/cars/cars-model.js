const db = require("../../data/db-config.js");

const getAll = () => {
  return db("cars");
};

async function getById(id) {
  const car = await db.first("*").from("cars").where({ id });
  return car;
}

const create = async (newCar) => {
  const carId = await db("cars").insert(newCar);
  return getById(carId[0]);
};

function updateCar(id, changes) {
  return db.first("*").from("cars").update(changes).where({ id });
}

function remove(id) {
  return db("cars").where({ id }).del();
}

module.exports = {
  getAll,
  getById,
  create,
  updateCar,
  remove,
};
