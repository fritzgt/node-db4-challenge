const db = require('./db-config.js');

module.exports = {
  getRecipes,
  getShoppingList,
  getInstructions
};

//return a list of all recipes in the database.
function getRecipes() {
  return db('recipes');
}

//return a list of all ingredients and quantities for a given recipe
function getShoppingList(recipe_id) {
  return db('ingredients as i')
    .join('recipes_ingredients as r', 'i.id', '=', 'r.ingredients_id')
    .join('recipes', 'r.recipes_id', '=', 'recipes.id')
    .select(
      'i.ingredient_name',
      'r.quantity'
      //   'r.recipes_id',
      //   'r.ingredients_id'
    )
    .where('recipes_id', recipe_id);
}

//return a list of step by step instructions for preparing a recipe
function getInstructions(ins_id) {
  return db('recipes as r')
    .join('instructions as i', 'i.recipes_id', '=', 'r.id')
    .select('i.instruction', 'step_num')
    .where('recipes_id', ins_id)
    .orderBy('step_num', 'asc');
}
