'use strict';

 import config from './config/config.js';
// import { start } from 'elastic-apm-node';
 import { logger } from './utils/logger.js';
 import app from './app.js';
 import errorHandler from 'errorhandler';

 
if (process.env.ELASTIC_APM_ENABLE == true) {
    logger.info('apm starting up');
    start();
}

// Error Handler. Provides full stack - use only i nevelopment
if (config.NODE_ENV === "development") {
    use(errorHandler());
}

const server = app.listen(config.app.port, () => {
    logger.info(`server started on: ${config.app.host}:${config.app.port}`);
    logger.info('ctrl+c to cancel/stop');
});


const stopServer = async () => {
    logger.warn('shutting down the server . . .')
    if (server.listening) {
        logger.close();

        server.close(function onServerClosed(err) {
            if (err) {
                logger.error(err);
                process.exitCode = 1;
            }
            process.exit();
        });
    }
};


process.on('SIGINT', stopServer);
process.on('SIGTERM', stopServer);

export default server;


