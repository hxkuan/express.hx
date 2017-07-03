/**
 * 默认配置文件
 */
let params={};
params.projectName='HxExpress';
params.port=8001;

params.cookie={
  secret: params.projectName+'cookie_secret',//这边不能加随机数，否则服务重启，所有的cookie都出问题
};

params.session={
  name: 'SID',
  secret: params.projectName+'session_secret',
  cookie: {
    httpOnly: true,
    secure:   false,
    maxAge:   365 * 24 * 60 * 60 * 1000,
  }
};

params.db={
  url: 'mongodb://localhost:27017/'+params.projectName+'_db',
  login:'',
  pwd:''
};

module.exports=params;