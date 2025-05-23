require('dotenv').config();
const { Client } = require('pg');

const client = new Client({
  user: process.env.DATABASE_USER,
  host: process.env.DATABASE_HOST,
  database: process.env.DATABASE_NAME,
  password: process.env.DATABASE_PASSWORD,
  port: process.env.DATABASE_PORT,
});

client.connect()
  .then(() => console.log('PostgreSQL connected'))
  .catch(err => {
    console.error('PostgreSQL connection error:', err);
    process.exit(1); 
  });

module.exports = client;
