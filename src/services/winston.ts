import winston, { LoggerOptions, format } from 'winston';

const consoleTransport = new winston.transports.Console();
const errorLogsFileTransport = new winston.transports.File({
  filename: 'error.log',
  level: 'error',
});
const allLogsFileTransport = new winston.transports.File({
  filename: 'all_logs.log',
  level: 'info',
});

const winstonOptions: LoggerOptions = {
  format: format.combine(
    format.timestamp({
      format: 'YYYY-MM-DD HH:mm:ss',
    }),
    format.prettyPrint()
  ),
  transports: [consoleTransport, errorLogsFileTransport, allLogsFileTransport],
};

const logger = winston.createLogger(winstonOptions);

export default logger;
