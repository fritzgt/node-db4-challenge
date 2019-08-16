exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('instructions')
    .truncate()
    .then(function() {
      // Inserts seed entries
      return knex('instructions').insert([
        { instruction: 'Boil water', step_num: 1, recipes_id: 1 },
        { instruction: 'Add ingredients', step_num: 2, recipes_id: 1 },
        { instruction: 'Eat', step_num: 3, recipes_id: 1 },
        { instruction: 'Add ingredients', step_num: 1, recipes_id: 2 },
        { instruction: 'Mix salad', step_num: 2, recipes_id: 2 },
        { instruction: 'Eat!', step_num: 3, recipes_id: 2 }
      ]);
    });
};
