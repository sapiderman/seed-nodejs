// import config  from './config/config';
// import { start } from 'elastic-apm-node';
// import  logger  from './utils/logger';

const { config } = require('./config/config');
const apm = require('elastic-apm-node');
const { logger } = require('./utils/logger');

if( process.env.ELASTIC_APM_ENABLE==true) {
    logger.info('apm starting up');
    start();
}

//import { use, listen } from './app';
// import errorHandler from 'errorhandler';

const app = require('./app');
const errorHandler = require('errorhandler');

// Error Handler. Provides full stack - use only i nevelopment
if (process.env.NODE_ENV === "development") {
 use(errorHandler());
}

const server = app.listen(config.app.port, ()=> {
     logger.info(`starting server on: ${config.app.host}:${config.app.port}`);
     logger.info('ctrl+c to cancel/stop');
 });


const stopServer = async() => {
    logger.warn('shutting down the server . . .')
    if (server.listening) {
        logger.close();
        server.close();
    }
};


process.on('SIGINT', stopServer);
process.on('SIGTERM', stopServer);

// export default server;
module.exports = server;

