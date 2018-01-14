var { sequelize, Sequelize } = require('../config/connection');
var PointStatus = require('../models/point-status-model');

function getPointStatus(req, res) {
    PointStatus.findAll()
        .then(rs => {
            if (rs.length > 0) {
                res.status(200).json({
                    success: true,
                    message: "get point status list success!",
                    data: rs
                });
            } else {
                res.status(204).json({
                    success: false,
                    message: "No point status found!"
                });
            }
        })
}

function createPointStatus(req, res) {
    PointStatus.create({
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

module.exports = { getPointStatus, createPointStatus };