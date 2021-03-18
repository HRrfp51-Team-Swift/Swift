DROP DATABASE IF EXISTS qadb;

CREATE DATABASE qadb;

\c qadb

CREATE TABLE questions (
  id SERIAL PRIMARY KEY,
  product_id INT,
  body VARCHAR(1000) NOT NULL,
  date_written DATE DEFAULT CURRENT_DATE,
  asker_name VARCHAR(50) NOT NULL,
  asker_email VARCHAR(100) NOT NULL,
  reported INT DEFAULT 0,
  helpful INT DEFAULT 0
);

CREATE TABLE answers (
  id SERIAL PRIMARY KEY,
  question_id INT,
  body VARCHAR(1000) NOT NULL,
  date_written DATE DEFAULT CURRENT_DATE,
  answerer_name VARCHAR(50) NOT NULL,
  answerer_email VARCHAR(100) NOT NULL,
  reported INT DEFAULT 0,
  helpful INT DEFAULT 0,
  FOREIGN KEY (question_id) REFERENCES questions(id)
);

CREATE TABLE photos (
  id SERIAL PRIMARY KEY,
  answer_id INT,
  url VARCHAR(500) NOT NULL,
  FOREIGN KEY (answer_id) REFERENCES answers(id)
);

COPY questions (id, product_id, body, date_written, asker_name, asker_email, reported, helpful)
FROM '/Users/Jackpronske/Downloads/questions.csv'
DELIMITER ',' CSV HEADER;

COPY answers (id, question_id, body, date_written, answerer_name, answerer_email, reported, helpful)
FROM '/Users/Jackpronske/Downloads/answers.csv'
DELIMITER ',' CSV HEADER;

COPY photos (id, answer_id, url)
FROM '/Users/Jackpronske/Downloads/answers_photos.csv'
DELIMITER ',' CSV HEADER;


-- psql -d postgres -U me < schema.sql