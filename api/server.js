const express = require("express");
const carsRouter = require("./cars/cars-router");

const server = express();

server.use(express.json());
server.use("/api/cars", carsRouter);

server.get("/", (req, res) => {
  res.status(200).json({ message: "cars working!" });
});

server.use((error, req, res, next) => {
  error.error && console.error(error.error);
  res.status(error.status).json({ message: error.message });
});

// DO YOUR MAGIC

module.exports = server;
