var express = require('express');
var util = require('util');
var randomColor = require('randomColor');
var fs = require('fs');

var app = express();
var color = randomColor();

app.get('/', function(req, res){
    fs.readFile("index.html", "utf8", function(err,data){
        var content = null;
        if(err) {
            console.log(err);
            content = err;
        }
        else {
            console.log(data);
            content = util.format(data, color, process.argv[2]);
        }
        res.send(content);
    })
});

app.listen(3000, function(){
    console.log('server started on localhost:3000');
});