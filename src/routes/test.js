import express from 'express'
import config from 'config-lite'
import t from '../controllers/cTest'

let router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('this is a test page\n'+JSON.stringify(config)+'\n');
});
/**
 * 访问错误（测试错误日志模块）
 */
router.get('/err500', function(req, res, next) {
  let name;
  name.log();
});

/**
 * 接口（测试数据库模块）
 */
router.get('/api',t.getTest);

/**
 * 测试cookie
 */
router.get('/cookie',(req,res,next)=>{
  res.cookie('name','hxkuan');
  res.cookie('name1',{'l':'nfkjad',f:21});
  res.cookie('age',222,{maxAge:1000});
  // res.cookie('pwd',22211222,{signed:true});
  res.enCookie('enCookie',{name:{f:'hx',l:'kuan'},i:['b','y'],age:23,addr:'zg-zj-hz'});
  res.enCookie('enCookieStr',"123qwe你读",{signed:true,maxAge:1000});

  res.send('<br>cookie:<br>'+JSON.stringify(req.cookies)+'<br><br>signedCookie:<br>'+JSON.stringify(req.signedCookies)+'<br><br>enCookies:<br>'+JSON.stringify(req.enCookies))
});

/**
 * 测试session
 */
router.get('/session', function (req, res) {
  if(req.session.isVisit) {
    req.session.isVisit++;
    res.send('<p>第 ' + req.session.isVisit + '次来此页面</p>');
  } else {
    req.session.isVisit = 1;
    res.send("欢迎第一次来这里");
    console.log(req.session);
  }
});
module.exports = router;
