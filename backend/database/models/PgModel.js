const timerbossModel = (sequelize, type) => sequelize.define('timerboss', {
    id: {
        type: type.INTEGER,
        primaryKey: true,
        autoIncrement: false
    },
    name: type.STRING,
    channel: type.INTEGER,
    timer: type.INTEGER,
    timerup: type.INTEGER,
    img: type.STRING,
    status: type.BOOLEAN
}, {
    timestamps: false,
    freezeTableName: true
});

module.exports = { timerbossModel: timerbossModel }