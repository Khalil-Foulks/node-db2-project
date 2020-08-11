
exports.up = function(knex) {
  return knex.schema.createTable('cars', tbl => {
    tbl.increments();
    tbl.string("vin", 17).unique().notNullable()
    tbl.text("make").notNullable()
    tbl.string("model").notNullable()
    tbl.integer("mileage").notNullable()
    tbl.string("transmission")
    tbl.text("title_status")
  })
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists('cars')
};
