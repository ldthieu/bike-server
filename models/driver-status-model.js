var { sequelize, Sequelize } = require('../config/connection');
const DriverStatus = sequelize.define('driver_status', {
    id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        field: 'id'
    },
    name: {
        type: Sequelize.STRING,
        notNull: true,
        unique: true,
        field: 'name'
    }
});

module.exports = DriverStatus;