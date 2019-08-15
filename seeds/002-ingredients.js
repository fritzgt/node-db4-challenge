exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('ingredients')
    .truncate()
    .then(function() {
      // Inserts seed entries
      return knex('ingredients').insert([
        { ingredient_name: 'water', quantity: 2 },
        { ingredient_name: 'chiken', quantity: 1 },
        { ingredient_name: 'lettuce', quantity: 1 }
      ]);
    });
};
