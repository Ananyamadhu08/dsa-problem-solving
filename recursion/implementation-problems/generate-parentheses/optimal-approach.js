// Given an integer n.Generate all possible combinations of well-formed parentheses of length 2 x N.

function generateAllParentheses(n) {
  const results = []; // To store all valid combinations
  const currentCombination = []; // To build one combination step by step

  function backtrack(openCount, closeCount) {
    // Base case: when we've placed all '(' and ')' pairs, store the result
    if (openCount === n && closeCount === n) {
      results.push(currentCombination.join(""));
      return;
    }

    // If we can still add '(', choose it and recurse
    if (openCount < n) {
      currentCombination.push("("); // choose '('
      backtrack(openCount + 1, closeCount); // explore
      currentCombination.pop(); // undo choice (backtrack)
    }

    // If we can add ')', choose it and recurse
    if (closeCount < openCount) {
      currentCombination.push(")"); // choose ')'
      backtrack(openCount, closeCount + 1); // explore
      currentCombination.pop(); // undo choice (backtrack)
    }
  }

  // Start recursion with 0 open and 0 close parentheses used
  backtrack(0, 0);

  return results;
}

let result = generateAllParentheses(3);

console.log(result);

// Time complexity: O(C_n * n) where C_n is the nth Catalan number (number of valid combinations)
// Space complexity: O(n) for the recursion stack (excluding output storage)
