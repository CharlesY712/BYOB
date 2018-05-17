
exports.up = function(knex, Promise) {
  return Promise.all([
    knex.schema.createTable('states', function(table) {
      table.increments('id').primary();
      table.string('state');
      table.integer('numberOfStations').unsigned();
      table.timestamps(true, true);
    }),

    knex.schema.createTable('cities', function(table) {
      table.increments('id').primary();
      table.string('city');
      table.integer('BD').unsigned();
      table.integer('CNG').unsigned();
      table.integer('E85').unsigned();
      table.integer('ELEC').unsigned();
      table.integer('HY').unsigned();
      table.integer('LNG').unsigned();
      table.integer('LPG').unsigned();
      table.integer('state_id').unsigned();
      table.foreign('state_id').references('states.id');
      table.timestamps(true, true);
    })
  ]);
};

exports.down = function(knex, Promise) {
  return Promise.all([
    knex.schema.dropTable('cities'),
    knex.schema.dropTable('states')
  ]);
};
