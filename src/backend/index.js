const express = require('express');
const cors = require('cors');
const suggestionsRoutes = require('./suggestions');

const app = express();

app.use(cors());
app.use(express.json());

app.use('/app/suggestion', suggestionsRoutes);

const PORT = process.env.port || 5000;
app.listen(PORT, () => {

});