const { validate } = require("vin-validator");
const db = require("./cars-model");

const checkCarId = (req, res, next) => {
  // DO YOUR MAGIC
  db.getById(req.params.id)
    .then((car) => {
      if (car !== undefined) {
        next();
      } else {
        res
          .status(404)
          .json({ message: `car with id ${req.params.id} is not found` });
      }
    })
    .catch((err) => {
      res.status(500).json({
        message: "There was a problem retrieving that car. Please try again",
      });
    });
};

const checkCarPayload = (req, res, next) => {
  // DO YOUR MAGIC
  const payload = req.body;
  let missingFields = [];

  Object.entries(payload).forEach((entry) => {
    let [key, value] = entry;
    if (value === "") {
      missingFields.push(key);
    }
  });

  if (missingFields.length > 0) {
    console.log(missingFields);
  } else {
    next();
  }
};

const checkVinNumberValid = (req, res, next) => {
  // DO YOUR MAGIC
  const vin = req.body.vin;
  const valid = validate(vin);
  if (valid) {
    next();
  } else {
    res.status(400).json({ message: `vin ${vin} is invalid` });
  }
};

const checkVinNumberUnique = (req, res, next) => {
  // DO YOUR MAGIC
  next();
};

module.exports = {
  checkCarId,
  checkCarPayload,
  checkVinNumberValid,
  checkVinNumberUnique,
};
