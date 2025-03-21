const winston = require("winston");

const logger = winston.createLogger({
    level: 'info',
    format:winston.format.cli(),
    transports: [
        new winston.transports.Console(),
        // new winston.transports.File({filename: 'index.log', level: 'error'})
    ]
})

logger.info("An info log")
logger.error("An error log")