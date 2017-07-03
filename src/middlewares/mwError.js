/**
 * 错误处理
 */
'use strict';

class MwError {

  error404() {
    return (req, res, next) => {
      res.status(404).render('error', {message: '当前路由不存在', error: {status: 404, stack: ""}});
    }
  }

  error500(){
    return (err, req, res, next)=> {
      let error = err;
      error.status = error.status || 500
      res.status(500).render('error', {message: '出错啦！', error});
    }
  }
}

export default new MwError();
