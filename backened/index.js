const express = require("express");
const app = express();
const cors=require("cors");
var bodyParser = require('body-parser')



app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
const corsOptions ={
    origin:'*', 
    credentials:true,            //access-control-allow-credentials:true
    optionSuccessStatus:200,
 }
 app.use(cors(corsOptions)) // Use this after the variable declaration


app.post("/portfoliosite", function(req, res){
    console.log(req.body)
    res.send("submitted")
})

app.listen(8080, function(req, res)
{
    console.log("Connected to 8080 port")
})