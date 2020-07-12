const express = require('express');
const router = express.Router();

const docControllers = require('../controllers/api/v1/doctors_controller');

router.use('/api', require('./api'));
router.get('/', docControllers.home);
module.exports = router;