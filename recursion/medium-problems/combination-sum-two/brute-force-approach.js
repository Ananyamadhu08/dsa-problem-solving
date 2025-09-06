// Given collection of candidate numbers (candidates) and a integer target.Find all unique combinations in candidates where the sum is equal to the target.There can only be one usage of each number in the candidates combination and return the answer in sorted order. For example the combination [1, 1, 2] and [1, 2, 1] are not unique.

function combinationSum(candidates, target) {
  // Sort so combinations are naturally built in non-decreasing order
  const sorted = [...candidates].sort((a, b) => a - b);

  const seen = new Set(); // To track already recorded unique combos
  const allCombinations = []; // Final answer array
  const currentCombination = []; // Current path being built

  function explore(index, currentSum) {
    // Base case: exact match
    if (currentSum === target) {
      const key = currentCombination.join(",");
      if (!seen.has(key)) {
        seen.add(key);
        allCombinations.push([...currentCombination]); // push a copy
      }
      return;
    }

    // Base case: index out of range or sum exceeded
    if (index === sorted.length || currentSum > target) {
      return;
    }

    // Option 1: skip this element
    explore(index + 1, currentSum);

    // Option 2: take this element (once only, so move forward)
    currentCombination.push(sorted[index]);
    explore(index + 1, currentSum + sorted[index]);
    currentCombination.pop(); // backtrack
  }

  explore(0, 0);
  return allCombinations;
}

const candidates = [1, 1, 2];

const target = 4;

const result = combinationSum(candidates, target);

console.log(result);

// Time complexity: O(2^n * n) | each element can be taken or skipped (2^n subsets);
// validating/storing a combination costs O(n) to join into a string key
// Space complexity: O(n) | recursion depth proportional to number of candidates; output not counted
