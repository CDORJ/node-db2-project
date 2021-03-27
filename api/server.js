const express = require("express");
const helmet = require("helmet");
const carsRouter = require("./cars/cars-router.js");

const server = express();

server.use(helmet(), express.json());
server.use("/api/cars", carsRouter);

server.get("/", (req, res) => {
  res.status(200).json({ message: "api up" });
});

server.use((error, req, res, next) => {
  error.error && console.error(error.error);
  res.status(error.status).json({ message: error.message });
});

module.exports = server;
