var side = 500 / 30;
var col = '#ffffff';

function setup() {
  createCanvas(500, 500);
  background('#acacac');
  socket = io.connect('http://localhost:3000');
  socket.on("matrix", gcel);
  socket.on("exanak", function (weather) {
      if(weather == 'garun'){
        col = '#ADFF2F';
      }
      else if(weather == 'amar'){
        col = '#FFD700';
      }
      else if(weather == 'ashun'){
        col = '#EEE8AA';
      }
      else if(weather == 'dzmer'){
        col = '#B0E0E6';
      }
  });


}



function gcel(matrix) {
  for (var y = 0; y < matrix.length; y++) {
    for (var x = 0; x < matrix[0].length; x++) {
      if (matrix[y][x] == 1) {
        fill("green");
        rect(x * side, y * side, side, side);
      }

      else if (matrix[y][x] == 2) {
        fill("#0000FF");
        rect(x * side, y * side, side, side);
      }
      else if (matrix[y][x] == 3) {
        fill("red");
        rect(x * side, y * side, side, side);
      }
      else if (matrix[y][x] == 0) {
        fill(col);
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
}

