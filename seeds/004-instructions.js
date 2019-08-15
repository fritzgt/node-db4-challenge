exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('instructions')
    .truncate()
    .then(function() {
      // Inserts seed entries
      return knex('instructions').insert([
        { instruction: 'boil', step_num: 1, recipes_id: 1 },
        { instruction: 'mix', step_num: 1, recipes_id: 2 }
      ]);
    });
};
