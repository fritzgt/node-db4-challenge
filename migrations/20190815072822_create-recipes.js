exports.up = function(knex) {
  return knex.schema
    .createTable('recipes', tbl => {
      tbl.increments();
      tbl
        .text('recipes_name', 128)
        .unique()
        .notNullable();
    })
    .createTable('ingredients', tbl => {
      tbl.increments();
      tbl.text('ingredient_name', 128).notNullable();
      tbl.float('quantity', 128).notNullable();
      tbl
        .integer('recipes_id')
        .unsigned()
        .notNullable()
        .references('id')
        .inTable('recipes')
        .onUpdate('CASCADE')
        .onDelete('CASCADE');
    })
    .createTable('instructions', tbl => {
      tbl.increments();
      tbl
        .text('recipes_name', 128)
        .unique()
        .notNullable();
      tbl
        .float('step_num', 128)
        .unique()
        .notNullable();
      tbl
        .integer('recipes_id')
        .unsigned()
        .notNullable()
        .references('id')
        .inTable('recipes')
        .onUpdate('CASCADE')
        .onDelete('CASCADE');
    });
};

exports.down = function(knex) {};
