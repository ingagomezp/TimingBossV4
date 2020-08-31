const TimerBossService = require('../service/timerbossService');

module.exports.getAll = async (req, res) => {
    const response = {
        status: 400,
        message: '',
        body: {}
    };
    try {
        console.log()
        const responseFromService = await TimerBossService.getAll(req.query);
        response.status = 200;
        response.message = 'Proceso ejecutado de manera exitosa';
        response.body = responseFromService;
    } catch (error) {
        console.log('Something went wrong: Controller: getAll', error);
        response.message = error.message;
    }
    return res.status(response.status).send(response);
};

module.exports.getById = async (req, res) => {
    const response = {
        status: 400,
        message: '',
        body: {}
    };
    try {
        const responseFromService = await TimerBossService.getOne(req.params);
        response.status = 200;
        response.message = 'Proceso ejecutado de manera exitosa';
        response.body = responseFromService;
    } catch (error) {
        console.log('Something went wrong: Controller: getById', error);
        response.message = error.message;
    }
    return res.status(response.status).send(response);
};

module.exports.update = async (req, res) => {
    const response = {
        status: 400,
        message: '',
        body: {}
    };
    try {
        const responseFromService = await TimerBossService.update({
            id: req.params.id,
            entity: req.body
        });
        response.status = 200;
        response.message = 'Proceso ejecutado de manera exitosa';
        response.body = responseFromService;
    } catch (error) {
        console.log('Something went wrong: Controller: update', error);
        response.message = error.message;
    }
    return res.status(response.status).send(response);
};

module.exports.timing = async (req, res) => {
    const response = {
        status: 400,
        message: '',
        body: {}
    };
    try {
        const responseFromService = await TimerBossService.getAll(req.query);
        responseFromService.forEach(async (element) => {
            console.log(element);
            if (element.status) {
                element.timerup = element.timerup - 1;
                if (element.timerup <= 0) {
                    element.timerup = element.timer;
                }
                await TimerBossService.update({ id: element.id, entity: { ...element } });
            }
        });
        response.status = 200;
        response.message = 'Proceso ejecutado de manera exitosa';
        response.body = responseFromService;
    } catch (error) {
        console.log('Something went wrong: Controller: timing', error);
        response.message = error.message;
    }
    return res.status(response.status).send(response);
};
