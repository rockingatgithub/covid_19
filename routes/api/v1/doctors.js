const express = require('express');
const router = express.Router();
const passport = require('passport');

// =============================handling the doctors route========================

const doctorsController = require('../../../controllers/api/v1/doctors_controller');

router.post('/register', doctorsController.create);
router.post('/login2', doctorsController.createSession2);

module.exports = router;