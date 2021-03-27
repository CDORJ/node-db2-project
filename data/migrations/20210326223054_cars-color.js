exports.up = function (knex) {
  return knex.schema.table("cars", (tbl) => {
    tbl.text("color").notNullable();
  });
};

exports.down = function (knex) {
  return knex.schema.table("cars", (tbl) => {
    tbl.dropColumn("color");
  });
};
