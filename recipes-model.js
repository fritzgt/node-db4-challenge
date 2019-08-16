const db = require('./db-config.js');

module.exports = {
  getRecipes,
  getShoppingList,
  getInstructions
};

function getRecipes() {
  return db('recipes');
}

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

function getInstructions(recipe_id) {}
