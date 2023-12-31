// ************ Require's ************
const express = require('express');
const router = express.Router();

// ************ Controller Require ************
const mainController = require('../controllers/main.controllers');

router.get('/', mainController.index); 
router.get('/login', mainController.login); 
router.get('/register', mainController.register); 

module.exports = router;