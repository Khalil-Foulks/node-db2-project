
exports.up = function(knex) {
  return knex.schema.createTable('cars', tbl => {
    tbl.increments('car_id');
    tbl.string("vin", 17).unique().notNullable()
    tbl.string("make").notNullable()
    tbl.string("model").notNullable()
    tbl.integer("mileage").notNullable()
    tbl.string("transmission")
    tbl.string("title_status")
  })
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists('cars')
};
