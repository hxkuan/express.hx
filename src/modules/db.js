'use strict';

import mongoose from 'mongoose';
import config from 'config-lite';

let dbConfig=config.db;

class DB {
  constructor(){

  }
  connect(){
    mongoose.connect(dbConfig.url, {server:{auto_reconnect:true}});
    mongoose.Promise = global.Promise;

    let db = mongoose.connection;

    db.once('open' ,() => {
      console.log('连接数据库成功')
    })

    db.on('error', function(error) {
      console.error('Error in MongoDb connection: ' + error);
      mongoose.disconnect();
    });

    db.on('close', function() {
      console.log('数据库断开，重新连接数据库');
      mongoose.connect(dbConfig.url, {server:{auto_reconnect:true}});
    });

    return db

  }
}

export default new DB();
