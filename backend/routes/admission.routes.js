const express = require('express');
const router = express.Router();
const admissionController = require('../controllers/admission.controller');

router.post('/admission', admissionController.addAdmission);

module.exports = router;
