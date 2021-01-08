import dotenv, { config } from 'dotenv';
import { logger } from '../utils/logger.js';

dotenv.config();
logger.info('.env loaded...');

const cfg = {
    name: process.env.NAME || 'SEED-ENV-UNSET',
    version: process.env.VERSION || '0.0.0-dev',
    env: process.env.NODE_ENV || 'development',
    app: {
        port: process.env.PORT || '3000',
        host: process.env.HOST || 'localhost',
    },
    db: {
        host: process.env.MONGODB_HOST || 'localhost',
        port: process.env.MONGODB_HOST || 27017,
        name: process.env.MONGODB_NAME || 'seedDb'
    },
    apm: {
        enable: process.env.ELASTIC_APM_ENABLE || 'false',
    }
};

export default cfg;

