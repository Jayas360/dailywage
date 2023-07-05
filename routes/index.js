const express = require('express');

const router = express.Router();

router.use('/users', require('./users'));
router.use('/work', require('./work'));

module.exports = router;