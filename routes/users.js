const express = require('express');
const router = express.Router();
const usersController = require('../controllers/users_controller');

router.get('/', usersController.users);
router.post('/signin', usersController.signIn);
router.post('/create',usersController.create);


module.exports = router;