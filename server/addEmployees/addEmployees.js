let mongodb= require("mongodb");
let mantuIT= mongodb.MongoClient;
let addEmployee= require("express").Router().post("/",(req,res)=>{
    let newRecord ={
        "EmpId":req.body.EmpId,
        "Name":req.body.Name,
        "Age":req.body.Age,
        "Salary":req.body.Salary,
        "Department":req.body.Department,
        "DOB":req.body.DOB,
        "Gender":req.body.Gender,
        "languages":req.body.languages
    };
    mantuIT.connect("mongodb://localhost:27017/miniproject",(err,db)=>{
        if(err) throw err;
        else{
            db.collection("employees").insertOne(newRecord,(err,result)=>{
                if (err) throw err;
                else{
                    res.send({"insert":"Data Inserted Successfully...!"});
                }
            });
        }
    });

});
module.exports= addEmployee;
