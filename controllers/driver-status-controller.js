var { sequelize, Sequelize } = require('../config/connection');
var DriverStatus = require('../models/driver-status-model');

function getDriverStatus(req, res) {
    DriverStatus.findAll()
        .then(rs => {
            if (rs.length > 0) {
                res.status(200).json({
                    success: true,
                    message: "get driver status list success!",
                    data: rs
                });
            } else {
                res.status(204).json({
                    success: false,
                    message: "No driver status found!"
                });
            }
        })
}

function createDriverStatus(req, res) {
    DriverStatus.create({
        name: req.body.name
    })
        .then(status => {
            res.status(200).json({
                success: true,
                message: "Created status successfully!"
            });
        })
        .catch(err => {
            console.log(err);
            res.status(500).json({
                success: false,
                message: "Failed to create status!"
            });
        });
}

module.exports = { getDriverStatus, createDriverStatus };