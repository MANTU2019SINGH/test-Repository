let mongodb= require("mongodb");
//mongodb follows client server architecture 
let mantuIT = mongodb.MongoClient;
// we need to create one custom module
let getAllEmployees = require("express").Router().get("/",(req,res)=>{
    mantuIT.connect("mongodb://localhost:27017/miniproject",(err,db)=>{
        if(err) throw err;
        else{
            db.collection("employees").find().toArray((err,array)=>{
                if(err) throw err;
                else{
                    res.send(array);
                }
            })
        }
    })

});
module.exports= getAllEmployees;