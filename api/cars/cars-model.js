const db = require("../../data/db-config.js");

const getAll = () => {
  return db("cars");
};

const getById = (id) => {
  return db("cars").first("*").where({ id });
};

const create = async (newCar) => {
  const carId = await db("cars").insert(newCar);
  return getById(carId[0]);
};
