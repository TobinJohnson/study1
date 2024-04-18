
const { createLogger, format, transports } = require('winston');
const { combine, timestamp, label, printf } = format;

const myFormat = printf(({ level, message, timestamp }) => {
    return `${timestamp} [${level}] ${message}`;
});

const logger =createLogger({level: 'info',
           format: combine(timestamp({format:"HH:mm:ss"}),myFormat),
            transports: [new transports.Console()],})
module.exports =logger