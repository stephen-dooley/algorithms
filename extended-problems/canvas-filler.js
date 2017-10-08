var WIDTH = 10;
var HEIGHT = 14;
class Canvas {
  static initSampleShape(canvas) {
    var border = [[4, 1], [4,2], [5, 0], [5, 3], [6, 0], [6, 3],
    [7, 0], [7, 3], [8, 1], [8, 4], [9, 2], [9, 3]];

    border.forEach(function(item) {
      canvas.pixels[item[0]][item[1]] = '0';
    });
  }

  constructor(width, height) {
    this.width = width;
    this.height = height;

    this.pixels = new Array(width);
    for(var i = 0; i < width; i++) {
      this.pixels[i] = new Array(height);
      for(var j = 0; j < height; j++) {
        this.pixels[i][j] = ' ';
      }
    }
  }

  print() {
    var result = '';
    for(var i = 0; i < this.height; i++) {
      result += '|';
      for(var j = 0; j < this.width; j++) {
        result += this.pixels[j][i] + '|';
      }
      result += '\n';
    }
    console.log(result);
  }

  isInBounds(x, y) {
    return x >= 0 && x < this.width && y >= 0 && y < this.height;
  }

  isEmptyCell(x, y) {
    return this.isInBounds(x, y) && (this.pixels[x][y] !== '0' || this.pixels[x][y] !== '1');
  }

  updateNeighbours(xCurrent, yCurrent) {
    var newNeighbours = [];

    newNeighbours.push([xCurrent, yCurrent+1]);
    newNeighbours.push([xCurrent, yCurrent-1]);
    newNeighbours.push([xCurrent-1, yCurrent]);
    newNeighbours.push([xCurrent+1, yCurrent]);

    return newNeighbours;
  }

  fill(x,y) {
    var neighbours = [];

    if (!this.isEmptyCell(x,y)) {
      return;
    }

    this.pixels[x][y] = '1';

    neighbours = this.updateNeighbours(x, y);

    for (var i=0; i<neighbours.length; i++) {
      var xCoord = neighbours[i][0];
      var yCoord = neighbours[i][1];

      this.fill(xCoord, yCoord);
    }
  }
}


const canvas = new Canvas(WIDTH,HEIGHT);
Canvas.initSampleShape(canvas);
canvas.fill(6,1);
canvas.print();

/*
| | | | | |0|0|0| | |
| | | | |0| | | |0| |
| | | | |0| | |1| |0|
| | | | | |0|0|0| |0|
| | | | | | | | |0| |
| | | | | | | | | | |
| | | | | | | | | | |
| | | | | | | | | | |
| | | | | | | | | | |
| | | | | | | | | | |
| | | | | | | | | | |
| | | | | | | | | | |
| | | | | | | | | | |
| | | | | | | | | | |
*/
