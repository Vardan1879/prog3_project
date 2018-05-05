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