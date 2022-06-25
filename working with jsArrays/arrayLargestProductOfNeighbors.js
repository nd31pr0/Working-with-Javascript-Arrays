
function largestProduct(a) {
  let largest = a[0][0] * a[0][1];
  for (let row = 0; row < a.length; row++) {
    for (let col = 0; col < a[row].length; col++) {
      let value = a[row][col];

      // Here we are performing a similar check to ensure that we never reference an index for a column that doesn't exist.
      if (col + 1 < a[row].length) {
        let right = a[row][col + 1];
        largest = Math.max(largest, value * right);
      }
      // In the following condition we are as well checking to ensure that we don't try to access an index out of the valid range of indices for the array.
      if (col - 1 >= 0) {
        let left = a[row][col - 1];
        largest = Math.max(largest, value * left);
      }

      // The following if loop just comes to ensure that we remain within safe confines, i.e we donot go out of the boundaries of our the rows in our array.
      if (row - 1 >= 0) {
        let top = a[row - 1][col];
        largest = Math.max(largest, value * top);
      }

      // Here we are testing to ensure that we never go out of the row array trying to access an index that doesn't exist.
      if (row + 1 < a.length) {
        let bot = a[row + 1][col];
        largest = Math.max(largest, value * bot)
      }



    }
  }
  return largest
}

let aa = [
  [32, 45, 67, 99],
  [93, 34, 88, 12],
  [32, 76, 22, 74],
  [77, 33, 88, 99],
]
console.log(largestProduct(aa))