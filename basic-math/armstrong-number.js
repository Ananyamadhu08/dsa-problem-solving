// Create a function to determine if a given number is an armstrong number. The function will return true if it's an armstrong number or false otherwise.

function isArmstrongNumber(n) {
  let num = n;
  let count = 0;

  while (num > 0) {
    num = Math.floor(num / 10);
    count++;
  }

  num = n;
  let sum = 0;

  while (num > 0) {
    let lastDigit = Math.floor(num % 10);
    sum += Math.pow(lastDigit, count);
    num = Math.floor(num / 10);
  }

  return sum === n;
}

let result = isArmstrongNumber(153);

console.log(result);
