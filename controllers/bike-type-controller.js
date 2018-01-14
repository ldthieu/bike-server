var { sequelize, Sequelize } = require('../config/connection');
var BikeType = require('../models/bike-type-model');

function getBikeType(req, res) {
    BikeType.findAll()
        .then(rs => {
            if (rs.length > 0) {
                res.status(200).json({
                    success: true,
                    message: "get bike type list success!",
                    data: rs
                });
            } else {
                res.status(204).json({
                    success: false,
                    message: "No bike type found!"
                });
            }
        })
}

module.exports = { getBikeType };