var express = require("express");
var app = express();

app.use(express.static("public"));

app.get("/", function(req, res){
   res.redirect("public/index.html");
});

app.listen(3000, function(){
   console.log("Example is running on port 3000");
});
var Grass = require("./classes/class.grass.js"); 
var GrassEater = require("./classes/class.grassEater.js");
var Gishatich  = require("./classes/class.gishatich.js");
var Mard = require("./classes/class.mard.js");
var Edinarog = require("./classes/class.edinarog.js");