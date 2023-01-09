/* eslint-disable */
const Client = require('pg/lib/client.js');

const client = new Client({
  user: "laiiwvuk",
  password: "4B0fIicgGBHPzbF8DV-cWBfh9dQK9-Mz",
  host: "mouse.db.elephantsql.com",
  database: "laiiwvuk"
});

client.connect();

module.exports = client;
