// Given a string s partition string s such that every substring of partition is palindrome. Return all possible palindrome partition of string s.

// Build a palindrome table: palindromeTable[i][j] === true if str[i..j] is a palindrome.
function buildPalindromeTable(str) {
  const strLength = str.length;

  // Create a 2D array strLength × strLength initialized to false
  const palindromeTable = Array.from({ length: strLength }, () =>
    Array(strLength).fill(false)
  );

  // For each character index, expand around it for odd and even palindromes
  for (let center = 0; center < strLength; center++) {
    expand(center, center); // Expand for odd-length palindromes (centered at one char)

    expand(center, center + 1); // Expand for even-length palindromes (centered between two chars)
  }

  // Expand outward from [left..right] while characters match
  function expand(left, right) {
    while (
      left >= 0 && // Ensure left is inside bounds
      right < strLength && // Ensure right is inside bounds
      str[left] === str[right] // Check if characters at left and right are equal
    ) {
      palindromeTable[left][right] = true; // Mark substring str[left..right] as palindrome

      left--; // Move one step left
      right++; // Move one step right
    }
  }

  return palindromeTable; // Return the filled palindrome lookup table
}

function palindromePartitioningMostOptimal(str) {
  const strLength = str.length;

  const palindromeTable = buildPalindromeTable(str); // Precompute all palindromes once

  const memo = new Map(); // Cache results for partitionsFrom(startIndex)

  // Recursive helper: return all palindrome partitions of str[startIndex..end]
  function partitionsFrom(startIndex) {
    if (startIndex === strLength) return [[]]; // Base case: empty suffix → one empty partition

    if (memo.has(startIndex)) return memo.get(startIndex); // Reuse cached result if already computed

    const result = []; // Collect partitions starting from this index

    // Try all possible end positions for the next substring
    for (let endIndex = startIndex; endIndex < strLength; endIndex++) {
      if (palindromeTable[startIndex][endIndex]) {
        // Only continue if str[startIndex..endIndex] is palindrome
        const piece = str.slice(startIndex, endIndex + 1); // Extract the palindrome substring

        const tails = partitionsFrom(endIndex + 1); // Recursively partition the remaining suffix

        for (const tail of tails) {
          // For each valid tail partition
          result.push([piece, ...tail]); // Prepend current piece to tail and add to result
        }
      }
    }

    memo.set(startIndex, result); // Cache the result for this startIndex

    return result; // Return all palindrome partitions from this index
  }

  return partitionsFrom(0); // Start recursion from the beginning of the string
}

const str = "aabaa";

const result = palindromePartitioningMostOptimal(str);

console.log(result);

// ⏱️ Time & Space Complexity

// Time Complexity: O(strLength^2 + strLength * P)
// - O(strLength^2) to precompute palindromes.
// - O(strLength * P) to build all partitions, where P = number of partitions.

// Space Complexity: O(strLength^2 + strLength) + output
// - O(strLength^2) for the palindrome table.
// - O(strLength) for recursion stack depth.
// - Output itself is O(strLength * P), which can be exponential.
