import express from 'express'
import config from 'config-lite'
import t from '../controllers/cTest'

let router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('this is a test page\n'+JSON.stringify(config)+'\n');
});

router.get('/api',t.getTest);
module.exports = router;
