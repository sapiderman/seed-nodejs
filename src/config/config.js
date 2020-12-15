// import dotenv from 'dotenv';
const cfg = require('dotenv').config();
const { logger } = require ('../utils/logger');

logger.info('.env loaded...');

// export const env = process.env.NODE_ENV || 'development';
// export const port = process.env.PORT || '3000';
// export const host = process.env.HOST || 'localhost';

// export const dbUser = process.env.DBUSER || 'user';
// export const dbpASS = process.env.DBPASS || 'user123';
// export const dbHost = process.env.DBHOST || 'localhost';
// export const dbPort = process.env.DBPORT || '27017';
// export const dbDatabse = process.env.DB || 'testDB';

// export const apmEnable = process.env.ELASTIC_APM_ENABLE || 'false';

const config = {
    name: process.env.NAME || 'SEED-ENV-UNSET',
    version: process.env.VERSION || '0.0.0-dev',
    env: process.env.NODE_ENV || 'development',
    app: {
        port: process.env.PORT || '3000',
        host: process.env.HOST || 'localhost',
    },
    db: {
        host: 'localhost',
        port: 27017,
        name: 'db'
    }
};

module.exports = { config };