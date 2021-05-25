// DO YOUR MAGIC
const express = require("express");
const Cars = require("../cars/cars-model");
const {
  checkCarId,
  checkCarPayload,
  checkVinNumberValid,
  checkVinNumberUnique,
} = require("./cars-middleware");

const router = express.Router();

router.get("/", (req, res) => {
  Cars.getAll()
    .then((cars) => {
      res.json(cars);
    })
    .catch((err) => {
      res.status(500).json({ message: "Failed to retrieve cars" });
    });
});

router.get("/:id", checkCarId, (req, res) => {
  Cars.getById(req.params.id)
    .then((car) => {
      res.status(200).json(car);
    })
    .catch((err) => {
      res.status(500).json({ message: "Failed to retrieve that specific car" });
    });
});

router.post(
  "/",
  checkCarPayload,
  checkVinNumberUnique,
  checkVinNumberValid,
  (req, res) => {
    Cars.create(req.body)
      .then((newCar) => {
        res.status(200).json(newCar);
      })
      .catch((err) => {
        console.log(err);
        res.status(500).json({ message: "Failed to create car" });
      });
  }
);

module.exports = router;
