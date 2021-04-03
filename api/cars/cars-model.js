// Write Model Functions
// Write the following db access functions inside api/cars/cars-model.js using Knex:

// getAll resolves to an array of car records (or an empty array)
// getById resolves to a car record by the given id
// create resolves to the newly created car record
const db = require("../../data/db-config.js");

const getAll = () => {
  return db("cars");
};

async function getById(id) {
  // DO YOUR MAGIC
  const car = await db.first("*").from("cars").where({ id });
  return car;
}

async function create(newCar) {
  // DO YOUR MAGIC
  const ids = await db("cars").insert(newCar);
  return getById(ids[0]);
}

module.exports = {
  getAll,
  getById,
  create,
};
