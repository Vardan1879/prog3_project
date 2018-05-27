var LivingCreature = require('./class.cnox.js')

module.exports = class Mard extends LivingCreature {
  constructor(x, y, index) {
    super(x,y,index);
    this.energy = 15;
  }
  getNewCoordinates() {
    this.directions = [
      [this.x - 2, this.y - 2],
      [this.x - 1, this.y - 2],
      [this.x, this.y - 2],
      [this.x + 1, this.y - 2],
      [this.x + 2, this.y - 2],

      [this.x - 2, this.y - 1],
      [this.x - 1, this.y - 1],
      [this.x, this.y - 1],
      [this.x + 1, this.y - 1],
      [this.x + 2, this.y - 1],

      [this.x - 2, this.y],
      [this.x - 1, this.y],
      [this.x + 1, this.y],
      [this.x + 2, this.y],

      [this.x - 2, this.y + 1],
      [this.x - 1, this.y + 1],
      [this.x, this.y + 1],
      [this.x + 1, this.y + 1],
      [this.x + 2, this.y + 1],

      [this.x - 2, this.y + 2],
      [this.x - 1, this.y + 2],
      [this.x, this.y + 2],
      [this.x + 1, this.y + 2],
      [this.x + 1, this.y + 2]
    ];
  }
  chooseCell(ch) {
    this.getNewCoordinates();
    return super.chooseCell(ch);
  }
  move() {

    var emptyCells = this.chooseCell(0);
    var index = Math.floor(Math.random()*emptyCells.length);
    var newCell = emptyCells[index];

    if (newCell) {
      var x = newCell[0];
      var y = newCell[1];
      matrix[this.y][this.x] = 0;
      this.x = x;
      this.y = y;
      matrix[y][x] = 4;
    }
  }
  eat() {
    var eatCells = this.chooseCell(1);
    var eatCells1 = this.chooseCell(2);
    var eatCells2 = this.chooseCell(3);
    var index = Math.floor(Math.random()*eatCells.length);
    var newCell = eatCells[index];
    var index = Math.floor(Math.random()*eatCells1.length);
    var newCell1 = eatCells1[index];
    var index = Math.floor(Math.random()*eatCells2.length);
    var newCell2 = eatCells2[index];
    if (newCell) {
      mardyKeravXot++;
      var x = newCell[0];
      var y = newCell[1];

      matrix[this.y][this.x] = 0;
      this.x = x;
      this.y = y;
      

      for (var i in grassArr) {
        if (grassArr[i].x == x && grassArr[i].y == y) {
          grassArr.splice(i, 1);
          break;
        }
      }
      for (var i in xotakerArr) {
        if (xotakerArr[i].x == x && xotakerArr[i].y == y) {
          xotakerArr.splice(i, 1);
          break;
        }
      }
      for (var i in gishatichArr) {
        if (gishatichArr[i].x == x && gishatichArr[i].y == y) {
          gishatichArr.splice(i, 1);
          break;
        }
      }
      matrix[y][x] = 4;
      this.energy++;
      if (this.energy >= 20) {
        var eatCells = this.chooseCell(4);
        var index = Math.floor(Math.random()*eatCells.length);
        var mardCord = eatCells[index];
        if (mardCord) {
          this.mul();
          this.energy = 5;
          for (var i in mardArr) {
           if(mardArr[i].x == mardCord[0] && mardArr[i].y == mardCord[1]){
              mardArr[i].energy = 5;
            }
          }
        }
      }
    }
    else if (newCell1) {
      mardyKeravXotaker++;
      var x = newCell1[0];
      var y = newCell1[1];

      matrix[this.y][this.x] = 0;
      this.x = x;
      this.y = y;
      matrix[y][x] = 4;

      for (var i in grassArr) {
        if (grassArr[i].x == x && grassArr[i].y == y) {
          grassArr.splice(i, 1);
          break;
        }
      }
      for (var i in xotakerArr) {
        if (xotakerArr[i].x == x && xotakerArr[i].y == y) {
          xotakerArr.splice(i, 1);
          break;
        }
      }
      for (var i in gishatichArr) {
        if (gishatichArr[i].x == x && gishatichArr[i].y == y) {
          gishatichArr.splice(i, 1);
          break;
        }
      }
      this.energy++;
      if (this.energy >= 20) {
        var eatCells1 = this.chooseCell(4);
        var index = Math.floor(Math.random()*eatCells1.length);
        var mardCord = eatCells1[index];
        if (mardCord) {
          this.mul();
          this.energy = 5;
          for (var i in mardArr) {
            if(mardArr[i].x == mardCord[0] && mardArr[i].y == mardCord[1]){
              mardArr[i].energy = 5;
            }
          }
        }
      }
    }
    else if (newCell2) {
      mardyKeravGishatich++;
      var x = newCell2[0];
      var y = newCell2[1];

      matrix[this.y][this.x] = 0;
      this.x = x;
      this.y = y;
      matrix[y][x] = 4;

      for (var i in grassArr) {
        if (grassArr[i].x == x && grassArr[i].y == y) {
          grassArr.splice(i, 1);
          break;
        }
      }
      for (var i in xotakerArr) {
        if (xotakerArr[i].x == x && xotakerArr[i].y == y) {
          xotakerArr.splice(i, 1);
          break;
        }
      }
      for (var i in gishatichArr) {
        if (gishatichArr[i].x == x && gishatichArr[i].y == y) {
          gishatichArr.splice(i, 1);
          break;
        }
      }
      this.energy++;
      if (this.energy >= 20) {
        var eatCells2 = this.chooseCell(4);
        var index = Math.floor(Math.random()*eatCells2.length);
        var mardCord = eatCells2[index];
        if (mardCord) {
          this.mul();
          this.energy = 5;
          for (var i in mardArr) {
            if(mardArr[i].x == mardCord[0] && mardArr[i].y == mardCord[1]){
              mardArr[i].energy = 5;
            }
          }
        }
      }
    }
    else {
      if(weather != "amar"){
        this.move();
      }
  }
}
  mul() {
    var emptyCells = this.chooseCell(0);

    var index = Math.floor(Math.random()*emptyCells.length);
    var newCell = emptyCells[index];
    if (newCell) {
      var x = newCell[0];
      var y = newCell[1];

      var marduk = new Mard(x, y, this.index);
      mardArr.push(marduk);
      matrix[y][x] = 4;
    }
  }
  killdim() {
    var mardik = this.chooseCell(4);
    var index = Math.floor(Math.random()*mardik.length);
    var kill = mardik[index];
    if(kill){
      this.energy--;
      if(this.energy <= 0){
         this.die();
      }
    }
  }

die() {
    matrix[this.y][this.x] = 0;
    for (var i in mardArr) {
      if (this.x == mardArr[i].x && this.y == mardArr[i].y) {
        mardArr.splice(i, 1);
        break;
      }
    }
  }
}