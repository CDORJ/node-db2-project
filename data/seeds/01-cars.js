// STRETCH
exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex("cars")
    .truncate()
    .then(function () {
      // Inserts seed entries
      return knex("cars").insert([
        {
          vin: "3GCUKREC1EG596516",
          make: "dodge",
          model: "grand caravan",
          mileage: 123456,
          title: "clean",
          transmission: "automatic",
        },
        {
          vin: "1G6KD57Y17U168743",
          make: "chrysler",
          model: "200",
          mileage: 23456,
          title: "clean",
          transmission: "automatic",
        },
        {
          vin: "JHMED8368MS040943",
          make: "mazda",
          model: "rx9",
          mileage: 23456,
          title: "clean",
          transmission: "automatic",
        },
      ]);
    });
};
