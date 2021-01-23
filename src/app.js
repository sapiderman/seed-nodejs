'use strict';

import createError from 'http-errors';
import express from 'express';
import path from 'path';
import cookieParser from 'cookie-parser';
import status from 'express-status-monitor';

const app = express();
import { logger, requestLogger, expressErrorLogger } from './utils/logger.js';
import userRoutes from './routes/router.js';
import v1Routes from './routes/v1router.js';
import swaggerUi from 'swagger-ui-express';
import swaggerDoc from '../swagger-docs.json';

import { dirname } from 'path';
import { fileURLToPath } from 'url';
const __dirname = dirname(fileURLToPath(import.meta.url));

logger.info('starting app...');

// view engine setup
app.set('views', path.join(__dirname, './views'));
app.set('view engine', 'pug');

// express setup
app.use(status());
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


export default app;
