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

// ------------ GETS ------------

const getQuestions = (id, cb) => {
  pool.query('SELECT * FROM questions WHERE product_id = $1;', [id], (err, res) => {
    if (err) {
      console.error(err);
      cb(err);
    } else {
      const result = res.rows;
      cb(null, result);
    }
  });
};

const getAnswers = (id, cb) => {
  pool.query('SELECT * FROM answers WHERE question_id = $1;', [id], (err, res) => {
    if (err) {
      console.error(err);
      cb(err);
    } else {
      const result = res.rows;
      cb(null, result);
    }
  });
};

// ------------ POSTS ------------

const postQuestion = (productId, questionObj, cb) => {

};

const postAnswer = (questionId, answerObj, cb) => {

};

// ------------ REPORTS ------------

const reportQuestion = (id, cb) => {

};

const reportAnswer = (id, cb) => {

};

// ------------ HELPFUL ------------

const helpfulQuestion = (id, cb) => {

};

const helpfulAnswer = (id, cb) => {

};

module.exports = {
  getQuestions,
  getAnswers,
  postQuestion,
  postAnswer,
  reportQuestion,
  reportAnswer,
  helpfulQuestion,
  helpfulAnswer,
};
