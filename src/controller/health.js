const process = require('process');
const os = require('os');

const SECONDS_IN_DAY = 3600 * 24;
const SECONDS_IN_HOUR = 3600;
const SECONDS_IN_MINUTE = 60;
const MEGABYTE = 1048576;

/**
 * upTimeString just calculaes processuptime
 * @param {na}
 * @returns {string} of uptime
 **/
function upTimeString() {
    const uptimedat = process.uptime();

    const day = Math.floor(uptimedat / SECONDS_IN_DAY);
    const hours = Math.floor((uptimedat / SECONDS_IN_HOUR) % 24);
    const minutes = Math.floor((uptimedat / SECONDS_IN_MINUTE) % 60);
    const seconds = Math.floor(uptimedat % 60);

    return (
        day + " days, " + hours + " hours, " + minutes + " minutes, " + seconds + " seconds."
    );
}

/**
 * health check handler
 * @params - {object}req, {object}res
 * @returns - {object} status json
 **/
function health(req, res) {

    const freeMB = Math.round(os.freemem() / MEGABYTE);
    const totalMB = Math.round(os.totalmem() / MEGABYTE);

    return res.json({
        status: "ALIVE!",
        version: "0.0.1",
        timestamp: Date.now(),
        osUpTime: os.uptime(),
        freemem: freeMB + " / " + totalMB + " MB",
        checks: [{
            name: "server",
            status: "up",
            uptime: upTimeString(),
            uptimeRaw: process.uptime(),
        },
        {
            name: "mongodb",
            status: "none",
            uptime: "0",
        }
        ],

    });
};


module.exports = {
    health
}