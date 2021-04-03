// DO YOUR MAGIC
const router = require("express").Router();

const Cars = require("./cars-model.js");
const mw = require("./cars-middleware.js");

// Write a Cars API
// Write CR (of CRUD) for the cars resource, using the middleware and model functions described above wherever appropriate inside api/cars/cars-router.js :

// [GET] /api/cars returns an array of cars sorted by id (or an empty array if there aren't any).

router.get("/", async (req, res, next) => {
  try {
    const cars = await Cars.getAll();
    res.status(200).json(cars);
  } catch (err) {
    next(err);
  }
});
// [GET] /api/cars/:id returns a car by the given id.
router.get("/:id", mw.checkCarId, async (req, res, next) => {
  try {
    res.status(200).json(req.car);
  } catch (error) {
    next({ error: err, message: err.message, status: 500 });
  }
});

// [POST] /api/cars returns the created car. Leading or trailing whitespace on budget name should be trimmed before saving to db.

router.post(
  "/",
  mw.checkCarPayload,
  mw.checkVinNumberValid,
  async (req, res, next) => {
    const body = req.body;
    try {
      const newCar = await Cars.create(body);
      res.status(201).json(newCar);
    } catch (error) {
      next({ error: err, message: err.message, status: 500 });
    }
  }
);
// Manually test your endpoints with a REST client like Insomnia or Postman to check they are working as expected.

// Test your endpoints automatically by running npm test.

module.exports = router;
