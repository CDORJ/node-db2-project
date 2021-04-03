const Cars = require("./cars-model.js");

// Write Middleware
// Write the following middlewares inside api/cars/cars-middleware.js:

// checkCarId returns a status 404 with a { message: "car with id <car id> is not found" } if the id in req.params does not exist in the database.

const checkCarId = async (req, res, next) => {
  const { id } = req.params;
  try {
    const car = await Cars.getById(id);
    if (car) {
      req.car = car;
      next();
    } else {
      next({ message: `car with id ${id} is not found`, status: 404 });
    }
  } catch (error) {
    next(err);
  }
};

// checkCarPayload returns a status 400 with a { message: "<field name> is missing" } if any required field is missing.

const checkCarPayload = (req, res, next) => {
  const body = req.body;
  if (!body.vin || !body.make || !body.model || !body.mileage) {
    next({
      message: "field name is missing",
      status: 400,
    });
  } else {
    next();
  }
};

// checkVinNumberValid returns a status 400 with a { message: "vin <vin number> is invalid" } if the vin number is invalid.

const checkVinNumberValid = (req, res, next) => {
  const body = req.body;
  if (body.vin.length !== 7) {
    next({
      message: "vin number is invalid",
      status: 400,
    });
  } else {
    next();
  }
};

module.exports = {
  checkCarId,
  checkCarPayload,
  checkVinNumberValid,
};
