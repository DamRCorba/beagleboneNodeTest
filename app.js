var express = require("express");

var app = express(); 

var b = require('bonescript');
var led = "USR3";
var state = 0;

app.set("view engine", "jade");

app.get("/",function(req,res){
	res.render("botoncito");
	});

app.post("/encender",function(req,res){
	b.pinMode(led, 'out');
	b.digitalWrite(led, 1);
	res.render("encender");	
});

app.post("/apagar",function(req,res){
	b.pinMode(led,'out');
	b.digitalWrite(led,0);
	res.render("apagar");
});
	



app.listen(8989); //tambien puede darse un host y callback

