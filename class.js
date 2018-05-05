class Grass {
  constructor(x, y, index) {
    this.x = x;
    this.y = y;
    this.index = index;
    this.multiply = 0;
    this.directions = [
      [this.x - 1, this.y - 1],
      [this.x, this.y - 1],
      [this.x + 1, this.y - 1],
      [this.x - 1, this.y],
      [this.x + 1, this.y],
      [this.x - 1, this.y + 1],
      [this.x, this.y + 1],
      [this.x + 1, this.y + 1]
    ];
  }
  chooseCell(character) {
    var found = [];
    for (var i in this.directions) {
      var x = this.directions[i][0];
      var y = this.directions[i][1];
      if (x >= 0 && x < matrix[0].length && y >= 0 && y < matrix.length) {
        if (matrix[y][x] == character) {
          found.push(this.directions[i]);
        }
      }

    }
    return found;
  }
  mul() {
    this.multiply++;
    var emptyCells = this.chooseCell(0);
    var newCell = random(emptyCells);
    if (this.multiply >= 3 && newCell) {
      var newX = newCell[0];
      var newY = newCell[1];
      matrix[newY][newX] = 1;

      var newGrass = new Grass(newX, newY, this.index);
      grassArr.push(newGrass);
      this.multiply = 0;
    }
  }
}

class GrassEater {
  constructor(x, y, index) {
    this.x = x;
    this.y = y;
    this.energy = 5;
    this.index = index;
    this.eatCount = 0;
  }
  getNewCoordinates() {
    this.directions = [
      [this.x - 1, this.y - 1],
      [this.x, this.y - 1],
      [this.x + 1, this.y - 1],
      [this.x - 1, this.y],
      [this.x + 1, this.y],
      [this.x - 1, this.y + 1],
      [this.x, this.y + 1],
      [this.x + 1, this.y + 1]
    ];
  }


  chooseCell(character) {
    this.getNewCoordinates();
    var found = [];
    for (var i in this.directions) {
      var x = this.directions[i][0];
      var y = this.directions[i][1];
      if (x >= 0 && x < matrix[0].length && y >= 0 && y < matrix.length) {
        if (matrix[y][x] == character) {
          found.push(this.directions[i]);
        }
      }

    }
    return found;
  }
  move() {
    var emptyCells = this.chooseCell(0);
    var newCell = random(emptyCells);
    if (newCell) {
      var x = newCell[0];
      var y = newCell[1];
      matrix[this.y][this.x] = 0;
      this.x = x;
      this.y = y;
      matrix[y][x] = this.index;
    }

  }


