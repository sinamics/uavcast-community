import winston from 'winston';
import { paths } from '../config/paths';
import 'winston-daily-rotate-file';

class ServerLogger {
  name: string;
  logger: winston.Logger;
  constructor() {
    this.name = 'server';
    this.logger = this.createLogger();
    this.addConsole();
  }
  getLogger() {
    return this.logger;
  }
  createTransport() {
    return new winston.transports.DailyRotateFile({
      filename: `${paths.logFolder}/server-%DATE%.log`,
      datePattern: 'YYYY-MM-DD',
      // zippedArchive: true,
      json: true,
      maxSize: '5m',
      maxFiles: '7d',
      auditFile: `${paths.logFolder}/server-audit.json`,
      format: winston.format.combine(winston.format.json())
    });
  }
  createLogger() {
    if (winston.loggers.has(this.name)) {
      winston.loggers.close(this.name);
    }
    return winston.loggers.add(this.name, {
      // levels: myCustomLevels.levels,
      format: winston.format.combine(
        winston.format.timestamp({
          format: 'YYYY-MM-DD HH:mm:ss'
        }),
        // winston.format.label({ label: getLabel(callingModule) }),
        // winston.format.colorize({ colors: myCustomLevels.colors }),
        winston.format.errors({ stack: true }),
        winston.format.printf((info: any) => `${info.timestamp} ${info.level} [${info.label}]: ${info.message}`),
        winston.format.json(),
        winston.format.prettyPrint()
      ),
      defaultMeta: { service: 'uavcast' },
      transports: [this.createTransport()]
    });
  }
  addConsole() {
    if (process.env.NODE_ENV !== 'production') {
      winston.addColors({
        info: 'bold green', // fontStyle color
        warn: 'italic yellow',
        error: 'bold red',
        debug: 'green'
      });

      this.logger.add(
        new winston.transports.Console({
          level: 'silly',
          format: winston.format.combine(
            winston.format.colorize(),
            winston.format.timestamp({
              format: 'YYYY-MM-DD HH:mm:ss'
            }),
            winston.format.printf((info: any) => `${info.level}: ${info.message}`)
          ),
          //@ts-ignore
          prettyPrint: (object: any): any => {
            return JSON.stringify(object);
          }
        })
      );
    }
  }
  queryLogs({ from, until }: any) {
    return new Promise((resolve, reject): any => {
      const options: any = {
        from,
        until,
        limit: Infinity,
        start: 0,
        order: 'asc',
        fields: ['message', 'path', 'timestamp', 'level', 'data']
      };
      this.logger.query(options, function (err: any, result: any) {
        if (err) {
          reject(err);
          // throw callback(err);
        }
        resolve(result);
      });
    });
  }
}

export default ServerLogger;
