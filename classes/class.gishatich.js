var LivingCreature = require('./class.cnox.js')

module.exports = class Gishatich extends LivingCreature {
  constructor(x, y, index) {
    super(x, y, index);
    this.energy = 5;
    this.age = 0;
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

    var emptyCells = this.chooseCell(1);
    var index = Math.floor(Math.random() * emptyCells.length);
    var newCell = emptyCells[index];

    if (newCell) {
      this.age++;
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
    var index = Math.floor(Math.random() * eatCells.length);
    var newCell = eatCells[index];
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
      if (weather != 'dzmer') {
        this.move();
        this.energy--;
      }
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
        break;
      }
    }
  }
  mul() {
    var emptyCells = this.chooseCell(0);

    var index = Math.floor(Math.random() * emptyCells.length);
    var newCell = emptyCells[index];
    if (newCell) {
      var x = newCell[0];
      var y = newCell[1];

      var gishatich = new Gishatich(x, y, this.index);
      gishatichArr.push(gishatich);
      matrix[y][x] = 3;

    }
  }
}