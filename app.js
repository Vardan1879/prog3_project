var express = require('express');
var app = express();
var server = require('http').Server(app);
var io = require('socket.io')(server);
app.set('port', process.env.PORT || 3000);
app.use(express.static("public"));

app.get("/", function (req, res) {
    res.redirect("public/index.html");
});

server.listen(app.get('port'));


var Grass = require("./classes/class.grass.js");
var GrassEater = require("./classes/class.grassEater.js");
var Gishatich = require("./classes/class.gishatich.js");
var Mard = require("./classes/class.mard.js");
var Edinarog = require("./classes/class.edinarog.js");
var fs = require('fs');

xotBazm = 0;
xotakerEat = 0;
mardyKeravXot = 0;
mardyKeravXotaker = 0;
mardyKeravGishatich = 0;
edinarogMul = 0;

matrix = [];
grassArr = [];
xotakerArr = [];
mardArr = [];
var xotGzox = 55;
var gishatichner = 35;
var mardaqanak = 5;
gishatichArr = [];
edinarogArr = [];
var edinarogner = 1;
var m = 30;
var n = 30;
count = 0;
weather = 'garun';

for (var y = 0; y < m; y++) {
    matrix[y] = [];
    for (var x = 0; x < n; x++) {
        matrix[y][x] = Math.floor(Math.random() * 2);

    }
}
while (xotGzox > 0) {
    var x = Math.floor(Math.random() * n);
    var y = Math.floor(Math.random() * m);
    if (matrix[y][x] == 0) {
        matrix[y][x] = 2;
        xotGzox--;
    }
}
while (gishatichner > 0) {
    var x = Math.floor(Math.random() * n);
    var y = Math.floor(Math.random() * m);
    if (matrix[y][x] == 0 || matrix[y][x] == 1) {
        matrix[y][x] = 3;
        gishatichner--;
    }
}
while (mardaqanak > 0) {
    var x = Math.floor(Math.random() * n);
    var y = Math.floor(Math.random() * m);
    if (matrix[y][x] == 0) {
        matrix[y][x] = 4;
        mardaqanak--;
    }
}
while (edinarogner > 0) {
    var x = Math.floor(Math.random() * n);
    var y = Math.floor(Math.random() * m);
    if (matrix[y][x] == 0) {
        matrix[y][x] = 5;
        edinarogner--;
    }
}
for (var y = 0; y < matrix.length; y++) {
    for (var x = 0; x < matrix[0].length; x++) {
        if (matrix[y][x] == 1) {
            var gr = new Grass(x, y, 1);
            grassArr.push(gr);
        }
        else if (matrix[y][x] == 2) {
            var xotaker = new GrassEater(x, y, 2);
            xotakerArr.push(xotaker);
        }
        else if (matrix[y][x] == 3) {
            var gishatich = new Gishatich(x, y, 3);
            gishatichArr.push(gishatich);
        }
        else if (matrix[y][x] == 4) {
            var mard = new Mard(x, y, 4);
            mardArr.push(mard);
        }
        else if (matrix[y][x] == 5) {
            var edin = new Edinarog(x, y, 5);
            edinarogArr.push(edin);
        }
    }
}



function func() {
    count++;

    if (count % 80 == 0) {
        weather = 'garun';
    }
    else if (count % 80 == 20) {
        weather = 'amar';
    }
    else if (count % 80 == 40) {
        weather = 'ashun';
    }
    else if (count % 80 == 60) {
        weather = 'dzmer';
    }


    if (weather != 'dzmer') {
        for (var i in grassArr) {
            grassArr[i].mul();
        }
        for (var i in xotakerArr) {
            xotakerArr[i].eat();
        }
    }
    for (var i in gishatichArr) {
        gishatichArr[i].eat();
    }
    for (var i in mardArr) {
        mardArr[i].eat();
        if (grassArr.length == 0 && xotakerArr.length == 0 && gishatichArr.length == 0) {
            mardArr[i].killdim();
        }
    }
    for (var i in edinarogArr) {
        if (grassArr.length == 0 && xotakerArr.length == 0 && gishatichArr.length == 0 && mardArr.length <= 6) {
            if (weather == "garun") {
                edinarogArr[i].mul();
            }
        }
    }

    io.sockets.emit("matrix", matrix);
    io.sockets.emit("exanak", weather);
} 
io.on('connection', function () { });
var takt = 0;
var obj = {
    'xotBazmanal': [],
    'xotakerUtel': [],
    'mardyKeravXotin': [],
    'mardyKeravXotakerin': [],
    'mardyKeravGishatichin': [],
    'edinarogBazm': [],
}
setInterval(function () {
    takt++;
    func();
    var imJSON = JSON.stringify(obj);
    if (takt % 2 == 0) {
        obj.xotBazmanal.push(xotBazm);
        fs.writeFile("obj.json", imJSON);
        console.log(obj);
    
        obj.xotakerUtel.push(xotakerEat);
        fs.writeFile("obj.json", imJSON);
        console.log(obj);
    
        obj.mardyKeravXotin.push(mardyKeravXot);
        fs.writeFile("obj.json", imJSON);
        console.log(obj);

        obj.mardyKeravXotakerin.push(mardyKeravXotaker);
        fs.writeFile("obj.json", imJSON);
        console.log(obj);

        obj.mardyKeravGishatichin.push(mardyKeravGishatich);
        fs.writeFile("obj.json",imJSON);
        console.log(obj);
    
        obj.edinarogBazm.push(edinarogMul);
        fs.writeFile("obj.json",imJSON);
        console.log(obj);
    }
},3000)