const express = require('express');

const server = express();

server.use(express.json());

const port = 7000;

//importing db
const Recipes = require('./recipes-model');

// server.use('/', (req, res) => {
//   res.status(200).send('Hello');
// });

//return a list of all recipes in the database.
server.get('/api/recipes/', async (req, res) => {
  try {
    const recipes = await Recipes.getRecipes();
    res.json(recipes);
  } catch (err) {
    res.status(500).json({ message: 'Failed to get schemes' });
  }
});

//return a list of all ingredients and quantities for a given recipe
server.get('/api/recipes/:id/shoppingList', async (req, res) => {
  const { id } = req.params;

  try {
    const recipes = await Recipes.getShoppingList(id);
    if (recipes) {
      res.json(recipes);
    } else {
      res
        .status(404)
        .json({ message: 'Could not find ingredients with given id.' });
    }
  } catch (err) {
    res.status(500).json({ message: 'Failed to get ingredients' });
  }
});

//return a list of step by step instructions for preparing a recipe
server.get('/api/recipes/:id/instructions', async (req, res) => {
  const { id } = req.params;
  try {
    const instructions = await Recipes.getInstructions(id);
    if (instructions) {
      res.json(instructions);
    } else {
      res
        .status(404)
        .json({ message: 'Could not find instructions with given id.' });
    }
  } catch (err) {
    res.status(500).json({ message: 'Failed to get instructions' });
  }
});

server.listen(port, () => console.log(`Listening on port ${port}`));
