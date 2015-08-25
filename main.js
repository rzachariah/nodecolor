var express = require('express');
var util = require('util');
var randomColor = require('randomColor');

var app = express();
var color = randomColor();

app.get('/', function(req, res){
    var template = '<html><body bgcolor="%s"></body></html>';
    var content = util.format(template, color);
    res.send(content);
});

app.listen(3000, function(){
    console.log('server started on localhost:3000');
});