const express = require('express');
const router = express.Router();
const passport = require('passport');


const reportsController = require('../../../controllers/api/v1/reports_controllers');

// =================================================handling reports routes=====================================

router.get('/allStatus/:status', passport.authenticate('jwt', { session: false }) ,reportsController.allStatus);
router.post('/newReport', passport.authenticate('jwt', { session: false }) ,reportsController.create);

module.exports = router;