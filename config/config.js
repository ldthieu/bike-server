
module.exports = {
    db: {
        database: 'd690b3bupaedl5',
        username: 'gkueavdxmlohro',
        password: '7980ff4c6bba25fd25c3ea05ca6455856870bb51958fefb715fee5eadfa4a53f',
        host: 'ec2-54-83-15-95.compute-1.amazonaws.com',
        dialect: 'postgres',
        port: 5432
    },
    // db: {
    //     database: 'geocodingbike',
    //     username: 'postgres',
    //     password: '0914814880',
    //     host: 'localhost',
    //     dialect: 'postgres',
    //     port: 5432
    // },
    pool: {
        max: 20,
        min: 0,
        acquire: 30000,
        idle: 10000
    },
    secret_key: "superbike",
    port_api: process.env.PORT || 5000
}