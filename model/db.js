/**
 * Created by 54574_000 on 2016/11/23.
 */
var mongoose=require("mongoose");
var db=mongoose.createConnection("mongodb://127.0.0.1:27017/zhixing");
module.exports=db;