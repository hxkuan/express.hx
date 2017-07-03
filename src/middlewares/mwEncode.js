/**
 * 加密中间件
 */

import encode from '../modules/enconde'

class MwEncode {

  /**
   * 加/减密cookie
   * req.enCookie();创建加密cookie
   * res.enCookies;获取cookie
   */
  cookie() {
    return (req, res, next) => {
      res.enCookie = (name, value, options) => {
        res.cookie(name, 'aes:' + encode.aesEncrypt(JSON.stringify(value)), options);
      };

      if (req.enCookies) {
        return next();
      }

      req.enCookies = deCookies({...req.cookies,...req.signedCookies});
      next();

    }
  }
}

function deCookies(obj) {
  let cookies = Object.keys(obj);
  for (let i = 0; i < cookies.length; i++) {
    let val,
    key = cookies[i];
    if (typeof obj[key] === 'string' && obj[key].substr(0, 4) === 'aes:') {
      try {
        val = JSON.parse(encode.aesDecrypt(obj[key].substr(4)) || '');
      } catch (e) {
        continue;
      }
    }

    if (val) {
      obj[key] = val;
    }
  }

  return obj;
}

export default new MwEncode();