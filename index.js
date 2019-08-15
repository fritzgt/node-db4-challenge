const express = require('express');

const server = express();

const port = 7000;

server.use('/', (req, res) => {
  res.status(200).send('Hello');
});

server.listen(port, () => console.log(`Listening on port ${port}`));
