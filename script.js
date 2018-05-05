var side = 500 / 30;
var m = 30;
var n = 30;
var matrix = [];
var grassArr = [];
var xotakerArr = [];
var mardArr = [];
var xotGzox = 55;
var gishatichner = 35;
var mardaqanak = 5;
var gishatichArr = [];
var edinarogArr = [];
var edinarogner = 1;
function setup() {
  frameRate(5);
  createCanvas(500, 500);
  background('#acacac');
  for (var y = 0; y < m; y++) {
    matrix[y] = [];
    for (var x = 0; x < n; x++) {
      matrix[y][x] = Math.round(random(1));

    }
  }
  while (xotGzox > 0) {
    var x = Math.round(random(n - 1));
    var y = Math.round(random(m - 1));
    if (matrix[y][x] == 0) {
      matrix[y][x] = 2;
      xotGzox--;
    }
  }
  while (gishatichner > 0) {
    var x = Math.round(random(n - 1));
    var y = Math.round(random(m - 1));
    if (matrix[y][x] == 0 || matrix[y][x] == 1) {
      matrix[y][x] = 3;
      gishatichner--;
    }
  }
    while (mardaqanak > 0) {
      var x = Math.round(random(n - 1));
      var y = Math.round(random(m - 1));
      if (matrix[y][x] == 0) {
        matrix[y][x] = 4;
        mardaqanak--;
      }
    }
    while (edinarogner > 0) {
      var x = Math.round(random(n - 1));
      var y = Math.round(random(m - 1));
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
          var edin = new edinarog(x, y, 5);
          edinarogArr.push(edin);
        }
      }
    }

  }

  function draw() {
    for (var y = 0; y < matrix.length; y++) {
      for (var x = 0; x < matrix[0].length; x++) {
        if (matrix[y][x] == 1) {
          fill("green");
          rect(x * side, y * side, side, side);
        }

        else if (matrix[y][x] == 2) {
          fill("yellow");
          rect(x * side, y * side, side, side);
        }
        else if (matrix[y][x] == 3) {
          fill("red");
          rect(x * side, y * side, side, side);
        }
        else if (matrix[y][x] == 0) {
          fill('#acacac');
          rect(x * side, y * side, side, side);
        }
        else if (matrix[y][x] == 4) {
          fill('#483D8B');
          rect(x * side, y * side, side, side);
        }
        else if (matrix[y][x] == 5) {
          fill("black");
          rect(x * side, y * side, side, side);
        }
      }



    }
    for (var i in grassArr) {
      grassArr[i].mul();
    }
    for (var i in xotakerArr) {
      xotakerArr[i].eat();
    }
    for (var i in gishatichArr) {
      gishatichArr[i].eat();
    }
    for(var i in mardArr) {
      mardArr[i].eat();
    if(grassArr.length == 0 && xotakerArr.length == 0 && gishatichArr.length == 0){
      mardArr[i].killdim();
    }
  }
  for(var i in edinarogArr)
    if(grassArr.length == 0 && xotakerArr.length == 0 && gishatichArr.length == 0 && mardArr.length <= 6){
      edinarogArr[i].mul();
    }
  }

