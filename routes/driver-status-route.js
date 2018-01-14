var express = require('express');
var driverStatusController = require('../controllers/driver-status-controller');

const router = express.Router();

router.route('/')
    .get(
        driverStatusController.getDriverStatus
    )
    .post(
        driverStatusController.createDriverStatus
    )

module.exports = router;