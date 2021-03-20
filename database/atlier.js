/* eslint-disable no-console */
const { Pool } = require('pg');

const pool = new Pool({
  user: 'me',
  host: 'localhost',
  database: 'qadb',
  password: 'password',
  port: 5432,
});

console.log('Successful connection to the database');

const getQuestion = (cb) => {
  pool.query('SELECT * FROM questions WHERE product_id = $1;', [1], (err, res) => {
    if (err) {
      console.error(err);
      cb(err);
    } else {
      const result = res.rows;
      cb(null, result);
    }
  });
};

module.exports = {
  getQuestion,
};
