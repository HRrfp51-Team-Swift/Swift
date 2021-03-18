const postgres = require('postgres');

const sql = postgres({
  user: 'me',
  host: 'localhost',
  database: 'testing',
  password: 'password',
  port: 3005,
});

const getUsers = (cb) => {
  pool.query('SELECT * FROM users;', (err, data) => {
    if (err) {
      // eslint-disable-next-line no-console
      console.error(err);
      cb(err);
    } else {
      cb(null, data);
    }
  });
};

module.exports = {
  getUsers,
};
