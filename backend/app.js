const express = require('express');
const app = express();

app.use(express.json());

const admissionRoutes = require('./routes/admission.routes');
app.use('/api', admissionRoutes);

module.exports = app;
