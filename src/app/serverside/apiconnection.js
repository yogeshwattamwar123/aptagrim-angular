var express = require("express");
var mongoclient = require("mongodb").MongoClient;

var url = "mongodb://127.0.0.1:27017";

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