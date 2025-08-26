// Given an integer n.Generate all possible combinations of well-formed parentheses of length 2 x N.

// Helper 1: Check if a parentheses string is balanced
function isBalanced(parenthesesString) {
  // openCount tracks how many '(' are currently unmatched
  let openCount = 0;

  for (const char of parenthesesString) {
    if (char === "(") {
      openCount++; // we opened one more
    } else {
      openCount--; // we closed one
      if (openCount < 0) return false; // tried to close before opening
    }
  }

  // Valid only if all opens were properly closed
  return openCount === 0;
}

// Helper 2: Recursively build all strings of '(' and ')'
function buildParentheses(position, currentString, totalLength, results) {
  // Base case: we filled all positions; validate and collect if balanced
  if (position === totalLength) {
    if (isBalanced(currentString)) results.push(currentString);
    return;
  }

  // Choice 1: place '(' at this position
  buildParentheses(position + 1, currentString + "(", totalLength, results);

  // Choice 2: place ')' at this position
  buildParentheses(position + 1, currentString + ")", totalLength, results);
}

function generateAllParentheses(n) {
  const results = [];
  const totalLength = 2 * n;

  // Start building from position 0 with an empty string
  buildParentheses(0, "", totalLength, results);

  return results;
}

const result = generateAllParentheses(3);

console.log(result);

// Time complexity: O(n * 2^(2n)) | 2^(2n) strings generated each validated in O(n)
// Space complexity: O(n) | recursion depth O(2n) ~ O(n) output not counted
