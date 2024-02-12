// Create a function to determine if a given number is a palindrome or not. The function will return true if it's a palindrome or false otherwise.

function checkPalindrome(n) {
  let num = n;
  let reversedNum = 0;

  while (num > 0) {
    let lastDigit = Math.floor(num % 10);
    reversedNum = reversedNum * 10 + lastDigit;
    num = Math.floor(num / 10);
  }

  return reversedNum === n;
}

let result = checkPalindrome(12321);

console.log(result);
