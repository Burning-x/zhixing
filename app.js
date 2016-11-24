/**
 * Created by 54574_000 on 2016/11/23.
 */
var express=require("express");
var app=express();
var formidable=require("formidable");
var router=require("./model/router")
app.use(express.static("./public"));
app.set("view engine","ejs");

//app.post("/getname",router.getNamefunction)
app.post("/getinfo",router.getInfo);
app.post("/insert",router.insertEmpolyee)
app.post("/update",router.updateEmployee);
app.get("/",router.firstPage);
app.listen(3000);