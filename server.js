const express = require('express');
const bodyParser = require('body-parser');
const { Pool } = require('pg');
const app = express();
const PORT = 3000;

// PostgreSQL connection pool setup
const pool = new Pool({
    connectionString: 'postgresql://postgres:990910@192.168.1.141:5432/registrations'
});

// Middleware
app.use(bodyParser.json());

// Registration route
app.post('/register', async (req, res) => {
    const { fullName, email } = req.body;
    if (!fullName || !email) {
        return res.status(400).json({ message: "Full name and email are required." });
    }

    try {
      const result = await pool.query(
          'INSERT INTO registrations(full_name, email) VALUES($1, $2) RETURNING id',
          [fullName, email]
      );
      console.log("Received registration:", req.body);
      res.status(200).json({ message: "You have registered successfully!", id: result.rows[0].id });
  } catch (err) {
      console.error('Database error:', err);
      res.status(500).json({ message: "Internal Server Error" });
  }
});

// Start server
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});