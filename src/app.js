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
import path from 'path'

let app = express();
db.connect();
app.set('views', path.join(__dirname, '../views'));
app.set('view engine', 'ejs');

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
app.use((req, res, next) => {
  res.status(404).render('error', {message: '当前路由不存在', error: {status: 404, stack: ""}});
});
app.use((err, req, res, next) => {
  let error = err;
  error.status = error.status || 500
  res.status(500).render('error', {message: '出错啦！', error});
});


app.listen(config.port);