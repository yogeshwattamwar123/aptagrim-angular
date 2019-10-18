var express = require("express");
var mongoclient = require("mongodb").MongoClient;

var url = "mongodb+srv://yogeshwattamwar1234:wattamwar_123@aptagrimdb-1nuqk.mongodb.net/test?retryWrites=true&w=majority";

var app = express();

app.get("/api/getjobsdatas", function(req,res){
    mongoclient.connect(url,function(err,db){
        if(!err){
            var dbo = db.db("aptagrimdb");
            dbo.collection("aptagrimdb").find({}).toArray(function(err,documents){
                if(!err){
                    res.send(documents);
                }
            })
        }
    })
})

app.listen(8080);
console.log("server started");