  eat() {
    var xoter = this.chooseCell(1);
    var taracq = random(xoter);
    if (taracq) {

      var x = taracq[0];
      var y = taracq[1];

      matrix[this.y][this.x] = 0;

      matrix[y][x] = 2;
      this.x = x;
      this.y = y;
      this.energy++;

      for (var i in grassArr) {
        if (grassArr[i].x == x && grassArr[i].y == y) {
          grassArr.splice(i, 1);
          break;
        }
      }
      if (this.energy >= 10) {
        this.mul();
        this.energy = 5;
      }
    }
    else {
      this.move();
      this.energy--;
      if (this.energy <= 0) {
        this.die();
      }

    }
  }
  mul() {
    var emptyCells = this.chooseCell(0);

    var newCell = random(emptyCells);
    if (newCell) {
      var newX = newCell[0];
      var newY = newCell[1];

      var tazaXotaker = new GrassEater(newX, newY, this.index);
      xotakerArr.push(tazaXotaker);
      matrix[newY][newX] = 2;
    }
  }
  die() {
    matrix[this.y][this.x] = 0;
    for (var i in xotakerArr) {
      if (this.x == xotakerArr[i].x && this.y == xotakerArr[i].y) {
        xotakerArr.splice(i, 1);
        break;
      }
    }
  }

}
class Gishatich {
  constructor(x, y, index) {
    this.index = index;
    this.x = x;
    this.y = y;
    this.energy = 5;
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
  chooseCell(character) {
    this.getNewCoordinates();
    var found = [];
    for (var i in this.directions) {
      var x = this.directions[i][0];
      var y = this.directions[i][1];
      if (x >= 0 && x < matrix[0].length && y >= 0 && y < matrix.length) {
        if (matrix[y][x] == character) {
          found.push(this.directions[i]);
        }
      }

    }
    return found;
  }
  move() {

    var emptyCells = this.chooseCell(1);

    var newCell = random(emptyCells);
    if (newCell) {
      var x = newCell[0];
      var y = newCell[1];
      for (var i in grassArr) {
        if (grassArr[i].x == x && grassArr[i].y == y) {
          grassArr.splice(i, 1);
          break;
        }
      }
      matrix[this.y][this.x] = 0;
      this.x = x;
      this.y = y;
      matrix[y][x] = 3;


    }
  }
  eat() {
    var eatCells = this.chooseCell(2);
    var newCell = random(eatCells);
    if (newCell) {
      var x = newCell[0];
      var y = newCell[1];

      matrix[this.y][this.x] = 0;
      this.x = x;
      this.y = y;
      matrix[y][x] = 3;

      for (var i in xotakerArr) {
        if (xotakerArr[i].x == x && xotakerArr[i].y == y) {
          xotakerArr.splice(i, 1);
        }
      }
      this.energy++;
      if (this.energy >= 15) {
        this.mul();
        this.energy = 5;
      }

    }
    else {
      this.move();
      this.energy--;
      if (this.energy <= 0) {
        this.die();
        this.energy = 5;
      }
    }
  }
  die() {
    matrix[this.y][this.x] = 0;
    for (var i in gishatichArr) {
      if (this.x == gishatichArr[i].x && this.y == gishatichArr[i].y) {
        gishatichArr.splice(i, 1);
      }
    }
  }
  mul() {
    var emptyCells = this.chooseCell(0);

    var newCell = random(emptyCells);
    if (newCell) {
      var x = newCell[0];
      var y = newCell[1];

      var gishatich = new Gishatich(x, y, this.index);
      gishatichArr.push(gishatich);
      matrix[y][x] = 3;

    }
  }
}
class Mard {
  constructor(x, y, index) {
    this.index = index;
    this.x = x;
    this.y = y;
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
  chooseCell(character) {
    this.getNewCoordinates();
    var found = [];
    for (var i in this.directions) {
      var x = this.directions[i][0];
      var y = this.directions[i][1];
      if (x >= 0 && x < matrix[0].length && y >= 0 && y < matrix.length) {
        if (matrix[y][x] == character) {
          found.push(this.directions[i]);
        }
      }

    }
    return found;
  }
  move() {

    var emptyCells = this.chooseCell(0);
    var newCell = random(emptyCells);

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
    var newCell = random(eatCells);
    var newCell1 = random(eatCells1);
    var newCell2 = random(eatCells2);
    if (newCell) {

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
        var mardCord = random(eatCells);
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
        var mardCord = random(eatCells1);
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
        var mardCord = random(eatCells2);
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
      this.move();
      // this.energy--;
    //   if(this.energy <= 0){
    //     this.die();
    //   }
    // }
  }
}
  mul() {
    var emptyCells = this.chooseCell(0);

    var newCell = random(emptyCells);
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
    var kill = random(mardik);
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
      }
    }
  }
}
class edinarog{
  constructor(x, y, index) {
    this.index = index;
    this.x = x;
    this.y = y;
    this.energy = 5;
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
  chooseCell(character) {
    this.getNewCoordinates();
    var found = [];
    for (var i in this.directions) {
      var x = this.directions[i][0];
      var y = this.directions[i][1];
      if (x >= 0 && x < matrix[0].length && y >= 0 && y < matrix.length) {
        if (matrix[y][x] == character) {
          found.push(this.directions[i]);
        }
      }

    }
    return found;
  }
  die() {
    matrix[this.y][this.x] = 0;
    for (var i in edinarogArr) {
      if (this.x == edinarogArr[i].x && this.y == edinarogArr[i].y) {
        edinarogArr.splice(i, 1);
      }
    }
  }
  move() {

    var emptyCells = this.chooseCell(0);
    var newCell = random(emptyCells);

    if (newCell) {
      var x = newCell[0];
      var y = newCell[1];
      matrix[this.y][this.x] = 0;
      this.x = x;
      this.y = y;
      matrix[y][x] = 5;
    }
  }
  mul() {
    var emptyCells = this.chooseCell(0);

    var newCell = random(emptyCells);
    if (newCell) {
      var x = newCell[0];
      var y = newCell[1];
      var newTiv = Math.round(random(2));
      if(newTiv==0){
        var edo = new Grass(x, y, this.index);
        grassArr.push(edo);
        matrix[y][x] = 1;
      } 
      else if(newTiv==1){
        var exo = new GrassEater(x, y, this.index);
        xotakerArr.push(exo);
        matrix[y][x] = 2;
      }
      else if(newTiv==2){
        var ego = new Gishatich(x, y, this.index);
        gishatichArr.push(ego);
        matrix[y][x] = 3;
      }
    }
  }
}