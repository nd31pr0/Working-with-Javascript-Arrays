//The aim of this piece of code is to compare array items to find the largest difference between consecutive array items. The array contains weekly temperatures.
const ww = [70, 72, 68, 65, 74, 74, 73];

//Here we are defining a variable to hold the value of the maximum difference and we initialize it to the difference between the first two elements.
// Math.abs() function returns the absolute or positive difference between two inputed numbers.
let max_delta = Math.abs(ww[0] - ww[1]);
//Through the following loop, we will iterate through the array elements in pairs
for (let i = 0; i < ww.length - 1; i++) {
  let temp1 = ww[i];
  let temp2 = ww[i + 1];
  let delta = Math.abs(temp1 - temp2);
  console.log("comparing ", temp1, temp2, "delta: ", delta)
  if (delta > max_delta) {
    max_delta = delta;
  }
}
console.log('max delta:', max_delta);