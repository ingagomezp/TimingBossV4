const express = require('express');
// eslint-disable-next-line new-cap
const router = express.Router();
const timerbossController = require('../controller/timerbossController');

router.get('/:id',
    timerbossController.getById
);

router.put('/:id',
    timerbossController.update
);

router.get('/',
    timerbossController.getAll
);

router.post('/timing',
    timerbossController.timing
)

module.exports = router;
