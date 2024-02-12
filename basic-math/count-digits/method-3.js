// Given a number 'n' create a function to find out and return the number of digits present in that number.

function countDigits(n) {
  let num = Math.floor(n);
  let convertedNum = num.toString();

  return convertedNum.length;
}

let result = countDigits(12345);

console.log(result);
