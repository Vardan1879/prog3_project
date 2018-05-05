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