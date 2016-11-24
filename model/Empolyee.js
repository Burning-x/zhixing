/**
 * Created by 54574_000 on 2016/11/23.
 */
var mongoose=require("mongoose");
var db=require("./db.js");

//设置雇员模版
var Empolyee=db.model("Empolyee",{
    name:String,
    gender:String,
    birth:Date,
    address:{
        type:mongoose.Schema.ObjectId,
        ref:"Adress"
    }
})
//设置地址模版
var Adress=db.model("Adress",{
    country:String,
    province:String,
    city:String,
    district:String,
    road:String,
    code:Number
})

function insertEmpolyee(filed) {
    console.log("nihao");
    var addres=new Adress({
        country:filed.country,
        province:filed.province,
        city:filed.city,
        district:filed.district,
        road:filed.road,
        code:filed.code
    })
    var birth=new Date(filed.birth);
    var employee=new Empolyee({
        birth:filed.birth,
        name:filed.name,
        gender:filed.gender,
        address:addres

    })
    addres.save(function (err) {
        if(err){
            return console.log('save user failed:', err);
        }
        employee.save(function (err) {
            if(err) {
                return console.log('save news failed:', err);
            }
            Empolyee.findOne().populate('address').exec(function(err, doc){
               // console.log('after populate: ', err, doc);
            });
        })
    })
}
function findEmpolyee(id,callback) {
    var _id=mongoose.mongo.ObjectId(id);
    Empolyee.findOne({_id:_id}).populate("address").exec((function (err, doc) {
        //console.log('after populate: ', err, doc);
        callback(doc);
    }))
}
//设置页码，每页展示数量

 function findEmpolyeeMany(page,callback) {
    Empolyee.find({},function (err,doc) {
        if(err){
            console.log("err",err)
            return;
        }
       return callback(doc);
    }).limit(3).skip(parseInt(page)*2);
}

function updateEmpolyee(field) {
//console.log(field);
    //console.log(field);
    findEmpolyee(field._id,function (doc) {
        Empolyee.update({"_id": mongoose.mongo.ObjectId(field._id)},{$set: {"name":field.ename,"gender":field.gender,"birth":field.birth}}, function (err) {
            if (err) {
                console.log("类型错误");
                return;
            }
        })

        Adress.update({"_id":doc.address._id},
            {$set:{"city":field.city,"country":field.country,"province":field.province,
                "district":field.district,"road":field.road,"code":field.code}},function (err) {
            if(err){
                console.log("类型错误");
                return;
            }
        })
    })
}
//删除数据，暂未使用
/*
 function  delEmpolyee(id) {
     var _id = mongoose.mongo.ObjectId(id);
     Empolyee.remove({_id: _id}, function (err) {
         if (err) {
             console.log(err);
         }
     })
 }
*/
//找到单条数据
module.exports.findEmpolyee=findEmpolyee;
//找到所有数据
module.exports.findEmpolyeeMany=findEmpolyeeMany;
//添加数据
module.exports.insertEmpolyee=insertEmpolyee;
//更改数据
module.exports.updateEmpolyee=updateEmpolyee;
//module.exports.updateEmpolyee=updateEmpolyee;

