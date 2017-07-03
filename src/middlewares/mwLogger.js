/**
 * 日志中间件
 * 基于winston和express-winston
 */
'use strict';
import winston from 'winston';
import expressWinston from 'express-winston';

class MwLogger{

  beforeRoutes(){
    return expressWinston.logger({
      transports: [
        new (winston.transports.Console)({
          json: true,
          colorize: true
        }),
        new winston.transports.File({
          filename: 'logs/success.log'
        })
      ]
    });
  }

  afterRoutes(){
    return expressWinston.errorLogger({
      transports: [
        new winston.transports.Console({
          json: true,
          colorize: true
        }),
        new winston.transports.File({
          filename: 'logs/error.log'
        })
      ]
    });
  }
}

export default new MwLogger();