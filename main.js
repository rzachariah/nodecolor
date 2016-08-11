var express = require('express');
var util = require('util');
var randomColor = require('randomcolor');
var fs = require('fs');

var app = express();
var color = randomColor();

const defaultPort = 3000;
const port = process.env.PORT || defaultPort;

app.get('/', function(req, res){
    fs.readFile("index.html", "utf8", function(err,data){
        var content = null;
        if(err) {
            console.log(err);
            content = err;
        }
        else {
            //console.log(data);
            content = util.format(data, color);
        }
        res.send(content);
    })
});

//1
app.listen(port, function(){
    console.log(`server started on localhost:${port}`);
});