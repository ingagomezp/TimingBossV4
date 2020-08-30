const Sequelize = require('sequelize');
const { timerbossModel } = require('./models/PgModel');

const connectionString = `postgresql://v4pglt:latinos2020@45.132.242.135:5432/v4`;

const sequelize = new Sequelize(connectionString, {
    define: {
        timestamps: false
    },
    dialect: 'postgres',
    dialectOptions: {
        useUTC: false
    },
    timezone: '-05:00'
});

const TimerBoss = timerbossModel(sequelize, Sequelize);

module.exports = {
    TimerBoss
};
