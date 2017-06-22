/**
 * Created by macmini on 2017/6/22.
 */
'use strict'
import mongoose from 'mongoose'

const sTest=new mongoose.Schema({
  name:String,
  age:Number,
  address:String,
  idCard:String
});

const mTest =mongoose.model('test',sTest);

let arr=['北京','上海','杭州','广州','嵊州'];
mTest.findOne((err, data) => {
  if (!data) {
    for (let i=0;i<10;i++){
      let newIds = new mTest({
        name:"name"+i,
        age:Math.ceil(Math.random()*100+1),
        address:arr[Math.ceil(Math.random()*5)],
        idCard:""
      });
        newIds.save();
      }
    }


  });

export default mTest