var express = require('express');
var pointStatusController = require('../controllers/point-status-controller');

const router = express.Router();

router.route('/')
    .get(
        pointStatusController.getPointStatus
    )
    .post(
        pointStatusController.createPointStatus
    )

module.exports = router;