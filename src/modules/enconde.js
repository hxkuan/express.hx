/**
 * 加密工具类 (使用hex编码)
 */

'use strict';

import crypto from 'crypto';

let config = {secret: 'hxk'}

class Enconde {


  /**
   * 使用哈希算法 sha256 加密
   * @param data
   * @param secret
   */
  sha256(data, secret = config.secret) {
    if (typeof data !== 'string' || typeof secret !== 'string') {
      return undefined;
    }
    return crypto.createHmac('sha256', secret).update(data).digest('hex');
  }

  /**
   * 对称加密算法aes （加密）
   * @param Sting data 数据
   * @param String secret
   */
  aesEncrypt(data, secret = config.secret) {
    if (typeof data !== 'string' || typeof secret !== 'string') {
      return undefined;
    }
    let cipher = crypto.createCipher('aes192', secret);
    let crypted = cipher.update(data, 'utf8', 'hex');
    crypted += cipher.final('hex');
    return crypted;
  }


  /**
   * 对称加密算法aes （解密）
   * @param encrypted
   * @param secret
   */
  aesDecrypt(data, secret=config.secret) {
    if (typeof data !== 'string' || typeof secret !== 'string') {
      return undefined;
    }
    let decipher = crypto.createDecipher('aes192', secret);
    let decrypted = decipher.update(data, 'hex', 'utf8');
    decrypted += decipher.final('utf8');
    return decrypted;
  }

}

export default new Enconde();

