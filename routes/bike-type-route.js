var express = require('express');
var bikeTypeController = require('../controllers/bike-type-controller');

const router = express.Router();

router.route('/')
    .get(
        bikeTypeController.getBikeType
    )

module.exports = router;