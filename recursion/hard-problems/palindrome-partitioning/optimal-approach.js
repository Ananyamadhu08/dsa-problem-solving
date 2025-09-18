// Given a string s partition string s such that every substring of partition is palindrome. Return all possible palindrome partition of string s.

// Check if substring str[left..right] is a palindrome (two-pointer, O(len))
function isPalindromeSubstring(str, left, right) {
  while (left < right) {
    if (str[left] !== str[right]) {
      return false;
    }

    left++;
    right--;
  }

  return true;
}

// Backtracking with early pruning — only extend with palindromic substrings
function palindromePartitioning(str) {
  const allPartitions = []; // Stores all valid palindrome partitions
  const currentPartition = []; // Tracks the current partition being built

  // Recursively build partitions starting at index `startIndex`
  function generatePartitions(startIndex) {
    if (startIndex === str.length) {
      // Reached the end; currentPartition is already valid (we prune early)
      allPartitions.push([...currentPartition]);
      return;
    }

    // Try every possible next cut: str[startIndex..endIndex]
    for (let endIndex = startIndex; endIndex < str.length; endIndex++) {
      // Prune early: only proceed if current piece is a palindrome
      if (isPalindromeSubstring(str, startIndex, endIndex)) {
        // Extract the substring from startIndex to endIndex (inclusive). Example: str = "aabaa", startIndex=0, endIndex=1 → substring = "aa"
        const substring = str.slice(startIndex, endIndex + 1);

        currentPartition.push(substring); // choose this substring as part of the partition

        generatePartitions(endIndex + 1); // recurse on the remaining suffix of the string

        currentPartition.pop(); // backtrack: undo the choice and try the next possibility
      }
    }
  }

  generatePartitions(0); // Start recursion from index 0

  return allPartitions;
}

const str = "aabaa";

const result = palindromePartitioning(str);

console.log(result);

// ⏱️ Time & Space Complexity:

// Time Complexity: O(n^2 * 2^n)
// - The recursion tree can branch up to 2^n times (each position is either cut or not).
// - For each substring considered, palindrome checking with two pointers is O(n).
// - So overall worst case is O(n^2 * 2^n).
// - This is still faster than the brute force (O(n^3 * 2^n)) because we prune non-palindromes early.

// Space Complexity: O(n + output)
// - O(n) for recursion depth (each call adds one substring to currentPartition).
// - The output itself can be exponential (since the number of palindrome partitions can be huge).
