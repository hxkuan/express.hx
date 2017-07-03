/**
 * 应用主文件
 */
'use strict'
import express from 'express'
import config from 'config-lite'
import history from 'connect-history-api-fallback'
import path from 'path'
import cookieParser from 'cookie-parser'
import router from './routes'
import db from './modules/db'
import mwLogger from './middlewares/mwLogger'
import mwError from './middlewares/mwError'
import mwSession from './middlewares/mwSession'
import MwEncode from './middlewares/MwEncode'

const app = express();
db.connect();
app.set('views', path.join(__dirname, '../views'));
app.set('view engine', 'ejs');

app.use(cookieParser(config.cookie.secret));
app.use(mwSession());
app.use(MwEncode.cookie());


app.use(mwLogger.beforeRoutes());

router(app);

app.use(mwLogger.afterRoutes());

app.use(history()); //处理SPA页面中的404问题
app.use(express.static('./public'));
app.use(mwError.error404());
app.use(mwError.error500());


app.listen(config.port);