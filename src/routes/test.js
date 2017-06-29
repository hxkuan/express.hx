import express from 'express'
import config from 'config-lite'
import t from '../controllers/cTest'

let router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('this is a test page\n'+JSON.stringify(config)+'\n');
});
router.get('/err500', function(req, res, next) {
  let name;
  name.log();
});
router.get('/api',t.getTest);
router.get('/cookie',(req,res,next)=>{
  res.cookie('name','hxk');
  res.cookie('age',222,{maxAge:1000});
  res.cookie('pwd',222222,{signed:true});

  res.send('<br>cookie:<br>'+JSON.stringify(req.cookies)+'<br>signedCookie:<br>'+JSON.stringify(req.signedCookies))
});
module.exports = router;
