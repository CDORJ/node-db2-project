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

/* 
 {
          "VIN": 1226589,
          "make": "Mercedes",
          "model": "S320",
          "mileage": 0,
          "transmission": "manual",
          "title": "clean",
          "color":"blue"
        },
        {
          "VIN": 6587492,
          "make": "BMW",
          "model": "X6",
          "mileage": 2500,
          "transmission": "automatic",
          "title": "clean",
          "color":"red"
        },
        {
          "VIN": 23651213,
          "make": "Honda",
          "model": "Accord",
          "mileage": 3500,
          "transmission": "automatic",
          "title": "salvage",
          "color":"yellow"
}
         */