
function largestProduct(a) {
  let largest = a[0][0] * a[0][1];
  let row1 = 0;
  let col1 = 0;
  let row2 = 0;
  let col2 = 1;

  function updatelargest(r1, c1, r2, c2) {
    let value = getCell(a, r1, c1);
    let other = getCell(a, r2, c2);
    if (value * other > largest) {
      largest = value * other;
      row1 = r1;
      col1 = c1;
      row2 = r2
      col2 = c2
    }
  }

  // returns the value of the element in a 2d array
  // for the given row and column. or, returns a default values if the row and column are out of bounds a zero is returned.
  function getCell(a, row, col) {
    if (row < 0 || col < 0) {
      return 0;
    }
    if (row >= a.length) {
      return 0;
    }
    if (col >= a[row].length) {
      return 0
    }
    return aa[row][col]
  }

  for (let row = 0; row < a.length; row++) {
    for (let col = 0; col < a[row].length; col++) {
      updatelargest(row, col, row, col - 1); //left
      updatelargest(row, col, row, col + 1); //right
      updatelargest(row, col, row - 1, col); //top
      updatelargest(row, col, row + 1, col); //bottom
    }

  }
  console.log(a[row1][col1], '*', a[row2][col2], '=', largest)
  return largest
}

let aa = [
  [32, 45, 67, 99],
  [93, 34, 88, 12],
  [32, 76, 22, 74],
  [77, 33, 88, 99],
]
console.log(largestProduct(aa))