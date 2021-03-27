const router = require("express").Router();

const Cars = require("./cars-model.js");
const mw = require("./cars-middleware.js");

router.get("/", async (req, res, next) => {
  try {
    const cars = await Cars.getAll();
    res.status(200).json(cars);
  } catch (err) {
    next(err);
  }
});

router.get("/:id", mw.checkCarId, async (req, res, next) => {
  try {
    res.status(200).json(req.car);
  } catch (err) {
    next({ error: err, message: err.message, status: 500 });
  }
});

router.post("/", mw.checkCarPayload, async (req, res, next) => {
  const body = req.body;
  try {
    const newCar = await Cars.create(body);
    res.status(201).json(newCar);
  } catch (err) {
    next({ error: err, message: err.message, status: 500 });
  }
});

router.put(
  "/:id",
  mw.checkCarPayload,
  mw.checkCarId,
  async (req, res, next) => {
    try {
      const car = await Cars.updateCar(req.params.id, req.body);
      res.status(202).json(car);
    } catch (err) {
      next({ error: err, message: err.message, status: 500 });
    }
  }
);

module.exports = router;
