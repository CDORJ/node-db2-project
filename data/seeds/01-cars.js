exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex("cars")
    .truncate()
    .then(function () {
      // Inserts seed entries
      return knex("cars").insert([
        {
          VIN: 1226589,
          make: "Mercedes",
          model: "S320",
          mileage: 1897,
          transmission: "manual",
          title: "clean",
          color: "blue",
        },
        {
          VIN: 6587492,
          make: "BMW",
          model: "X6",
          mileage: 2500,
          transmission: "automatic",
          title: "clean",
          color: "red",
        },
        {
          VIN: 23651213,
          make: "Honda",
          model: "Accord",
          mileage: 3500,
          transmission: "automatic",
          title: "salvage",
          color: "yellow",
        },
      ]);
    });
};
