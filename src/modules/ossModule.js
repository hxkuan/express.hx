'use strict';
import OSS from 'ali-oss';
import config from 'config-lite';
import fs from 'fs';

let ossConf = config.oss;
const ossClient = new OSS.Wrapper({
  region: ossConf.region,
  accessKeyId: ossConf.accessKeyId,
  accessKeySecret: ossConf.accessKeySecret,
  bucket: ossConf.bucket
});

class OSSTool {

  /**
   * 查看文件列表
   * @param dir
   * @returns {*|Promise|{res, objects, prefixes, nextMarker, isTruncated}}
   */
  list(dir) {
    let param = {};
    param.marker = ossConf.root + (dir ? dir : '');
    return ossClient.list(param);
  }


  /**
   * 删除文件
   * @param fileName
   * @returns {*|OrderedBulkOperation|boolean|{res}|{password_required}}
   */
  delete(fileName) {
    return ossClient.delete(ossConf.root + fileName);
  }

  /**
   * 上传文件
   * @param fName 本地文件名
   * @param tName 上传文件名
   * @returns {Object}
   */
  upload(fName, tName) {
    return ossClient.put(ossConf.root + tName, fName);
  }

  /**
   * 下载文件
   * @param fileName
   */
  download(fName ,tName) {
    return ossClient.getStream(ossConf.root + fName).then(result=>{
      tName=tName || './'+fName;
      let writeStream = fs.createWriteStream(tName);
      result.stream.pipe(writeStream);
      return {result,name:tName}
    });
  }
}

export default new OSSTool();