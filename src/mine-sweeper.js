const { NotImplementedError } = require('../extensions/index.js');

/**
 * In the popular Minesweeper game you have a board with some mines and those cells
 * that don't contain a mine have a number in it that indicates the total number of mines
 * in the neighboring cells. Starting off with some arrangement of mines
 * we want to create a Minesweeper game setup.
 *
 * @param {Array<Array>} matrix
 * @return {Array<Array>}
 *
 * @example
 * matrix = [
 *  [true, false, false],
 *  [false, true, false],
 *  [false, false, false]
 * ]
 *
 * The result should be following:
 * [
 *  [1, 2, 1],
 *  [2, 1, 1],
 *  [1, 1, 1]
 * ]
 */
function minesweeper(matrix) {
  //throw new NotImplementedError('Not implemented');
  const rows = matrix.length; 
  const cols = matrix[0].length; 

  const result = Array.from({ length: rows }, () => Array(cols).fill(0));

  function isValidCell(row, col) {
    return row >= 0 && row < rows && col >= 0 && col < cols;
  }

  const offsets = [
    [-1, -1], [-1, 0], [-1, 1],
    [0, -1],           [0, 1],
    [1, -1], [1, 0], [1, 1]
  ];

  for (let row = 0; row < rows; row++) {
    for (let col = 0; col < cols; col++) {
   
      if (matrix[row][col]) {
        for (let i = 0; i < offsets.length; i++) {
          const newRow = row + offsets[i][0];
          const newCol = col + offsets[i][1];
          if (isValidCell(newRow, newCol)) {
            result[newRow][newCol]++;
          }
        }
      }
    }
  }

  return result;
}

module.exports = {
  minesweeper
};
