import express from 'express'
import config from 'config-lite'

let router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('this is a test page\n'+JSON.stringify(config));
  debugger
});

module.exports = router;
