const Pool = require("pg").Pool;
require("dotenv").config();

const pool = new Pool({
  user: "postgres",
  password: "sarita",
  host: "localhost",
  database: "meme_database",
  port: 5432,
});

module.exports = pool;