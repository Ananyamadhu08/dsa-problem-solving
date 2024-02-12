// Given a number 'n' create a function to find out and return the number of digits present in that number.

function countDigits(n) {
  let num = n;
  let count = 0;

  while (num !== 0) {
    num = Math.floor(num / 10);
    count++;
  }

  return count;
}

let result = countDigits(12345);

console.log(result);
