const { Pool } = require('pg');
require('dotenv').config();

const pool = new Pool({
});

pool.on('connect', () => {
  console.log('Connected to database');
});

module.exports = pool;
