const pgp = require('pg-promise')();
const connection = {
  host: 'localhost',
  port: '3000',
  database: 'contact',
  user: 'root',
  password: 'root'
};
const db = pgp(connection);

module.exports = db;
