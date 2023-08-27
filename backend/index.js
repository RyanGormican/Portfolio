require('dotenv').config();
const express = require('express');
const cors = require('cors');
const suggestionsRoutes = require('./suggestions'); 
const pool = require('./db');

const app = express();

app.use(cors({
  origin: ['https://ryangormicanportfoliohub.vercel.app', 'http://localhost:3000']
}));
app.use(express.json());


app.use('/app/suggestions', suggestionsRoutes);

const PORT = process.env.PORT || 5000; 

app.listen(PORT, () => {
  console.log("Server is listening on port", PORT);
});
