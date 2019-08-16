const express = require('express');

const server = express();

server.use(express.json());

const port = 7000;

//importing db
const Recipes = require('./recipes-model');

// server.use('/', (req, res) => {
//   res.status(200).send('Hello');
// });

server.get('/recipes', async (req, res) => {
  try {
    const recipes = await Recipes.getRecipes();
    res.json(recipes);
  } catch (err) {
    res.status(500).json({ message: 'Failed to get schemes' });
  }
});

server.get('/recipes/:id/ingredients', async (req, res) => {
  const { id } = req.params;

  try {
    const recipes = await Recipes.getShoppingList(id);
    if (recipes) {
      res.json(recipes);
    } else {
      res.status(404).json({ message: 'Could not find scheme with given id.' });
    }
  } catch (err) {
    res.status(500).json({ message: 'Failed to get schemes' });
  }
});

server.listen(port, () => console.log(`Listening on port ${port}`));
