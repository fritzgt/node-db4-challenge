exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('recipes_ingredients')
    .truncate()
    .then(function() {
      // Inserts seed entries
      return knex('recipes_ingredients').insert([
        { recipes_id: 1, ingredients_id: 1 },
        { recipes_id: 1, ingredients_id: 2 },
        { recipes_id: 2, ingredients_id: 3 }
      ]);
    });
};
