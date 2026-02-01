require('dotenv').config();
const express = require('express');
const cors = require('cors');
const rateLimit = require('express-rate-limit');

const admissionRoute = require('./routes/admission');

const app = express();

app.use(cors());
app.use(express.json());

/** Anti-spam */
app.use(rateLimit({
  windowMs: 15 * 60 * 1000,
  max: 50
}));

app.use('/polytechnique', admissionRoute);

app.listen(3000, () => {
  console.log('API running on http://localhost:3000');
});
