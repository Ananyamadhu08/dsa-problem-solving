// Create a function to reverse a number 'n' and print the reversed number. If a number has trailing zeros, then the reverse will not include them.

function reverseNumber(n) {
  let num = n;
  let reversedNum = 0;

  while (num !== 0) {
    let lastDigit = Math.floor(num % 10);
    reversedNum = reversedNum * 10 + lastDigit;
    num = Math.floor(num / 10);
  }

  return reversedNum;
}

let result = reverseNumber(12345);

console.log(result);
