exports.up = function(knex) {
  return (
    knex.schema
      //main table using the many to many
      .createTable('recipes', tbl => {
        tbl.increments();
        tbl
          .text('recipes_name', 128)
          .unique()
          .notNullable();
      })
      //Creating second table for ingredients
      //using the many to many concept
      .createTable('ingredients', tbl => {
        tbl.increments();
        tbl.text('ingredient_name', 128).notNullable();
        tbl.float('quantity', 128).notNullable();
      })
      //This table will link both recipes and ingredients
      //in the many to monay concept this would be
      //the link between recipes and ingredients
      .createTable('recipes_ingredients', tbl => {
        tbl
          .integer('recipes_id')
          .unsigned()
          .notNullable()
          .references('id')
          .inTable('recipes')
          .onUpdate('CASCADE')
          .onDelete('CASCADE');
        tbl
          .integer('ingredients_id')
          .unsigned()
          .notNullable()
          .references('id')
          .inTable('ingredients')
          .onUpdate('CASCADE')
          .onDelete('CASCADE');
        //Make the combination of foreign keys unique.
        tbl.primary(['recipes_id', 'ingredients_id']);
      })
      //The instructions table is link to the recipes
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
      })
  );
};

//drop tables in reverse
exports.down = function(knex) {
  return knex.schema
    .dropTableIfExists('instructions')
    .dropTableIfExists('recipes_ingredients')
    .dropTableIfExists('ingredients')
    .dropTableIfExists('recipes');
};
