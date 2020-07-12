const express = require('express');
const router = express.Router();

const reportsController = require('../../../controllers/api/v1/reports_controllers');

router.get('/allStatus/:status', reportsController.allStatus);


router.post('/newReport/:id', reportsController.create);

module.exports = router;