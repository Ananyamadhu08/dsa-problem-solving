// Given a number 'n' create a function to find out and return the number of digits present in that number.

function countDigits(n) {
  let count = Math.floor(Math.log10(n) + 1);
  return count;
}

let result = countDigits(12345);

console.log(result);
