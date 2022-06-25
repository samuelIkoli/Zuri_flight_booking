const express = require('express');

const router = express.Router();
const controller = require('../controllers/flightController');

router
    .get('/flights', controller.showFlight)
    .get('/:id', controller.findFlight)
    .post('/', controller.addFlight)
    .put('/:id', controller.updateFlight)
    .delete(':id', controller.deleteFlight)

module.exports = router;

