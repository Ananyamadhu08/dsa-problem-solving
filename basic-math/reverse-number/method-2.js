// Create a function to reverse a number 'n' and print the reversed number. If a number has trailing zeros, then the reverse will not include them.

function reverseNumber(n) {
  let num = Math.floor(n);
  let convertedNum = num.toString();

  while (convertedNum.endsWith("0")) {
    convertedNum = convertedNum.slice(0, -1);
  }

  let reversedString = convertedNum.split("").reverse().join("");
  let reversedNum = parseInt(reversedString);

  return reversedNum;
}

let result = reverseNumber(12345);

console.log(result);
