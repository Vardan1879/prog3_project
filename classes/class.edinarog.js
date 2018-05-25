var LivingCreature = require('./class.cnox.js')

module.exports = class Edinarog extends LivingCreature {
  constructor(x, y, index) {
    super(x, y, index);
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
  chooseCell(ch) {
    this.getNewCoordinates();
    return super.chooseCell(ch);
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


    var index = Math.floor(Math.random() * emptyCells.length);
    var newCell = emptyCells[index];

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

    var index = Math.floor(Math.random() * emptyCells.length);
    var newCell = emptyCells[index];
    if (newCell) {
      var x = newCell[0];
      var y = newCell[1];
      var newTiv = Math.floor(Math.random() * 3);
      if (newTiv == 0) {
        var edo = new Grass(x, y, this.index);
        grassArr.push(edo);
        matrix[y][x] = 1;
      }
      else if (newTiv == 1) {
        var exo = new GrassEater(x, y, this.index);
        xotakerArr.push(exo);
        matrix[y][x] = 2;
      }
      else if (newTiv == 2) {
        var ego = new Gishatich(x, y, this.index);
        gishatichArr.push(ego);
        matrix[y][x] = 3;
      }
    }
  }
}
