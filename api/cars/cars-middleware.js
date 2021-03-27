const Cars = require("./cars-model.js");

const checkCarId = async (req, res, next) => {
  const { id } = req.params;
  try {
    const car = await Cars.getById(id);
    if (car) {
      req.car = car;
      next();
    } else {
      next({ message: `${id} is not a valid id number` });
    }
  } catch (err) {
    next(err);
  }
};

const checkCarPayload = (req, res, next) => {
  const body = req.body;
  if (!body.vin || !body.make || !body.model || !body.mileage || !body.color) {
    next({
      message: "vin, make, model, mileage and color are all required fields",
      status: 400,
    });
  } else if (body.vin.length !== 17) {
    next({ message: "vin number must be 17 characters", status: 400 });
  } else {
    next();
  }
};

const checkVinNumberValid = (req, res, next) => {
  // DO YOUR MAGIC
};

module.exports = {
  checkCarId,
  checkCarPayload,
  checkVinNumberValid,
};
