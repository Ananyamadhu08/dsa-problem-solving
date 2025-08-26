// Given an integer n.Generate all possible combinations of well-formed parentheses of length 2 x N.

function generateAllParentheses(n) {
  // memoizedResults.get(k) => array of all valid strings with k pairs
  const memoizedResults = new Map();

  memoizedResults.set(0, [""]); // Base: with 0 pairs, the only "string" is empty

  function buildParentheses(pairCount) {
    // Return cached result if already computed
    if (memoizedResults.has(pairCount)) return memoizedResults.get(pairCount);

    const combinations = [];

    // Distribute the remaining (pairCount - 1) pairs:
    // i pairs go inside the first outer "()", and the rest go after it.
    for (let i = 0; i < pairCount; i++) {
      const insideCombinations = buildParentheses(i);
      const afterCombinations = buildParentheses(pairCount - 1 - i);

      // Combine every 'inside' with every 'after'
      for (const inside of insideCombinations) {
        for (const after of afterCombinations) {
          combinations.push("(" + inside + ")" + after);
        }
      }
    }

    memoizedResults.set(pairCount, combinations);

    return combinations;
  }

  return buildParentheses(n);
}

let result = generateAllParentheses(3);

console.log(result);

// Time complexity: O(C_n * n) where C_n is the nth Catalan number (number of valid combinations)
// Space complexity: O(C_n * n) for memoized storage + O(n) recursion depth (excluding output duplication)
