/* eslint-disable no-console */
const express = require('express');
const db = require('../database/atlier');

const app = express();

app.use(express.json());

// ------------ GETS ------------

app.get('/qa/questions/:product_id', (req, res) => {
  db.getQuestions(req.params.product_id, (err, data) => {
    if (err) {
      console.error(err);
      res.status(500).send(err);
    } else {
      res.status(200).send(data);
    }
  });
});

app.get('/qa/questions/:question_id/answers', (req, res) => {
  db.getAnswers(req.params.question_id, (err, data) => {
    if (err) {
      console.error(err);
      res.status(500).send(err);
    } else {
      res.status(200).send(data);
    }
  });
});

// ------------ POSTS ------------

app.post('/qa/questions/:product_id', (req, res) => {
  db.postQuestion(req.params.product_id, req.body, (err, data) => {
    if (err) {
      console.error(err);
      res.status(500).send(err);
    } else {
      res.status(201).send(data);
    }
  });
});

app.post('qa/questions/:question_id/answers', (req, res) => {
  db.postAnswer(req.params.question_id, req.body, (err, data) => {
    if (err) {
      console.error(err);
      res.status(500).send(err);
    } else {
      res.status(201).send(data);
    }
  });
});

// ------------ PUTS ------------

app.put('qa/questions/:question_id/helpful', (req, res) => {
  db.helpfulQuestion(req.params.question_id, (err, data) => {
    if (err) {
      console.error(err);
      res.status(500).send(err);
    } else {
      res.status(204).send(data);
    }
  });
});

app.put('qa/questions/:question_id/report', (req, res) => {
  db.reportQuestion(req.params.question_id, (err, data) => {
    if (err) {
      console.error(err);
      res.status(500).send(err);
    } else {
      res.status(204).send(data);
    }
  });
});

app.put('qa/answers/:answer_id/helpful', (req, res) => {
  db.helpfulAnswer(req.params.answer_id, (err, data) => {
    if (err) {
      console.error(err);
      res.status(500).send(err);
    } else {
      res.status(204).send(data);
    }
  });
});

app.put('qa/answers/:answer_id/report', (req, res) => {
  db.reportAnswer(req.params.answer_id, (err, data) => {
    if (err) {
      console.error(err);
      res.status(500).send(err);
    } else {
      res.status(204).send(data);
    }
  });
});

// ------------ LISTEN ------------

const port = 3005;
app.listen(port, () => {
  console.log(`App running on port ${port}.`);
});
