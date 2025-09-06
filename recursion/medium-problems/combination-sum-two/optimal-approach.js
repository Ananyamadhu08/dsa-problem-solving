// Given collection of candidate numbers (candidates) and a integer target.Find all unique combinations in candidates where the sum is equal to the target.There can only be one usage of each number in the candidates combination and return the answer in sorted order. For example the combination [1, 1, 2] and [1, 2, 1] are not unique.

function combinationSum(candidates, target) {
  const sorted = [...candidates].sort((a, b) => a - b); // sort to handle duplicates + enable pruning

  const allCombinations = [];
  const currentCombination = [];

  function explore(startIndex, remainingTarget) {
    // Base case: exact match
    if (remainingTarget === 0) {
      allCombinations.push([...currentCombination]);
      return;
    }

    // Iterate over candidates starting at startIndex
    for (let index = startIndex; index < sorted.length; index++) {
      const candidate = sorted[index];

      // Skip duplicates: avoid using the same candidate at the same depth
      if (index > startIndex && candidate === sorted[index - 1]) continue;

      // Prune: if candidate is greater than remaining target, break (since sorted)
      if (candidate > remainingTarget) break;

      // Choose this candidate
      currentCombination.push(candidate);

      // Recurse with next index (each candidate can be used at most once)
      explore(index + 1, remainingTarget - candidate);

      // Backtrack: undo the choice
      currentCombination.pop();
    }
  }

  explore(0, target);

  return allCombinations;
}

const candidates = [1, 1, 2];

const target = 4;

const result = combinationSum(candidates, target);

console.log(result);

// Time complexity: O(2^n) | each element can be chosen or skipped; duplicate skipping + pruning reduce branches in practice
// Space complexity: O(n) | recursion depth proportional to number of candidates; output not counted
