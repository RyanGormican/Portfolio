const express = require('express');
const cors = require('cors');
const suggestionsRoutes = require('./suggestions');

const app = express();

app.use(cors());
app.use(express.json());

app.use('/app/suggestions', suggestionsRoutes);

const pool = require('./db');

const PORT = process.env.POSTGRES_PORT || 5000;
app.listen(PORT, () => {
  console.log("Server is listening on port", PORT);

  app.get('/test-db-connection', (req, res) => {
  const query = 'SELECT NOW()';
  pool.query(query, (err, result) => {
    if (err) {
      console.error('Error testing database connection:', err);
      res.status(500).json({ error: 'Error connecting to the database' });
    } else {
      console.log('Connected to the database at:', result.rows[0].now);
      res.json({ message: 'Connected to the database', timestamp: result.rows[0].now });
    }
  });
});

});
