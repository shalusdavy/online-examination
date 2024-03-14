const express = require('express');
const router = express.Router();
const controller = require('../controllers/questionsController');

router.get('/', controller.find);
router.post('/', controller.create);


module.exports = router;