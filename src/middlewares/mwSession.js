/**
 * session
 */

'use strict';
import config from 'config-lite'
import session from 'express-session'
import connectMongo from 'connect-mongo';

const mongoStore = connectMongo(session);
export default ()=> session({
  name: config.session.name,
  secret: config.session.secret,
  resave: true,
  saveUninitialized: false,
  cookie: config.session.cookie,
  store: new mongoStore({
    url: config.db.url
  })
});