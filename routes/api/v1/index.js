const express = require('express');
const router = express.Router();

// ======================================routing to specific routes=======================

router.use('/doctors', require('./doctors'));
router.use('/patients', require('./patients'));
router.use('/reports', require('./reports'));

module.exports = router;