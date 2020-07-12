const express = require('express');
const router = express.Router();
const passport = require('passport');

const doctorsController = require('../../../controllers/api/v1/doctors_controller');

router.get('/registerForm', doctorsController.signup);
router.post('/register', doctorsController.create);
router.get('/signin', doctorsController.signin);
router.post('/login', passport.authenticate(
    'local',
    { failureRedirect: '/api/v1/doctors/signin' }
) , doctorsController.createSession);

router.post('/login2', doctorsController.createSession2);
router.get('/profile', passport.checkAuthentication, doctorsController.profile);

module.exports = router;