const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
const path = require('path');
let createError = require('http-errors');
const favicon = require('serve-favicon');
require('dotenv').config({ path: path.join(__dirname, './.env') });

const app = express();

// port
const port = process.env.PORT || 9000;

//import routes
const routes = require('./routes/index');
const routesAPI = require('./routes/api.admins');
const routesAPIEmployee = require('./routes/api.employee');

// settings
app.set('views', path.join(__dirname, 'views'));
app.engine('html', require('ejs').renderFile);
app.set('view engine', 'ejs');

// middlewares
app.use(morgan('dev'));
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }))
app.use(favicon(path.join(__dirname, 'public/img', 'favicon.ico')));

// routes
app.use('/', routes);
app.use('/api', routesAPI);
app.use('/api', routesAPIEmployee);

// static files
app.use(express.static(path.join(__dirname, 'public')));

// catch 404 and forward to error handler
app.use((err, req, res, next) => {
    res.render(
        '../views/error.html',
        {
            title: 'Inventario Error',
            message: 'esta sera la pagina de error para la API de Inventario de vacunación'
        }
    );
    next(createError(err));
});

// error handler
app.use( (err, req, res, next) => {
    process.env.NODE_ENV === 'development' ? next(createError(err)) : next();
});

// listen server on port
app.listen(port, () => {
    console.log(`CORS-enabled, web server listening on port: ${port}`)
});

//  signal that is sent to request the process terminates.
process.on('SIGTERM', () => {
    app.close(() => {
        console.log('Process terminated')
        process.exit(0);
    })
});
