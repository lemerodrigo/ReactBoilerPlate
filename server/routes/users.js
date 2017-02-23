const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');

router.post('/login', userController.validate);
router.post('/signup', userController.signUp);

module.exports = router;
