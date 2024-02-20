// Create a function to check if a given string is a palindrome.

function checkPalindrome(str, i = 0) {
  if (i >= Math.floor(str.length / 2)) return true;

  end = str.length - i - 1;

  if (str[i] !== str[end]) return false;

  return checkPalindrome(str, i + 1);
}

let palindromeString = "radar";

let result = checkPalindrome(palindromeString);

console.log(result);
