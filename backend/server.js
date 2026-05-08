const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const { Pool } = require('pg');

dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());

const pool = new Pool({
  host: process.env.DB_HOST,
  port: process.env.DB_PORT,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
});

app.get('/', (req, res) => {
  res.json({
    message: "Backend API Running"
  });
});

app.get('/products', async (req, res) => {
  try {
    const result = await pool.query('SELECT * FROM products');

    res.json(result.rows);
  } catch (error) {
    console.error(error);
    res.status(500).json({
      error: 'Database error'
    });
  }
});

const PORT = 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
