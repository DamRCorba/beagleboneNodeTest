var express = require("express");

var app = express();

var b = require('bonescript');
var led = "USR3";
var state = 0;
var Intervalo;

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

app.post("/blink",function(req,res){
	Intervalo = setInterval(blink, 500);
	res.render("parpadear");
});

app.post("/stop",function(req,res){
	 clearInterval(Intervalo);
	 res.redirect("/");
});

app.post("/volver",function (req,res) {
	 res.redirect("/");
});

function  blink(){
	if(!state)
		{
			b.pinMode(led,'out');
			b.digitalWrite(led,1);
			console.log("prende");
			state = 1;
		}
		else{
			b.pinMode(led,'out');
			b.digitalWrite(led,0);
			console.log("apaga");
			state = 0;
		}
}

app.listen(8989); //tambien puede darse un host y callback
