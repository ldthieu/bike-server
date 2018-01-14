var express = require('express');
var pointController = require('../controllers/point-controller');

const router = express.Router();

router.route('/')
    .get(
        pointController.getPoint
    )
    .post(
        pointController.createPoint
    )

module.exports = router;