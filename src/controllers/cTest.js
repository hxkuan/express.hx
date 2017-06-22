/**
 * Created by macmini on 2017/6/22.
 */
import mTest from '../models/mTest'

class Test {
  constructor(){

  }
  async getTest(req, res, next){
    try{
      const explain = await mTest.findOne();
      res.send(explain)
    }catch(err){
      console.log('获取服务中心数据失败', err);
      res.send({
        status: 0,
        type: 'ERROR_GET_SERVER_DATA',
        message: '获取服务中心数据失败'
      })
    }
  }
}

export default new Test()