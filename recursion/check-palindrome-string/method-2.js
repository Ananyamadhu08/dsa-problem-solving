// Create a function to check if a given string is a palindrome.

function checkPalindrome(str, start = 0, end = str.length - 1) {
  if (start >= end) return true;

  if (str[start] !== str[end]) return false;

  return checkPalindrome(str, start + 1, end - 1);
}

let palindromeString = "radar";

let result = checkPalindrome(palindromeString);

console.log(result);
