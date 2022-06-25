const minefield = [
  ['*', '*', '', ''],
  ['*', '*', '', ''],
  ['', '', '*', ''],
  ['', '', '', ''],
]
let resultArray = [[], []];
// the output should print the following
// **20
// **30
// 23*1
// 0111

function mineSweeper(minefield) {
  function getCell(row, col) {
    if (row < 0 || col < 0) return 0
    if (row >= minefield.length) return 0
    if (col >= minefield[row].length) return 0
    if (minefield[row][col] === '*') return 1
    return 0
  }

  // The nested for loop helps us access each element of the array.
  for (let row = 0; row < minefield.length; row++) {
    let line = ""
    for (let col = 0; col < minefield[row].length; col++) {
      if (getCell(row, col) === 1) {
        line += "*"
      } else {
        let bombs = 0
        //Top left, top, top-right
        bombs += getCell(row - 1, col + 1)
        bombs += getCell(row - 1, col)
        bombs += getCell(row - 1, col - 1)

        bombs += getCell(row, col - 1)// left
        bombs += getCell(row, col + 1)//right

        //Bottom left, bot, bot-right
        bombs += getCell(row + 1, col - 1)
        bombs += getCell(row + 1, col)
        bombs += getCell(row + 1, col + 1)

        line += bombs
      }

    }
    console.log(line)
  }
}

mineSweeper(minefield)

// we access each array elmt
// check if it has neighbors to its left, right, bottom, top, top right, top left, bottom left, or bottom right.
// check if the values of any of these neighbors is a * and if it is, increment the count. and update the corresponding position in the new array that holds the results.
// console.log the new(results) array.