module.exports = class edinarog{
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