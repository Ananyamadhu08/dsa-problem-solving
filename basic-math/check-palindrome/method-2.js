// Create a function to determine if a given number is a palindrome or not. The function will return true if it's a palindrome or false otherwise.

function checkPalindrome(n) {
  let convertedNum = n.toString();
  let reversedConvertedNum = convertedNum.split("").reverse().join("");

  return convertedNum === reversedConvertedNum;
}

let result = checkPalindrome(12345);

console.log(result);
