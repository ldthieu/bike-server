var express = require('express');
var userTypeRoute = require('./user-type-route');
var bikeTypeRoute = require('./bike-type-route');
var userRoute = require('./user-route');
var pointStatusRoute = require('./point-status-route');
var pointRoute = require('./point-route');
var driverStatusRoute = require('./driver-status-route');
var { enCrypt, deCrypt } = require('../utils/utils');

const router = express.Router();

router.use('/user_type', userTypeRoute);
router.use('/bike_type', bikeTypeRoute);
router.use('/user', userRoute);
router.use('/point_status', pointStatusRoute);
router.use('/point', pointRoute);
router.use('/driver_status', driverStatusRoute);

router.route('/').get(
    (req, res) => {
        res.json({
            message: "you are welcome!"
            // en: enCrypt("admin"),
            // de: deCrypt(enCrypt("admin"))
        });
    }
)

module.exports = router;