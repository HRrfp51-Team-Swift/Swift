const express = require('express');
const db = require('../database/atlier');

const app = express();

app.use(express.json());

// ------------ GETS ------------

app.get('/', (req, res) => {
  db.getQuestion((err, data) => {
    if (err) {
      // eslint-disable-next-line no-console
      console.error(err);
      res.status(500).send(err);
    } else {
      res.status(200).send(data);
    }
  });
});

// ------------ LISTEN ------------

const port = 3005;
app.listen(port, () => {
  // eslint-disable-next-line no-console
  console.log(`App running on port ${port}.`);
});
