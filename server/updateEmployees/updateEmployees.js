let mongodb = require("mongodb");
let mantuIT = mongodb.MongoClient;
let updateEmployee = require("express").Router().put("/",(req,res)=>{
    let basedOnProperty = {"EmpId":req.body.EmpId}; 
    let newProperties = {$set:{"Name":req.body.Name,
                                "Age":req.body.Age,
                                "Salary":req.body.Salary,
                                "Department":req.body.Department,
                                "DOB":req.body.DOB,
                                "Gender":req.body.Gender,
                                "languages":req.body.languages}};
                                mantuIT.connect("mongodb://localhost:27017/miniproject",(err,db)=>{
        if(err) throw err;
        else{
            db.collection("employees").updateOne(basedOnProperty,newProperties,(err,result)=>{
                if(err) throw err;
                else{
                    res.send({"update":"Update Successfully...!!!!"})
                }
            });
        }
    });
});
module.exports = updateEmployee;