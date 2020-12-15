'use strict';

const createError = require('http-errors');
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');

const app = express();
const swaggerUi = require('swagger-ui-express');

const { logger, requestLogger, expressErrorLogger } = require('./utils/logger');
const swaggerDoc= require('../swagger-docs.json');
const userRoutes = require('./routes/router');
const v1Routes = require('./routes/v1router');


logger.info('starting app...');

// view engine setup
app.set('views', path.join(__dirname, './views'));
app.set('view engine', 'pug');

// express setup
app.use(requestLogger);
app.use(expressErrorLogger);
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use('/docs', swaggerUi.serve, swaggerUi.setup(swaggerDoc));

// setup custome routes
app.use('/', userRoutes);
app.use('/v1', v1Routes);


// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});


module.exports = app;
