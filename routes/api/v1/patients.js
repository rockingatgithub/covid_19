const express = require('express');
const router = express.Router();
const patientController = require('../../../controllers/api/v1/patients_controller');
const passport = require('passport');

router.get('/registerForm', patientController.signup);
router.post('/register', patientController.create);
router.post('/report', patientController.reportForm);
router.get('/create_report/:id', patientController.openReportForm);
router.get('/all_reports/:id', patientController.allReports);


module.exports = router;