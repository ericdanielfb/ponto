const express = require('express');
const router = express.Router();

const controller = require('../controllers/controller');

router.get('/test', controller.test);

router.post('/create', controller.create);

router.get('/:id', controller.details);

router.put('/update/:id', controller.update);

router.delete('/delete/:id', controller.delete);

module.exports = router;