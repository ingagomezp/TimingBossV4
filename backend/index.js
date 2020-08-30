const rateLimit = require('express-rate-limit');
const express = require('express');
const cors = require('cors');
const timeout = require('connect-timeout');
const bodyParser = require('body-parser');
const helmet = require('helmet');


const PORT = 4006;

const http = require('http');
const app = express();


http.createServer(app).listen(PORT, () => {
    console.log(`Sin https - Server listening on port ${PORT}`);
});

app.use(timeout(120000));
// elimina header inseguros
app.use(helmet());
app.use(cors());
const limiter = rateLimit({
    windowMs: 15 * 60 * 1000, // 15 minutes
    max: 200 // limit each IP to 100 requests per windowMs
});

//  apply to all requests
app.use(limiter);

// request payload middleware
app.use(express.urlencoded({ extended: true }));
app.use(bodyParser.json({ limit: '20mb' }));
app.use(bodyParser.urlencoded({ limit: '20mb', extended: true, parameterLimit: 50000 }));

app.use('/api/v1/timerboss', require('./routes/timerbossRoutes'));

app.get('/', (req, res, next) => {
    res.send('Out of here!');
});

app.use(function (err, req, res, next) {
    // console.error(err.stack); // se comenta ya que da informacion sobre el objeto que hace la verificación
    console.error('Error Handler Middleware: ' + err.message);
    res.status(500).send({
        status: 500,
        message: err.message,
        body: {}
    });
});