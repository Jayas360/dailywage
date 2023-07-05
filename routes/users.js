const express = require('express');
const router = express.Router();
const usersController = require('../controllers/users_controller');
const uploads = require("../config/multer");

router.get('/', usersController.users);
router.post('/signin', usersController.signIn);
router.post('/create',usersController.create);
router.post('/personal', uploads.single("upload"), usersController.createPersonal);
router.get('/personal/:email', usersController.personal);

module.exports = router;