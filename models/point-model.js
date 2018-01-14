var { sequelize, Sequelize } = require('../config/connection');
const BikeType = require('./bike-type-model');
const Point = sequelize.define('point', {
    id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        notNull: true,
        autoIncrement: true,
        field: 'id'
    },
    bike_type_id: {
        type: Sequelize.INTEGER,
        notNull: true,
        field: 'bike_type_id'
    },
    address: {
        type: Sequelize.STRING,
        notNull: true,
        field: 'address'
    },
    note: {
        type: Sequelize.STRING,
        field: 'note'
    },
    status: {
        type: Sequelize.INTEGER,
        notNull: true,
        field: 'status'
    },
    reverse_geocoding_address: {
        type: Sequelize.STRING,
        field: 'reverse_geocoding_address'
    },
    customer_phone: {
        type: Sequelize.STRING,
        notNull: true,
        field: 'customer_phone'
    },
    customer_name: {
        type: Sequelize.STRING,
        field: 'customer_name'
    }
});

BikeType.hasMany(Point, { foreignKey: 'bike_type_id', sourceKey: 'id' });
Point.belongsTo(BikeType, { foreignKey: 'bike_type_id', targetKey: 'id' });

module.exports = Point;