'use strict'
import winston from 'winston';
import expressWinston from 'express-winston';
const { combine, splat, timestamp, printf } = winston.format;

const myFormat = printf(({ level, message, timestamp, ...metadata }) => {
  let msg = `${timestamp} [${level}] : ${message} `
  if (metadata) {
    msg += JSON.stringify(metadata)
  }
  return msg
});

const transportOptions = [
  new winston.transports.Console({ level: 'debug' }),
  // new transports.File({ filename: config.get("app.logging.outputfile"), level: 'debug' }),
];

const logger = winston.createLogger({
  level: 'debug',
  format: combine(
    winston.format.colorize(),
    splat(),
    timestamp(),
    myFormat
  ),
  meta: true,
  colorize: true,
  transports: transportOptions
});

const requestLogger = expressWinston.logger({
  level: 'info',
  format: winston.format.combine(
    winston.format.colorize(),
    winston.format.json(),
    myFormat
  ),
  meta: true,
  colorize: true,
  transports: transportOptions
});

const expressErrorLogger = expressWinston.errorLogger({
  transports: transportOptions,
  format: winston.format.combine(
    winston.format.json(),
    winston.format.colorize(),
  ),
  msg: "{{err.message}} {{res.statusCode}} {{req.method}} with error: {{err}} and request: {{req}} and response: {{res}}"
});

logger.info('logging initialized...');

// export default logger;
export {
  logger,
  requestLogger,
  expressErrorLogger
};