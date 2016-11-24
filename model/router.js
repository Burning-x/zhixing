/**
 * Created by 54574_000 on 2016/11/23.*/
var express=require("express");
var app=express();
var formidable=require("formidable");
app.use(express.static("./public"));
app.set("view engine","ejs");
var Employee=require("./Empolyee");
/*

 app.listen(4000);*/

function  firstPage(req, res) {
    Employee.findEmpolyeeMany(req.query.page, function (doc) {
        //console.log(doc);
        if (req.query.page == null) {
            return res.render("index", {
                pagenow: parseInt("0"),
                name: doc
            })
        }else if(parseInt(req.query.page)<1){
            return res.render("index", {
                pagenow: parseInt("0"),
                name: doc
            })
        }else {
            return res.render("index", {
                pagenow: parseInt(req.query.page),
                name: doc
            })
        }
        console.log(req.query.page);

    })
}
function getName (req, res) {
    Employee.findEmpolyeeMany(function (doc) {
        console.log(doc);
        res.json(doc);
    })
}
function getInfo(req,res) {
    var form = new formidable();
    form.parse(req, function (err, fields) {
        var id = fields._id;
        Employee.findEmpolyee(id, function (doc) {
            /*res.render("index",{
             name:doc,
             })*/
            res.json(doc)
        })
    })
}
function insertEmployee(req, res,next) {
    var form=new formidable();
    form.parse(req,function (err, fields) {
        /*        console.log(fields);*/
        Employee.insertEmpolyee(fields);
        res.redirect("/")
    })
}
function updateEmployee(req, res) {
    var form=new formidable();
    form.parse(req,function (err, fields) {
        Employee.updateEmpolyee(fields);
        res.redirect("/");

    })

}
exports.insertEmpolyee=insertEmployee;
exports.updateEmployee=updateEmployee;
exports.getInfo=getInfo;
exports.firstPage=firstPage;
exports.getName=getName;