/**
 * 默认配置文件
 */
let params={};
params.port=8001;
params.db={
  url: 'mongodb://localhost:27017/hxexpress',
  login:'',
  pwd:''
};

params.session={
  name: 'SID',
    secret: 'SID',
    cookie: {
    httpOnly: true,
      secure:   false,
      maxAge:   365 * 24 * 60 * 60 * 1000,
  }
};

module.exports=params;