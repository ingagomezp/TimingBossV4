/* eslint-disable space-before-function-paren */
const { TimerBoss } = require('../database/connection');

module.exports.getAll = async (where) => {
    try {
        const result = await TimerBoss.findAll({
            order: [
                ['timerup', 'ASC']
            ]
        });
        const resArr = [];
        result.forEach((element) => {
            resArr.push(element.dataValues);
        });
        // console.log(resArr);
        return result === null ? null : resArr;
    } catch (error) {
        console.log('Something went wrong: TimerBossService: getAll', error);
        throw new Error(error);
    }
};

module.exports.getOne = async ({ id }) => {
    try {
        const result = await TimerBoss.findOne(
            {
                where: { id: id }
            }
        );
        // console.log(result);
        return result === null ? null : result.dataValues;
    } catch (error) {
        console.log('Something went wrong: TimerBossService: getOne', error);
        throw new Error(error);
    }
};

module.exports.update = async ({ id, entity }) => {
    try {
        let result = {};

        await TimerBoss.update(
            entity,
            { returning: true, where: { id: id } }
        ).then(function ([rowsUpdate, [updatedEntity]]) {
            result = updatedEntity;
        });
        // console.log(result);
        return result === null ? null : result.dataValues;
    } catch (error) {
        console.log('Something went wrong: TimerBossService: update', error);
        throw new Error(error);
    }
};

