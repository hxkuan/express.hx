/**
 * 应用主文件
 */
'use strict'
import express from 'express'
import router from './routes'
import config from 'config-lite'
import winston from 'winston';
import expressWinston from 'express-winston';
import history from 'connect-history-api-fallback'
import db from './modules/db'
const app = express();

db.connect();
app.use(expressWinston.logger({
  transports: [
    new (winston.transports.Console)({
      json: true,
      colorize: true
    }),
    new winston.transports.File({
      filename: 'logs/success.log'
    })
  ]
}));

router(app);

app.use(expressWinston.errorLogger({
  transports: [
    new winston.transports.Console({
      json: true,
      colorize: true
    }),
    new winston.transports.File({
      filename: 'logs/error.log'
    })
  ]
}));

app.use(history()); //处理SPA页面中的404问题
app.use(express.static('./public'));
app.use((err, req, res, next) => {
  res.status(404).send('未找到当前路由');
});


app.listen(config.port);