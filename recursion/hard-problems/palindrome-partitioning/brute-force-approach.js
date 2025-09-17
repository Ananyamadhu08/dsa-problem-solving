// Given a string s partition string s such that every substring of partition is palindrome. Return all possible palindrome partition of string s.

// Check if a single string is a palindrome
function isPalindrome(str) {
  let left = 0;
  let right = str.length - 1;

  while (left < right) {
    if (str[left] !== str[right]) {
      return false;
    }

    left++;
    right--;
  }

  return true;
}

// Check if an entire partition contains only palindromic substrings
function isValidPalindromePartition(partition) {
  for (const substring of partition) {
    if (!isPalindrome(substring)) return false;
  }

  return true;
}

function palindromePartitioning(str) {
  const allPartitions = []; // Stores all valid palindrome partitions
  const currentPartition = []; // Tracks the current partition being built

  // Recursively try placing a cut after index `startIndex`
  function generatePartitions(startIndex) {
    if (startIndex === str.length) {
      // Reached the end; check if all substrings are palindromes
      if (isValidPalindromePartition(currentPartition)) {
        allPartitions.push([...currentPartition]);
      }

      return;
    }

    // Try every possible next cut: str[startIndex..endIndex]
    for (let endIndex = startIndex; endIndex < str.length; endIndex++) {
      const substring = str.slice(startIndex, endIndex + 1);

      currentPartition.push(substring);

      generatePartitions(endIndex + 1); // Recurse for the remainder

      currentPartition.pop(); // Backtrack
    }
  }

  generatePartitions(0); // Start recursion from index 0

  return allPartitions;
}

const str = "aabaa";

const result = palindromePartitioning(str);

console.log(result);

// Time complexity: O(2^(n-1) * n^2) in practice — there are 2^(n-1) cut patterns. Each completed partition may require checking all pieces for palindrome (each check up to O(n)).
// Space complexity: O(n) for recursion depth (excluding the output which can be exponential).
