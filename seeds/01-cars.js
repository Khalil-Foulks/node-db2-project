
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('cars').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('cars').insert([
        {vin: 'JH4KA7551MC045888', make: 'Acura', model: 'Legend', mileage: '50000', transmission: 'automatic', title_status: 'clean'},
        {vin: '1FVACWDCX6HW63819', make: 'Mazda', model: 'Tribute', mileage: '10000', transmission: '', title_status: ''},
      ]);
    });
};
