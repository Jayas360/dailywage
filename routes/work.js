const express = require('express');
const router = express.Router();

const workController = require('../controllers/work_controller');

router.post('/create', workController.create);
router.get('/list', workController.availableWork);
router.get('/list/byCategory', workController.workByCategory);

module.exports = router;