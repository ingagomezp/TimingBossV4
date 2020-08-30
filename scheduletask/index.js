const express = require('express');
const cors = require('cors');
const cron = require('cron');
const axios = require('axios');
const PORT = 4007;

const http = require('http');
const app = express();

app.use(cors());

http.createServer(app).listen(PORT, () => {
    console.log(`Sin https - Server listening on port ${PORT}`);
});


app.get('/', (req, res, next) => {
    res.send('Out of here!');
});

var cronJob = cron.job("0 * * * * *", async function () {
    // perform operation e.g. GET request http.get() etc.
    try {
        const response = await axios.post('http://localhost:4006/api/v1/timerboss/timing');
        console.log('response v4 timing: ', response);
    } catch (err) {
        console.log(err.message);
    }
    console.info('cron job completed');
});
cronJob.start();