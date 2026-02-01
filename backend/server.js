require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const admissionRoutes = require('./routes/admission');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(bodyParser.json());
app.use('/assets', express.static(path.join(__dirname, 'assets'))); // logo, etc.

// Routes
app.use('/api/admission', admissionRoutes);

// Démarrage serveur
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
