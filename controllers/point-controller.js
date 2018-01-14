var { sequelize, Sequelize } = require('../config/connection');
var Point = require('../models/point-model');
var BikeType = require('../models/bike-type-model');

function getPoint(req, res) {
    let params = {};
    if (req.query.id) {
        params.id = req.query.id;
    }
    if (req.query.address) {
        params.address = { $like: '%' + req.query.address + '%' };
    }
    if (req.query.geo) {
        params.reverse_geocoding_address = { $like: '%' + req.query.geo + '%' };
    }
    if (req.query.bike_type_id) {
        params.bike_type_id = req.query.bike_type_id;
    }
    if (req.query.status) {
        params.status = req.query.status;
    }
    if (req.query.phone) {
        params.customer_phone = req.query.phone;
    }
    if (req.query.name) {
        params.customer_name = { $like: '%' + req.query.name + '%' };
    }
    Point.findAll({
        where: params,
        include: {
            model: BikeType
        }
    })
        .then(rs => {
            if (rs.length > 0) {
                res.status(200).json({
                    success: true,
                    message: "get point list success!",
                    data: rs
                });
            } else {
                res.status(404).json({
                    success: false,
                    message: "No point found!"
                });
            }
        })
}

function createPoint(req, res) {
    Point.create({
        bike_type_id: req.body.bike_type_id,
        address: req.body.address,
        note: req.body.note,
        status: 1,
        reverse_geocoding_address: req.body.reverse_geocoding_address,
        customer_phone: req.body.customer_phone,
        customer_name: req.body.customer_name
    })
        .then(point => {
            res.status(200).json({
                success: true,
                message: "Created point successfully!"
            });
        })
        .catch(err => {
            console.log(err);
            res.status(500).json({
                success: false,
                message: "Failed to create point!"
            });
        });
}

module.exports = { getPoint, createPoint };